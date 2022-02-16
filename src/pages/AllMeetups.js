import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect, useContext } from "react";


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

            let num = 0;
          for (const key in data) {
              
            const meetup = {
              title: data[key].title,
              location: data[key].location,
              description: data[key].description,
              image: data[key].image,
              id: num
            };
            meetups.push(meetup);
            num++;
          }
          setLoadedMeetups(meetups);
          setIsLoaded(true);
        });
    }, [])




  return (
    <>
        {isLoaded ? <MeetupList data={loadedMeetups} /> : <p>Loading...</p>}
    </>
  );
}
