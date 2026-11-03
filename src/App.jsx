import NavBar from "./component/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Series from "./component/pages/Series"
import Movies from "./component/pages/Movies"
import Music from "./component/pages/Music"
import Sports from "./component/pages/Sports"
import Gaming from "./component/pages/Gaming"
import Home from "./component/pages/Home"






function App() {
  return (
    
    
  <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/gaming' element={<Gaming/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App