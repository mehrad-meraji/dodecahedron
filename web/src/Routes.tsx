import { Router, Route, Set, Private } from "@redwoodjs/router";

import AuthenticationLayout from "src/layouts/AuthenticationLayout/AuthenticationLayout";
import MarketingLayout from "src/layouts/MarketingLayout/MarketingLayout";
import ProjectsLayout from "src/layouts/ProjectsLayout";
import WorkspaceLayout from "src/layouts/WorkspaceLayout/WorkspaceLayout";

const Routes = () => {
  return (
    <Router>
      <Set wrap={AuthenticationLayout}>
        <Route path="/sign-up" page={SignUpPage} name="signUp" />
        <Route path="/sign-in" page={SignInPage} name="signIn" />
      </Set>
      <Set wrap={MarketingLayout}>
        <Route path="/" page={LandingPage} name="landing" />
        <Route notfound page={NotFoundPage} />
      </Set>
      <Private wrap={WorkspaceLayout} unauthenticated="landing">
        <Route path="/workspace" page={WorkspacePage} name="workspace" />
        <Route path="/workspace/task-manager" page={TaskManagerPage} name="taskManager" />
        <Route path="/workspace/settings" page={SettingsPage} name="settings" />
        <Set wrap={ProjectsLayout}>
          <Route path="/workspace/projects/{id:Int}/edit" page={ProjectEditProjectPage} name="editProject" />
          <Route path="/workspace/projects/{id:Int}" page={ProjectProjectPage} name="project" />
          <Route path="/workspace/projects" page={ProjectProjectsPage} name="projects" />
        </Set>
      </Private>
    </Router>
  );
};

export default Routes;
