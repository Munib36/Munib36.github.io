import "../css/hero.css"



export default function Hero(){
    return(
        <div className="hero">
            <div className="hero--video-container">
                <video className="video" autoPlay loop muted playsInline>
                    <source src="https://purewatercleanair.ca/wp-content/uploads/2021/05/water.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            <div className="hero--sidebar">
                <div className="first">
                    <input type="checkbox" id="ch" />
                    <h3>
                        Water is absolutely the most taken for granted item in the world. Most everyone seems to think that "2 parts hydrogen and 1 part oxygen" is just plain and simple.
                    </h3>
                    <content>
                        <h3>    
                            Nothing could be further from the truth ! Those little H2O guys dissolve more stuff than anything else in the world...they can change physical characteristics, 
                            react differently under different flow rates, pressures, temperatures. They can be gentle and soothing...they can cut 10 inches of steel and level cities ! They 
                            can heal and make grow, they can kill and starve. Science books have thousands of pages devoted solely to water.
                            <br />
                            <label className="show-button" for="ch">show less</label>
                        </h3>
                        
                    </content>
                    <h3>
                        <label className="show-button" for="ch">show more</label>
                    </h3>
                </div>
            </div>

            <div className="circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                </svg>
            </div>
        </div>
    )
}