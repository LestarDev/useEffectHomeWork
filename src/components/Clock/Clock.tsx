import { useEffect, useState } from "react";
import ClockTime from "./ClockTime/ClockTime";
import ClockDate from "./ClockDate/ClockDate";

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
        <ClockTime hereDate={currentDate} />
        <ClockDate hereDate={currentDate} />
    </div>
}

export default Clock