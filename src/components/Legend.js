import React from "react";

function Legend({ id, name, img, likes }) {

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

export default Legend;