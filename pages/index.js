import  { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home= () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is instagram clone</h1>
    </div>
  )
}

export default Home
