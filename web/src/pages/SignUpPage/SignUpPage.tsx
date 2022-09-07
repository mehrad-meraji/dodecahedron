import { SignUp } from "@clerk/clerk-react";

import { routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

const SignUpPage = () => {
  return (
    <>
      <MetaTags title="SignUp" description="SignUp page" />

      <SignUp afterSignInUrl={routes.workspace()} signInUrl={routes.signIn()} />
    </>
  );
};

export default SignUpPage;
