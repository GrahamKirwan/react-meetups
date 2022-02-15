import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetup() {

    const history = useHistory();

    function formSubmitHandler(data) {

        fetch("https://gecko-cd41e-default-rtdb.firebaseio.com/meetups.json", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(() => {
            console.log("Meetup submitted!")
            history.replace("/")
        })
    }

    return (
        <>
            <h1>Add New Meetup</h1>
            <NewMeetupForm formSubmitHandler={formSubmitHandler}></NewMeetupForm>
        </>
    )
}