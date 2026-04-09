
export default function Button({type, name, styles}) {
    let {w,h,bg,c} = styles;
    const handleClick= (e) => {
        console.log(e.target.name, e.target.innerText);
    }
    
    return(
        <button type={type} 
        name={name} 
        style={{width:styles.w, 
            height:styles.h, 
            backgroundColor:styles.bg,
            color:styles.c}}
        onClick={handleClick}
        // onClick={(e)=>{console.log(e.target.name, e.target.innerText);}}   
            >{name}</button>
    )
}