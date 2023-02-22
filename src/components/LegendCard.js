import React from "react";

function LegendCard({ id, name, img, likes }) {
    console.log(img)

    return (
        <div className="ui card">
            <div className="image">
                <img src={img} alt={name} />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
                <p>Likes: {likes}</p>
                {/* <button onClick={handleLike}>❤️</button> */}
            </div>
        </div>
    )
}

export default LegendCard;