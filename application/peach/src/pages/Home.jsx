import { useNavigate } from 'react-router-dom'

function Home(){

    const navigate = useNavigate()
    return(
        <>
            <div className="home-container">
                <h1>Peach!!!! Making new changes </h1>
                <h2 onClick={() => navigate('/TestInterests')}>Test Interests Tag</h2>
            </div>
        </>
    )
}

export default Home