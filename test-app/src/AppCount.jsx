import { useState } from "react";
import TestCount from "./component/TestCount.jsx";


export default function App () {
    const[totalCount, setTotalCount] = useState(0);
    const hadleTotalCount = (type) => {
        if(type === "+") setTotalCount(totalCount + 1);
        else setTotalCount(totalCount - 1);
    }


    return(
        <>
            <h1>AppCount</h1>
            <TestCount click={hadleTotalCount} />
        </>
    )
}