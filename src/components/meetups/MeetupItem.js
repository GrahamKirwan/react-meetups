import { MeetupItemStyled } from "./MeetupItemStyled"

import { FavouritesContext } from "../store/favourites-context"

import { useContext } from "react";


export default function MeetupItem(props) {

    const ctx = useContext(FavouritesContext);

    const isFavourite = ctx.itemIsFavourite(props.data.id)

    function favouritesClickHandler() {
        if(isFavourite) {
           ctx.removeFavourite(props.data.id)
        } else {
            ctx.addFavourite(props.data)
        }

    }


    return (
        <MeetupItemStyled>
            <img src={props.data.image}></img>
            <h2>{props.data.title}</h2>
            <h4>{props.data.location}</h4>
            <p>{props.data.description}</p>
            <a href="#" onClick={favouritesClickHandler}>{isFavourite ? <p>Remove Favourite</p> : <p>To Favourites</p>}</a>
        </MeetupItemStyled>
    )
}