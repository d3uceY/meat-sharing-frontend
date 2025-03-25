import React, { forwardRef } from "react";
import './infoSection.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
const InfoSection = forwardRef((props,ref)=>{

    return(
        <div ref={ref} className="infoSection">
            <div className="infoTexts">
                <h1>Discover the Benefits of meat Sharing</h1>
                <h4>Our platform connects meat lovers with high-quality, ethically sourced meats. Experience the joy of sharing and enjoying premium cuts from local producers.</h4>
            </div>
            <div className="infoCards">
                <div className="infoCard">
                <FontAwesomeIcon icon={faCube} />
                <h1>Quality Meat fo the Discerning Palate</h1>
                <h4>We Prioritise Quality ensuring every bite is exceptional</h4>
                </div>
                <div className="infoCard">
                <FontAwesomeIcon icon={faCube} />
                <h1>Sustainable sourcing for greener future</h1>
                <h4>Our meat are sourced from sustainable farms commited to ethical practices</h4>
                </div>
                <div className="infoCard">
                <FontAwesomeIcon icon={faCube} />
                <h1>Community Focused..Join Our Meat Lovers network</h1>
                <h4>Become a part of a community that values Quality meat</h4>
                </div>
            </div>
        </div>
    )
})

export default InfoSection