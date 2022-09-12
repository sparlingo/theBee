import { Container } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Container>
        <p>
          My default route is named <code>home</code>, link to me with `
          <Link to={routes.home()}>Home</Link>`
        </p>
      </Container>
    </>
  )
}

export default HomePage
