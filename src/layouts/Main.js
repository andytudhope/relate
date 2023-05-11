import Footer from '../components/Footer'
import Header from '../components/Header'

const Main = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <Header />
      <div className='flex-1 w-full mb-36'>
        <div className='mx-auto flex flex-col px-8 mt-20 md:px-0 py-16 w-full md:w-[800px] gap-y-12 text-md md:text-2xl font-garamond text-jusitifed items-center'>
            {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
