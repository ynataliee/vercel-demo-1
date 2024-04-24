import angeloIcon from '../assets/angelo icon.png'
import ariannaIcon from '../assets/arianna icon.png'
import bryanIcon from '../assets/bryan icon.png'
import michelleIcon from '../assets/michelle icon.jpg'
import natalieIcon from '../assets/natalie icon.jpg'
import westleyIcon from '../assets/westley-icon.webp'
import { useNavigate } from 'react-router-dom'

import "../styles/about-us/aboutus.css"

function TeamMembers() {
    const navigate = useNavigate()

  return (
    <>
      <h2>CSC 648-04 Software Engineering</h2>
      <h1>Team 01 - Peach</h1>
      <div className="container">
        <div className="memberContainer">        
          <a>
            <img src={westleyIcon} onClick={() => navigate('Westley')} 
            className="logo"  alt="Westley Icon" />
          </a>
          <h4>Westley</h4>
          <h5>Team Lead</h5>
        </div>

        <div className="memberContainer">
          <a>
            <img src={natalieIcon} onClick={() => navigate('Natalie')} 
            className="logo" alt="React logo" />
          </a>
          <h4>Natalie</h4>
          <h5>Everything Lead</h5>
        </div>
                
        <div className="memberContainer">
          <a>
            <img src={angeloIcon} onClick={() => navigate('Angelo')} 
            className="logo" alt="React logo" />
          </a>
          <h4>Angelo</h4>
          <h5>Front End Lead</h5>
        </div>

        <div className="memberContainer">
          <a>
            <img src={bryanIcon} onClick={() => navigate('Bryan')} 
            className="logo" alt="React logo" />
          </a>
          <h4>Bryan</h4>
          <h5>Back End Lead</h5>
        </div>

        <div className="memberContainer">
          <a>
            <img src={ariannaIcon} onClick={() => navigate('Arianna')} 
            className="logo" alt="React logo" />
          </a>
          <h4>Arianna</h4>
          <h5>Scrum Master</h5>
        </div>
        
        
        <div className="memberContainer">
          <a>
            <img src={michelleIcon} onClick={() => navigate('Michelle')} 
            className="logo" alt="React logo" />
          </a>
          <h4>Michelle</h4>
          <h5>GitHub Master</h5>
        </div>
      </div>
    </>
  )
}

export default TeamMembers
