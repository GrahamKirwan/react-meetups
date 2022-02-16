import { MeetupItemStyled } from "./MeetupItemStyled"

import { FavouritesContext } from "../store/favourites-context"

import { useContext, useState } from "react";


export default function MeetupItem(props) {

    const ctx = useContext(FavouritesContext);

    const [isFavourite, setIsFavourite] = useState(ctx.itemIsFavourite(props.data.id))

    function favouritesClickHandler() {
        ctx.addFavourite(props.data)
        setIsFavourite(ctx.itemIsFavourite(props.data.id))
    }


    return (
        <MeetupItemStyled>
            <img src={props.data.image}></img>
            <h2>{props.data.title}</h2>
            <h4>{props.data.location}</h4>
            <p>{props.data.description}</p>
            <a href="#" onClick={favouritesClickHandler}>{isFavourite ? <p>fav</p> : <p>not fav</p>}</a>
        </MeetupItemStyled>
    )
}