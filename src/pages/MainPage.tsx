import { useState } from "react";
import ColorfulDiv from "../components/ColorfulDiv/ColorfulDiv"
import CustomTitle from "../components/CustomTitle/CustomTitle";
import UserInfo from "../components/UserInfo/UserInfo";
import Clock from "../components/Clock/Clock";
import StopWatch from "../components/StopWatch/StopWatch";

const MainPage = () => {

    const [clickCount, setClickCount] = useState(1);

    return <div>
        <ColorfulDiv />
        <p onClick={()=>{setClickCount(prevV=>prevV+1)}}>Element p</p>
        <UserInfo />
        <Clock />
        <CustomTitle count={clickCount} />
        <StopWatch />
    </div>
}

export default MainPage