import AvatarImage from "./component/avatar/AvatarImage.jsx";
import Avatar from "./component/avatar/Avatar.jsx";
import Menu from "./component/menu/Menu.jsx";
import style from "./component/menu/Menu.module.css";
import people1 from "./assets/people1.webp";
import people2 from "./assets/people2.webp";
import people3 from "./assets/people3.webp";


export function App() {
  return (
    <>
      <AvatarImage img={people1} />
      <Avatar name="Anne" img={people3}/>
    </>
  )
}

export default App
