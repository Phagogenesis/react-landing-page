import "../styles/cards.css"
export default function Cards() {
    return(
        <div className="cards">
            <p className="article-style">Articles</p>
            <div className="cards-style">
                <div className="card">
                    <img src=".\src\Assets\card1.png"></img>
                    <div className="text">Outer space is the region beyond a planet's atmosphere. For Earth it begins about 100 kilometers (62 miles) above sea level.</div> 
                </div>
                <div className="card">
                    <img src=".\src\Assets\card2.png"></img>
                    <div className="text">Outer space is the region beyond a planet's atmosphere. For Earth it begins about 100 kilometers (62 miles) above sea level.</div> 
                </div>
                <div className="card">
                    <img src=".\src\Assets\card3.png"></img>
                    <div className="text">Outer space is the region beyond a planet's atmosphere. For Earth it begins about 100 kilometers (62 miles) above sea level.</div> 
                </div>
            </div>
        </div>
    )
}
