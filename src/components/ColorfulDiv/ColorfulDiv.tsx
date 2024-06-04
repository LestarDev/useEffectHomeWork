import { useEffect, useState } from "react"
import './ColorfilDiv.css'

const ColorfulDiv = () => {

    const [divColor, setDivColor] = useState("cornflowerblue");
    
    useEffect(()=>{

        const changeColor = setTimeout(()=>{
            setDivColor("tomato");
        }, 2000)

        return () => clearInterval(changeColor);

    },[])

    return <div className="colorful" style={{background: divColor}}>

    </div>
}

export default ColorfulDiv