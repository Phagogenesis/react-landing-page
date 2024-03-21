import "../styles/hero.css"
export default function Hero() {
    return (
        <div className="heromain">
            <div className="herobox">
                <div className="hero" >
                    <div className="out-header">OUTERSPACE</div>
                    <div className="second-header">Let's Learn About Space!</div>
                    <button className="btn">Get Started</button>
                </div>
                <img className="hero-picture" src ="\src\Assets\space-man.png" />
            </div>
        </div>
    )
}