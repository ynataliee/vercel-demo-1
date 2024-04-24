import ariannaIcon from '../../assets/arianna icon.png'
import '../../styles/about-us/members.css'


function Arianna() {
    return (
        <>
            <div className="memberProfileContainer">
                <div className="memberProfile">
                    <img className="memberProfileIcon" src={ariannaIcon} alt="Arianna Icon"/>
                    <h1 style={{margin: 'unset', padding: 5}}>Arianna</h1>
                    <h4>Scrum Master</h4>
                </div>
                <div className="memberDesc">
                    Hello! I am Arianna, the scrum master for the team. I'm here to ensure clear communication and set up sprints to reach our milestones efficiently.
                    I am interested in AI and NLP.
                    When I am not hibernating, I love going hiking, camping, or swimming. My camera is my emotional support friend, capturing the beauty of nature when I go explore.
                </div>
            </div>
        </>
    )
}

export default Arianna
