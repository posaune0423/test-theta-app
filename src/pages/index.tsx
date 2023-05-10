import { NextPage } from 'next'
import { Home } from '../components/home'
import { Layout } from '../layouts'

const Page: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default Page
