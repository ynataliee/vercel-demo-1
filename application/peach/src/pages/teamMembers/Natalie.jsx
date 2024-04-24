import natalieIcon from '../../assets/natalie icon.jpg'
import '../../styles/about-us/members.css'

function Natalie() {
    return (
        <>
            <div className="memberProfileContainer">
                <div className="memberProfile">
                    <img className="memberProfileIcon" src={natalieIcon} alt="Natalie Icon"/>
                    <h1 style={{margin: 'unset', padding: 5}}>Natalie</h1>
                    <h4>Everything Lead</h4>
                </div>
                <div className="memberDesc">
                    Hi, I work in the backend and also lead the AI portion of this project. I like to go for walks. 
                </div>
            </div>
        </>
    )
}

export default Natalie