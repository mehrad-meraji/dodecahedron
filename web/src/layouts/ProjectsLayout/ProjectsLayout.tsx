import { ReactNode } from "react";

import { Link, routes } from "@redwoodjs/router";

import GeneralWorkspaceLayout from "src/components/GeneralWorkspaceLayout/GeneralWorkspaceLayout";
import NewProject from "src/components/Project/NewProject/NewProject";

type ProjectLayoutProps = {
  children: ReactNode;
};

const ProjectsLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <GeneralWorkspaceLayout
      header={
        <>
          <h1 className="ml-2 text-base font-semibold leading-none text-ice-400">
            <Link to={routes.projects()}>Projects</Link>
          </h1>
          <NewProject />
        </>
      }
    >
      {children}
    </GeneralWorkspaceLayout>
  );
};

export default ProjectsLayout;
