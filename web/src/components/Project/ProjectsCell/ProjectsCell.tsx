import type { FindProjects } from "types/graphql";

import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web";

import NewProject from "src/components/Project/NewProject/NewProject";
import Projects from "src/components/Project/Projects";

export const QUERY = gql`
  query FindProjects {
    projects {
      id
      userID
      name
      description
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <div
        className={
          "flex h-20 w-full max-w-md shrink-0 items-center justify-center gap-2 border border-ice-600 p-3 text-ice-400"
        }
      >
        {"Add a project using the"}
        <NewProject />
        {"button."}
      </div>
    </section>
  );
};

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ projects }: CellSuccessProps<FindProjects>) => {
  return <Projects projects={projects} />;
};
