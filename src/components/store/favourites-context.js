import { createContext, useState } from "react";

export const FavouritesContext = createContext();

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourites((prevUserFavourites) => {
            console.log('fav added')
            
            return prevUserFavourites.concat(favouriteMeetup);
        })
        console.log(userFavourites)
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    }

    return (
        <FavouritesContext.Provider value={context}>
            {props.children}
        </FavouritesContext.Provider>
    )
}