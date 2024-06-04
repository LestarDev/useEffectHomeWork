import { useEffect, useState } from "react"

type colorDiv = {
    colorStyle: string
}

const ColorfulDiv = ({colorStyle}: colorDiv) => {

    const [divColor, setDivColor] = useState("");
    
    useEffect(()=>{

        const changeColor = setTimeout(()=>{
            setDivColor(colorStyle);
        }, 2000)

        return () => clearInterval(changeColor);

    },[colorStyle])

    return <div style={{background: divColor}}>

    </div>
}

export default ColorfulDiv