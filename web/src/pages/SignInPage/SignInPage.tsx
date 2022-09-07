import { SignIn } from "@clerk/clerk-react";

import { routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

const SignInPage = () => {
  return (
    <>
      <MetaTags title="SignIn" description="SignIn page" />
      <SignIn
        afterSignInUrl={routes.workspace()}
        signUpUrl={routes.signUp()}
      />
    </>
  );
};

export default SignInPage;
