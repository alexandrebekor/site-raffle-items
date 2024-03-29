import '../styles/globals.css'
import Logo from '../public/logo.png'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex px-4 pt-8 justify-center bg-gray-800">
        <div className="flex">
          <h1 className='text-lg text-white font-bold'>Copa Graça</h1>
        </div>
      </header>
      <main className="flex flex-grow items-center justify-center bg-gray-800">
        <Component {...pageProps} />
      </main>
      <footer className="py-1 text-center bg-black text-white">
        <p className="text-sm">Feito por Agência Bekor &copy; 2023</p>
      </footer>
    </div>
  )
}

export default MyApp
