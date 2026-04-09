import Logo from "./common/Logo.jsx"
import Image from "./common/Image.jsx"
import people1 from './assets/people1.webp'

export default function App() {
    return(
        <>
            <Logo img="https://www.lottecinema.co.kr/NLCHS/Content/images/common/logo_footer.gif"
                alt="Logo"
                w="300px"
                h="100%"/>
            <Logo img="https://cdn.cgv.co.kr/cgvpomscontent/ips/unitCnts/2025/1114/4c8da3708290405bb6400a6a553cade2.svg"
                alt="Logo"
                w="100px"
                h="100%"
                d="flex"/>
            <Image img={people1}
                    alt="프로필"
                    h="300px"
                />
        </>
    )
}
