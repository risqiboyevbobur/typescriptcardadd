import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Routesload from "./routesload"
import { ShoppingCartProvider } from "./context/ShoppingCardContext"
import { Navshop } from "./components/Navbar"
function App() {

  return (
    <ShoppingCartProvider>
<Navshop/>
      <Routesload />
      <Container className="mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
