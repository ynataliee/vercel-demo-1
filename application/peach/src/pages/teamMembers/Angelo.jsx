import angeloIcon from '../../assets/angelo icon.png'
import '../../styles/about-us/members.css'

function Angelo() {
    return (
        <>
            <div className="memberProfileContainer">
                <div className="memberProfile">
                    <img className="memberProfileIcon" src={angeloIcon} alt="Angelo Icon"/>
                    <h1 style={{margin: 'unset', padding: 5}}>Angelo</h1>
                    <h4>Front End Lead</h4>
                </div>
                <div className="memberDesc">
                    My name is Angelo Lance Quetua and my role is Front End Lead.
                    I like doing web development, and I am addicted to Gacha games.
                </div>
            </div>
        </>
    )
}

export default Angelo