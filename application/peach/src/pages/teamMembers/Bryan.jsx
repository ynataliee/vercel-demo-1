import bryanIcon from '../../assets/bryan icon.png'
import '../../styles/about-us/members.css'

function Bryan() {
    return (
        <>
            <div className="memberProfileContainer">
                <div className="memberProfile">
                    <img className="memberProfileIcon" src={bryanIcon} alt="Bryan Icon"/>
                    <h1 style={{margin: 'unset', padding: 5}}>Bryan</h1>
                    <h4>Back End Lead</h4>
                </div>
                <div className="memberDesc">
                    I like to eat, sleep, play games, and code.
                </div>
            </div>
        </>
    )
}

export default Bryan