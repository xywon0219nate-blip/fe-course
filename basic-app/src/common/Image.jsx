

export default function Image({img,alt,w,h,d, className}) {
    return(
        <img src={img}
            alt={alt} 
            style={{w:w,
                h:h,
                d:d}}
                className={className}
                />
    )
}