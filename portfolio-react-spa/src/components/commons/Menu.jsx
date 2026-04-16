import { Link,     NavLink } from "react-router-dom";

export default function Menu({href, style, name}) {
   return (
      // <Link to={href} className={style}>{name}</Link> 
      <NavLink to={href} end = {href === "/" } className={({isActive}) => (isActive ? `${style} active` : style)} > {name} </NavLink>
      //react 자체에서 isActive만 사용하도록 했기에, 값을 다른 이름으로 주는 것을 불가능함
   )
}