import { ReactNode } from "react";

import { Toaster } from "@redwoodjs/web/toast";

type GeneralWorkspaceLayoutProps = {
  children: ReactNode;
  header: ReactNode;
};

const GeneralWorkspaceLayout = ({
  children,
  header,
}: GeneralWorkspaceLayoutProps) => {
  return (
    <section className="flex h-full w-full flex-col">
      <Toaster toastOptions={{ className: "rw-toast", duration: 6000 }} />
      <header className="flex w-full items-center justify-between pr-1 pt-1">
        {header}
      </header>
      <main className="rw-main w-full grow">{children}</main>
    </section>
  );
};

export default GeneralWorkspaceLayout;
