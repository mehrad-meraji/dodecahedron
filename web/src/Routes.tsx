// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route, Set } from '@redwoodjs/router'

import MarketingLayout from 'src/layouts/MarketingLayout/MarketingLayout'
import WorkspaceLayout from 'src/layouts/WorkspaceLayout/WorkspaceLayout'
import AuthenticationLayout from "src/layouts/AuthenticationLayout/AuthenticationLayout";

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
      <Set wrap={WorkspaceLayout}>
        <Route path="/workspace" page={WorkspacePage} name="workspace" />
        <Route path="/workspace/task-manager" page={TaskManagerPage} name="taskManager" />
        <Route path="/workspace/settings" page={SettingsPage} name="settings" />
      </Set>
    </Router>
  )
}

export default Routes
