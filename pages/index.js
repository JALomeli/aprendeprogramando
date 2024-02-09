import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="relative ">
      <div className="fixed inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/Image/FondoInicio.svg')", opacity: 0.85 }} />
      <div className="relative z-10">
        <Header />
        <Footer />
      </div>
    </main>
  )
}
