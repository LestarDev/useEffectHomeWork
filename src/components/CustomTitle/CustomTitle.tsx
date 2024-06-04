import { useEffect } from "react"

type countCustomTitle = {
    count: number
}

const CustomTitle  = ({count}: countCustomTitle) => {

    useEffect(()=>{document.title=count.toString()},[count])

    return <span style={{fontSize: (count * 1.2).toString()+"rem"}}>Kliknięto mnie już: ${count} razy</span>
    
}

export default CustomTitle 