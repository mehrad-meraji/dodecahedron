import { ReactNode } from "react";

import { Link, routes } from "@redwoodjs/router";

import GeneralWorkspaceLayout from "src/components/GeneralWorkspaceLayout/GeneralWorkspaceLayout";

type SettingsPageProps = {
  children: ReactNode;
};

const SettingsPage = ({ children }: SettingsPageProps) => {
  return (
    <GeneralWorkspaceLayout
      header={
        <h1 className="ml-2 text-base font-semibold leading-none text-ice-400">
          <Link to={routes.settings()}>Settings</Link>
        </h1>
      }
    >
      {children}
    </GeneralWorkspaceLayout>
  );
};

export default SettingsPage;
