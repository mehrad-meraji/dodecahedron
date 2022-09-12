import { Image, Text } from "@chakra-ui/react";
import { UserButton } from "@clerk/clerk-react";

import { useAuth } from "@redwoodjs/auth";
import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <MetaTags title="Landing" description="Landing page" />
      <header className={"border-b border-ice-700"}>
        <section className="container mx-auto flex items-center justify-between py-3 pl-2 pr-4">
          <div className={"flex items-center gap-2"}>
            <Image
              h={10}
              src={"/dodecahedron-icon.png"}
              alt={"Dodecahedron Logo"}
            />
            <Text className={"text-lg font-semibold"}>Dodecahedron</Text>
          </div>
          {isAuthenticated ? (
            <div className={"flex items-center gap-4"}>
              <Link
                to={routes.workspace()}
                className={
                  "inline-block border border-ice-700 px-4 leading-9 hover:border-ice-300 hover:bg-ice-700"
                }
              >
                Workspace
              </Link>
              <UserButton afterSignOutUrl={window.location.href} />
            </div>
          ) : (
            <Link to={routes.signIn()}>Sign In</Link>
          )}
        </section>
      </header>
      <section className={"h-full bg-ice-900"}></section>
    </>
  );
};

export default LandingPage;
