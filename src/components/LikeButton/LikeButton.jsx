'use client'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"


export const LikeButton = ({id}) => {
    const [liked, setLiked] = useState(false);

    return (
        <button onClick={() => setLiked(!liked)} style={{
            zIndex:'9999',
            height:'20px',
        }}>
           {liked ? 
            <FontAwesomeIcon icon={faHeart} style={{color:"red"}} title="Like post"/>
           : <FontAwesomeIcon icon={faHeart} style={{color:"gray"}} title="Remove like"/>}
        </button>
    )
} 