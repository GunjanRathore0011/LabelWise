import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import SignInForm from "./auth/SignInForm";
import SignUpForm from "./auth/SignUpForm";
import Home from "./pages/Home";
import ScanProduct from "./pages/ScanProduct";
import Result from "./pages/Result";
import About from "./pages/About";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/scan-product" element={<ScanProduct />} />
        <Route path="/results" element={<Result />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Toaster />

    </BrowserRouter>
  );
}

export default App;
