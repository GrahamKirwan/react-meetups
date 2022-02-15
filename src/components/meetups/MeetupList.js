import MeetupItem from "./MeetupItem";

import { MeetupListStyled } from "./MeetupListStyled";

export default function MeetupList(props) {
  const DUMMY_DATA = props.data;
  
  return (
    <MeetupListStyled>
      {DUMMY_DATA.map((item, index) => (
        <MeetupItem data={item} key={index}></MeetupItem>
      ))}
    </MeetupListStyled>
  );
}
