import MainNavigation from "./components/layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <Switch>
        <Route path="/" exact>
          <AllMeetups></AllMeetups>
        </Route>
        <Route path="/new-meetup">
          <NewMeetup></NewMeetup>
        </Route>
        <Route path="/favourites">
          <Favourites></Favourites>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
