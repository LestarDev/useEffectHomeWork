import { useState } from "react";
import ColorfulDiv from "../components/ColorfulDiv/ColorfulDiv"
import CustomTitle from "../components/CustomTitle/CustomTitle";
import UserInfo from "../components/UserInfo/UserInfo";

const MainPage = () => {

    const [clickCount, setClickCount] = useState(1);

    return <div>
        <ColorfulDiv />
        <p onClick={()=>{setClickCount(prevV=>prevV+1)}}>Element p</p>
        <UserInfo />
        <CustomTitle count={clickCount} />
    </div>
}

export default MainPage