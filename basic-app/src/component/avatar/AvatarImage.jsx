import style from "./Avatar.module.css";
import people1 from "../../assets/people1.webp";

export default function AvatarImage({img}) {
    return(
        <img src={img} className={style.avatar_img} />
    )
}