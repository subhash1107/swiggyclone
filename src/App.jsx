import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Layout from "./Layout"
import Search from "./Search"
import Offers from "./Offers"
import Help from "./Help"
import TermsandConditions from "./TermsandConditions"
import FloatingLabelInput from "./FloatingLabelInput"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search/>}/>
          <Route path="offers" element={<Offers/>}/>
          <Route path="help" element={<Help/>}/>
          
        </Route>
        <Route path="terms-and-condition" element={<TermsandConditions/>}/>
        <Route path="FloatingLabelInput" element={<FloatingLabelInput/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
