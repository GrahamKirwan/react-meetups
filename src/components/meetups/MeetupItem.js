import { MeetupItemStyled } from "./MeetupItemStyled"

import { FavouritesContext } from "../store/favourites-context"

import { useContext } from "react";


export default function MeetupItem(props) {

    const ctx = useContext(FavouritesContext);

    function favouritesClickHandler() {
        console.log(ctx.favourites)
        ctx.addFavourite(props.data)
        console.log(ctx.favourites)

        // const help = ctx.itemIsFavourite(props.data.id)
    }

    return (
        <MeetupItemStyled>
            <img src={props.data.image}></img>
            <h2>{props.data.title}</h2>
            <h4>{props.data.location}</h4>
            <p>{props.data.description}</p>
            <a href="#" onClick={favouritesClickHandler}>To Favourites</a>
        </MeetupItemStyled>
    )
}