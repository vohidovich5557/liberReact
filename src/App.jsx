import { Home } from "./pages/home"
import { Routes, Route } from "react-router-dom"
import { BookDetail } from "./pages/book-details"
import { ProductDetail } from "./pages/product-details"
import { ProductBanner } from "./components/banner/product-banner"
import { MainLayout } from "./layout/main-layout"

function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route  index element={<Home />}/>
        <Route path="prodcutBanner" element={<ProductBanner />}/>
        <Route  path="productBanner/:productId" element={<ProductDetail />}/>
        <Route  path="productBanner2/:bookId" element={<BookDetail />}/>
        </Route>
      </Routes>


    </>
  )
}

export default App
