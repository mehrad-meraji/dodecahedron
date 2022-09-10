
import { Link, routes } from "@redwoodjs/router";
import { Toaster } from "@redwoodjs/web/toast";

import NewProject from "src/components/Project/NewProject/NewProject";

type ProjectLayoutProps = {
  children: React.ReactNode;
};

const ProjectsLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <section className="flex h-full w-full flex-col">
      <Toaster toastOptions={{ className: "rw-toast", duration: 6000 }} />
      <header className="flex w-full items-center justify-between pr-1 pt-1">
        <h1 className="ml-2 text-base font-semibold leading-none text-ice-400">
          <Link to={routes.projects()}>Projects</Link>
        </h1>
        <NewProject />
      </header>
      <main className="rw-main w-full grow">{children}</main>
    </section>
  );
};

export default ProjectsLayout;
