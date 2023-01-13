import React, {useState} from "react";
export const Tour = ({ id,image,info,price,name,removeTour }) =>{
    const [readMore, setReadMore] = useState(false);
    return(
        <article className="signleTour">
            <img src={image} alt={name} className="tourImage"/>
            <footer className="tourFooter">
                <div className="tourInfo">
                    <h4>{name}</h4>
                    <h4 className="tourPrice">${price}</h4>
                </div>
                <p>{readMore ? info : `${info.substring(0, 200)}...`}
                <button className="read-show" onClick={()=> setReadMore(!readMore)}>
                    {readMore? '.. show less' : 'read more'}
                </button>
                </p>
                <button className="tour-btn" onClick={()=> removeTour(id)}>not interested</button>
            </footer>
        </article>
    )
}