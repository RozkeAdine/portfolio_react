import '../styles/BackgroundVideo.css';

function BackgroundVideo(){
    return (
        <div>
            <video autoPlay loop muted id="video">
                <source src={require('../assets/Hud1.mp4')} type="video/mp4"/>
            </video>
        </div>
    )
}

export default BackgroundVideo