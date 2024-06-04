import { clockType } from "../Clock"

const ClockDate = ({hereDate}: clockType) => {

    return <h1>{hereDate.toLocaleDateString()}</h1>
}

export default ClockDate