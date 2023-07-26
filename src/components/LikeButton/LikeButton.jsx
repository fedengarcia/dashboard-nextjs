'use client'
import { useState } from "react"


export const LikeButton = ({id}) => {
    const [liked, setLiked] = useState(false);

    return (
        <button onClick={() => setLiked(!liked)}>
           {liked ? "me gusta" : "no me gusta"}
        </button>
    )
} 