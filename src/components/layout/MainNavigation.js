import { MainNavStyled } from "../layout/MainNavStyled";

import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <MainNavStyled>
      <h1>React Meetups</h1>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add Meetup</Link>
        </li>
        <li>
          <Link to="/Favourites">Favourites</Link>
        </li>
      </ul>
    </MainNavStyled>
  );
}
