import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import Nav from '../components/nav'
import Welcome from '../components/welcome'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Welcome />
      
    </div>
  )
}

export default Home
