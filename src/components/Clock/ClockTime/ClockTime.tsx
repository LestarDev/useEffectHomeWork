import { clockType } from "../Clock"

const ClockTime = ({hereDate}: clockType) => {

    return <h1>{hereDate.toLocaleTimeString()}</h1>
}

export default ClockTime