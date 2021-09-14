import Head from 'next/head'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Header from '../components/header'
import TopSelections from '../components/topSelections'

export default function Home() {
  return (
    <div className="bg-brownish font-FoundersGroteskRegular font-semibold relative">
      <Head>
        <title>Winery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <TopSelections />
      <Footer />
    </div>
  )
}
