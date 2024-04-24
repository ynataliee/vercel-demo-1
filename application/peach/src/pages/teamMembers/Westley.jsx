import westleyIcon from '../../assets/westley-icon.webp'
import '../../styles/about-us/members.css'

function Westley() {
    return (
        <>
            <div className="memberProfileContainer">
                <div className="memberProfile">
                    <img className="memberProfileIcon" src={westleyIcon} alt="Westley Icon"/>
                    <h2 style={{margin: 'unset', padding: 5}}>Westley</h2>
                    <h4>Team Lead</h4>
                </div>
                <div className="memberDesc">
                    <p>
                        Hi I'm Westley, the team lead for this project. I'm
                        excited to get started working on this project. I like
                        cooking and playing guitar.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Westley
