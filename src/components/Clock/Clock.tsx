import { useEffect, useState } from "react";

export type clockType = {
    hereDate: Date
}

const Clock = () => {

    const todaysDate: Date = new Date();

    const [currentDate, setCurrentDate] = useState(todaysDate);

    useEffect(()=>{
        const clockClick = setInterval(()=>{
            setCurrentDate(new Date())
        }, 1000)

        return () => clearInterval(clockClick)
    },[currentDate])

    return <div>

    </div>
}

export default Clock