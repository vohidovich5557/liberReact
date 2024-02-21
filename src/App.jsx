import { Home } from "./pages/home"
import { Routes, Route } from "react-router-dom"
import { ProductDetail } from "./pages/product-details"
import { MainLayout } from "./layout/main-layout"
import { LogIn } from "./pages/loginpage"
import { Profile } from "./pages/profile-page"

function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id/:slug" element={<ProductDetail />} />
          <Route path="logIn/profile/:id" element={<Profile />} />
        </Route>
        <Route path="logIn" element={<LogIn />} />
      </Routes>
      
    
      
    </>
  )
}

export default App
