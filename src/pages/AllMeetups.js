import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const DUMMY_DATA = [
  {
    title: "Cryptocon",
    location: "Scoatiabank Theatre, Toronto",
    description:
      "This is the first crytpocon in Toronto and should definitely not be missed! It will be a lot of fun!",
    image:
      "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Gymshark Conference",
    location: "Hone, Toronto",
    description:
      "This is the first gym meetup in Toronto and should definitely not be missed! It will be a lot of fun!",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default function AllMeetups() {

    const meetups = [];

    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedMeetups, setLoadedMeetups] = useState(meetups);

    useEffect(() => {
        fetch("https://gecko-cd41e-default-rtdb.firebaseio.com/meetups.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          
          for (const key in data) {
            const meetup = {
              title: data[key].title,
              location: data[key].location,
              description: data[key].description,
              image: data[key].image,
            };
            meetups.push(meetup);
          }
          setLoadedMeetups(meetups);
          setIsLoaded(true);
          console.log(meetups)
          console.log(DUMMY_DATA)
        });
    }, [])



  return (
    <>
        {isLoaded ? <MeetupList data={loadedMeetups} /> : <p>Loading...</p>}
    
    </>
  );
}
