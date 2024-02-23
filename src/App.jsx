import { Home } from "./pages/home"
import { Routes, Route } from "react-router-dom"
import { ProductDetail } from "./pages/product-details"
import { MainLayout } from "./layout/main-layout"
import { LogIn } from "./pages/loginpage"
import { Profile } from "./profilelayout/profile-page"
import { Obuna } from './profilelayout/obuna'
import { Ehisob } from './profilelayout/e-xisob'
import { Kitoblar } from './profilelayout/kitoblar'
import { Saved } from './profilelayout/saved'
import { Setting } from './profilelayout/setting'
import { Audio } from "./profilelayout/audiokitob"

function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id/:slug" element={<ProductDetail />} />
          <Route path="logIn/profile" element={<Profile />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Obuna />} />
            <Route path="exisob" element={<Ehisob />} />
            <Route path="kitoblar" element={<Kitoblar />}>
              <Route index element={<Audio />} />
              <Route path="elektron" element={<Audio />} />
            </Route>
            <Route path="saved" element={<Saved />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
        <Route path="/logIn" element={<LogIn />} />
      </Routes>



    </>
  )
}

export default App
