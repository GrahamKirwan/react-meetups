import { MeetupItemStyled } from "./MeetupItemStyled"

export default function MeetupItem(props) {

    return (
        <MeetupItemStyled>
            <img src={props.data.image}></img>
            <h2>{props.data.title}</h2>
            <h4>{props.data.location}</h4>
            <p>{props.data.description}</p>
            <a href="#">To Favourites</a>
        </MeetupItemStyled>
    )
}