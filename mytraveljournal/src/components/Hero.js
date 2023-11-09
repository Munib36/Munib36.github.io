import Data from "../assets/journals.js"


let pathSvg = "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
let svgX = "http://www.w3.org/2000/svg"

function Card(item){
    return(
            <div className="card">
                <div className="card-img">
                    <img className="img" src={item.imageLink} />
                </div>            

                <div className="card-text">
                    <div className="text-top">
                        <p className="one">
                            <svg xmlns={svgX} height="1em" viewBox="0 0 384 512">
                                <path d={pathSvg}/>
                            </svg>
                            {item.country}
                            <a href={item.mapsLink} target="_blank" className="muted-text">
                                    view on google maps
                            </a>
                        </p>
                        <p className="two">{item.place}</p>
                        <p className="three">{item.startDate} - {item.endDate}</p>
                    </div>
                    <div className="text-bot">
                        <p>
                            {item.desc}
                        </p>
                    </div>

                </div>
            </div>
            
        
    )
}
let i = 0;
let cards = Data.map(item => {
    i++;
    return(
        <>
            <Card 
                key={item.id}
                imageLink={item.imageLink}
                country={item.country}
                mapsLink={item.mapsLink}
                place={item.place}
                startDate={item.startDate}
                endDate={item.endDate}
                desc={item.desc}
            />
            {Data.length == i ? "" : <hr/>}
        </>
    )
    
})


export default function Hero(){
    return(
        <div className="main">
            {cards}
            
        </div>
    )
}