import React from "react";

//information for each card containing tech organization information
const TechOrgCard = ({name, logo, link}) => {
    return(
        //card container
        <div className="card">
            <img src={logo} alt={name}/>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="learn-more-btn">Learn More</button> 
            </a>
        </div>
    )
};

//export the card
export default TechOrgCard;