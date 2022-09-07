import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TaskManagerPage = () => {
  return (
    <>
      <MetaTags title="TaskManager" description="TaskManager page" />

      <h1>TaskManagerPage</h1>
      <p>
        Find me in <code>./web/src/pages/TaskManagerPage/TaskManagerPage.tsx</code>
      </p>
      <p>
        My default route is named <code>taskManager</code>, link to me with `
        <Link to={routes.taskManager()}>TaskManager</Link>`
      </p>
    </>
  )
}

export default TaskManagerPage
