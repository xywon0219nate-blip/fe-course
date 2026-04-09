

export default function Logo({img,alt,w,h,d}) {
    return(
        <img src={img}
        alt={alt} 
        style={{width:w,
            height:h,
        display:d}
        } />
    )
}