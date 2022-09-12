import { ReactNode } from "react";

import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

import GeneralWorkspaceLayout from "src/components/GeneralWorkspaceLayout/GeneralWorkspaceLayout";

type WorkspacePageProps = {
  children: ReactNode;
};

const WorkspacePage = ({ children }: WorkspacePageProps) => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <GeneralWorkspaceLayout
        header={
          <h1 className="ml-2 text-base font-semibold leading-none text-ice-400">
            <Link to={routes.workspace()}>Dashboard</Link>
          </h1>
        }
      >
        {children}
      </GeneralWorkspaceLayout>
    </>
  );
};

export default WorkspacePage;
