import { NewMeetupFormStyled } from "./NewMeetupFormStyled";

import { useRef } from "react";

export default function (props) {

    const titleRef = useRef();
    const imageRef = useRef();
    const locationRef = useRef();
    const descriptionRef = useRef();

    function onSubmitHandler (e) {
        e.preventDefault()

        const data = {
            title: titleRef.current.value,
            image: imageRef.current.value,
            location: locationRef.current.value,
            description: descriptionRef.current.value,
        }

        props.formSubmitHandler(data);
    }

  return (
    <NewMeetupFormStyled onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id="title" ref={titleRef}></input>
      </div>
      <div>
        <label htmlFor="image">Meetup Image</label>
        <input type="text" required id="image" ref={imageRef}></input>
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input type="text" required id="location" ref={locationRef}></input>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea type="textarea" required rows="6" id="description" ref={descriptionRef}></textarea>
      </div>
      <button>Add Meetup</button>
    </NewMeetupFormStyled>
  );
}
