import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WorkspacePage = () => {
  return (
    <>
      <MetaTags title="Workspace" description="Workspace page" />

      <h1>WorkspacePage</h1>
      <p>
        Find me in <code>./web/src/pages/WorkspacePage/WorkspacePage.tsx</code>
      </p>
      <p>
        My default route is named <code>workspace</code>, link to me with `
        <Link to={routes.workspace()}>Workspace</Link>`
      </p>
    </>
  )
}

export default WorkspacePage
