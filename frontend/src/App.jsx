import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import { Button } from "./components/ui/button"
import SignInForm from "./auth/SignInForm"
import SignUpForm from "./auth/SignUpForm"
import Home from "./pages/Home"
import ScanProduct from "./pages/ScanProduct"
import Result from "./pages/Result"
import About from "./pages/About"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route to={'/sign-in' } element={<SignInForm></SignInForm>}  ></Route>
        <Route to={'/sign-up'} element={<SignUpForm></SignUpForm>} />

        <Route to={"/"} element={<Home></Home>}/>
        <Route to={'/scan-product'} element={<ScanProduct></ScanProduct>}/>
        <Route to={'/results'} element={<Result></Result>}></Route>
        <Route to={'/about'} element={<About></About>} ></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
