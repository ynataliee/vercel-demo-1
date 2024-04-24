import './App.css'
import Navbar from './Layouts/Nav/Navbar.jsx'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import TestPage from './pages/TestPage.jsx'
import Angelo from './pages/teamMembers/Angelo.jsx'
import Bryan from './pages/teamMembers/Bryan.jsx'
import Arianna from './pages/teamMembers/Arianna.jsx'
import Michelle from './pages/teamMembers/Michelle.jsx'
import Westley from './pages/teamMembers/Westley.jsx'
import Natalie from './pages/teamMembers/Natalie.jsx'
import InterestTags from './Components/interestTags.jsx'

function App() {
  return (
    <section>
      <Navbar/>
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/AboutUs/Angelo" element={<Angelo/>} />
          <Route path="/AboutUs/Bryan" element={<Bryan/>} />
          <Route path="/AboutUs/Westley" element={<Westley/>} />
          <Route path="/AboutUs/Natalie" element={<Natalie/>} />
          <Route path="/AboutUs/Arianna" element={<Arianna/>} />
          <Route path="/AboutUs/Michelle" element={<Michelle/>} />
          <Route path="/TestPage" element={<TestPage/>} />
          <Route path="/TestInterests" element={<InterestTags/>} />
          <Route exact path="*" element={
              <div className="errorPage">
                <h2>404: Page not found</h2>
                <p>Page is invalid, try clicking through our existing links</p>
              </div>
              }
          />
        </Routes>
      </Router>
    </section>
  )
}
export default App
