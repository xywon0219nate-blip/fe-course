import {useState, useEffect} from 'react';
import AvatarImageList from '../avatar/AvatarImageList.jsx';
import style from '../avatar/Avatar.module.css'

export default function EffectFetch2() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://localhost:5173/data/list.json")
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.log(error));
    }, [])

    console.log('data-->', data);
    

    return(
        <>
            {/* <AvatarImageList imgList={list} /> */}
        </>
    )
}