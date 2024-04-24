import michelleIcon from '../../assets/michelle icon.jpg'
import '../../styles/about-us/members.css'

function Michelle() {
    return (
        <>
            <div className="memberProfileContainer">
                <div className="memberProfile">
                    <img className="memberProfileIcon" src={michelleIcon} alt="Michelle Icon"/>
                    <h1 style={{margin: 'unset', padding: 5}}>Michelle</h1>
                    <h4>GitHub Master</h4>
                </div>
                <div className="memberDesc">
                    Hello, I'll be working with the group's GitHub repository for this project. I am interested in game development and computer graphics.
                    In my free time, I like to stare at my drywall.
                </div>
            </div>
        </>
    )
}

export default Michelle