import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Hero from './components/Hero'
import PremiumProducts from './components/PremiumProducts'
import Collections from './components/Collections'
import MensFashion from './components/MensFashion'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f1f3f6]">
      <Navbar />
      <Categories/>
      <Hero/>
      <PremiumProducts/>
      <Collections/>
      <MensFashion/>
      <Footer/>
    </div>
  )
}

export default App