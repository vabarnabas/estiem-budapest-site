import type { NextPage } from "next"
import Head from "next/head"
import Events from "../components/events"
import Landing from "../components/landing"
import Layout from "../components/layout"
import Footer from "../components/layout/footer"

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ESTIEM Budapest BME</title>
        <meta name="description" content="Webpage of ESTIEM Budapest BME." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Events />
      <Footer />
    </Layout>
  )
}

export default Home
