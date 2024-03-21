import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Cards from "./Components/Cards"
function App() {

  return (
    <div>
    <Header />
    <div className="content">
      <Hero />
      <Cards />
    </div>
    </div>
  )
}

export default App
