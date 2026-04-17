import ArrowUp from "./content/ArrowTop.jsx"
import { Title, SubTitle } from './commons/Titles.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function Footer({data}) {
    return(
        <>
        <footer id="contact" className="footer">
            <Title title ="Let's Talk"/>
            <SubTitle SubTitle="com.developer.judy@gmail.com" />
            <ul className="contact-links">
                {data?.list?.map((item,idx)=> 
                    <li key={idx}>
                        <a href="#" className="contact-link">
                            {item.icon === "github" && <FontAwesomeIcon icon={faGithub} />}
                            {item.icon === "github" && <FontAwesomeIcon icon={faLinkedin} />} 
                        </a>
                    </li>   
                )}
            </ul>
            <p>{data?.description}</p>
        </footer>
        </>
    )
}