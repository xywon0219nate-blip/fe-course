import AvatarImageList from "./component/avatar/AvatarImageList.jsx";
import AvatarImage from "./component/avatar/AvatarImage.jsx";
import AvatarList from "./component/avatar/AvatarList.jsx";
import Avatar from "./component/avatar/Avatar.jsx";

import Menu from "./component/menu/Menu.jsx";
import mstyle from "./component/menu/Menu.module.css";
import style from "./component/avatar/Avatar.module.css";

import people1 from "./assets/people1.webp";
import people2 from "./assets/people2.webp";
import people3 from "./assets/people3.webp";


export function App() {
  const list = [
    {img:people1, style:style.avatar_img},
    {img:people2},
    {img:people3},
  ]

  const alist = [
    {img:people1, name:"smith"},
    {img:people2, name:"tom"},
    {img:people3, name:"anna"}
  ]

  return (
    <>
      <AvatarImage img={people1} style={style.avatar_img}/>
      <Avatar name="Anne" img={people3}/>
      <AvatarImageList imgList={list}/>
      <AvatarList list={alist}/>
    </>
  )
}

export default App
