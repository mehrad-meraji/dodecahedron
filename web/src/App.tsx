import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ClerkProvider, withClerk } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { theme } from "web/config/chakra-ui-theme";

import { AuthProvider } from "@redwoodjs/auth";
import { FatalErrorBoundary, RedwoodProvider } from "@redwoodjs/web";
import { RedwoodApolloProvider } from "@redwoodjs/web/apollo";

import FatalErrorPage from "src/pages/FatalErrorPage";
import Routes from "src/Routes";
import "./index.css";

// Wrap <ClerkAuthProvider> around the Redwood <AuthProvider>
//
// You can set user roles in a "roles" array on the public metadata in Clerk.
//
// Also, you need to add three env variables: CLERK_FRONTEND_API_URL for web and
// CLERK_API_KEY plus CLERK_JWT_KEY for api. All three can be found under "API Keys"
// on your Clerk.dev dashboard.
//
// Lastly, be sure to add the key "CLERK_FRONTEND_API_URL" in your app's redwood.toml
// [web] config "includeEnvironmentVariables" setting.

const ClerkAuthConsumer = withClerk(({ children, clerk }) => {
  return React.cloneElement(children as React.ReactElement<any>, {
    client: clerk,
  });
});

const ClerkAuthProvider = ({ children }) => {
  const frontendApi = process.env.CLERK_FRONTEND_API_URL;
  if (!frontendApi) {
    throw new Error("Need to define env variable CLERK_FRONTEND_API_URL");
  }

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          logoPlacement: "none",
        },
        elements: {
          card: "shadow-none bg-transparent",
          formFieldErrorText: "text-rose-500",
          identityPreviewEditButton: "text-royal-500",
          formResendCodeLink: "text-royal-500",
          headerTitle: "uppercase",
          headerSubtitle: "hidden",
          dividerLine: "bg-ice-700",
          dividerText: "text-ice-400 uppercase font-medium",
          footerActionLink: "text-royal-500 hover:text-royal-400",
          formFieldInput: "border-ice-400 bg-ice-800 rounded-none",
          socialButtonsBlockButton:
            "bg-ice-800 hover:bg-ice-700 text-xs min-h-0 normal-case rounded-none py-2 px-2",
          formButtonPrimary:
            "bg-royal-600 hover:bg-royal-500 text-xs min-h-0 normal-case rounded-none py-2 px-2",
          footer: {
            "& + div": {
              display: "none",
            },
          },
        },
      }}
      frontendApi={frontendApi}
    >
      <ClerkAuthConsumer>{children}</ClerkAuthConsumer>
    </ClerkProvider>
  );
};

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ClerkAuthProvider>
        <AuthProvider type="clerk">
          <ColorModeScript />
          <ChakraProvider theme={theme}>
            <RedwoodApolloProvider>
              <Routes />
            </RedwoodApolloProvider>
          </ChakraProvider>
        </AuthProvider>
      </ClerkAuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
);

export default App;
