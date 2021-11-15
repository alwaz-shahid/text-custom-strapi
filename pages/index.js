import Head from 'next/head'
import Home from '../components/layout/Home'

export default function HomePage() {
  return (
    <div className="min-h-full min-w-full ">
      <Head>
        <title>Tic Tac Toe - Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
      
    </div>
  )
}
