import { SignInButton, UserButton } from '@clerk/clerk-react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from "@redwoodjs/router";

const LandingPage = () => {
  const { currentUser, isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Landing" description="Landing page" />
      <section className={'bg-ice-900 h-full'}>
        {isAuthenticated ? (
          <UserButton afterSignOutUrl={window.location.href} />
        ) : (
          <Link to={routes.signIn()}>Sign In</Link>
        )}
        {isAuthenticated && <h1>Hello {currentUser.firstName}</h1>}
      </section>
    </>
  )
}

export default LandingPage
