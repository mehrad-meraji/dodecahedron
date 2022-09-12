// import humanize from "humanize-string";

import { Link, routes } from "@redwoodjs/router";
import { useMutation } from "@redwoodjs/web";

import { QUERY } from "src/components/Project/ProjectsCell";
import useToast from "src/hooks/use-toast";

const DELETE_PROJECT_MUTATION = gql`
  mutation DeleteProjectMutation($id: Int!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

// const formatEnum = (values: string | string[] | null | undefined) => {
//   if (values) {
//     if (Array.isArray(values)) {
//       const humanizedValues = values.map((value) => humanize(value));
//       return humanizedValues.join(", ");
//     } else {
//       return humanize(values as string);
//     }
//   }
// };

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + "...";
  }
  return output;
};
//
// const jsonTruncate = (obj) => {
//   return truncate(JSON.stringify(obj, null, 2));
// };
//
// const timeTag = (datetime) => {
//   return (
//     datetime && (
//       <time dateTime={datetime} title={datetime}>
//         {new Date(datetime).toUTCString()}
//       </time>
//     )
//   );
// };
//
// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />;
// };

const ProjectsList = ({ projects }) => {
  const toast = useToast();
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
    onCompleted: () => {
      toast.success("Project deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete project " + id + "?")) {
      deleteProject({ variables: { id } });
    }
  };

  return (
    <section className="p-2">
      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th className="border-b border-ice-800 px-2 text-left text-xs font-normal text-ice-400" />
            <th className="border-b border-ice-800 px-2 text-left text-xs font-normal text-ice-400">
              Name
            </th>
            <th className="border-b border-ice-800 px-2 text-left text-xs font-normal text-ice-400">
              Description
            </th>
            <th className="border-b border-ice-800 px-2 text-left text-xs font-normal text-ice-400">
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className={"bg-ice-800"}>
              <td className={"h-10 rounded-l bg-ice-800 p-2 text-xs"}>
                <div className="text-2xs flex h-6 w-6 flex-col overflow-hidden rounded bg-ice-500">
                  <span
                    className={"grow text-center font-semibold text-royal-200"}
                  >
                    DO
                  </span>
                  <span className={"h-2 w-full shrink-0 bg-royal-400"} />
                </div>
              </td>
              <td className={"h-10 bg-ice-800 p-2 text-xs font-semibold"}>
                {truncate(project.name)}
              </td>
              <td className={"h-10 bg-ice-800 p-2 text-xs"}>
                {project.description ? truncate(project.description) : "-"}
              </td>
              <td className={"rounded-r bg-ice-800 p-2 text-right text-xs"}>
                <nav className="rw-table-actions flex justify-end gap-1">
                  <Link
                    to={routes.project({ id: project.id })}
                    title={"Show project " + project.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProject({ id: project.id })}
                    title={"Edit project " + project.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={"Delete project " + project.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(project.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectsList;
