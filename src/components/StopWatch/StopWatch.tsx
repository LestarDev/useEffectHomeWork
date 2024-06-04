import { useEffect, useState } from "react"

const StopWatch = () => {

    const [timeCount, setTimeCount] = useState(0);

    const [isRunning, setIsRunning] = useState(true);

    const emptyLaps: JSX.Element = <ul></ul>;

    const [laps, setLaps] = useState(emptyLaps)

    useEffect(()=>{
        const runTimer = setInterval(()=>{
            if(isRunning)
            setTimeCount(preV=>preV+1)
        }, 1000)

        return () => clearInterval(runTimer)
    },[timeCount, isRunning])

    const restart = () => {
        setLaps(emptyLaps);
        setTimeCount(0);
    }

    const addLap = () => {
        setLaps(prevEl=><ul>
            {prevEl.props.children}
            <li>{timeCount}</li>
        </ul>)
    }

    return <div>
        <h1>Time: {timeCount}s</h1>
        <div className="buttons">
            <button onClick={addLap}>Lap</button>
            <button onClick={()=>{setIsRunning(false)}}>Stop</button>
            <button onClick={restart}>Restart</button>
            <button onClick={()=>{setIsRunning(true)}}>Start</button>
        </div>
        <h2>Laps:</h2>
        {
            laps
        }
    </div>
}

export default StopWatch