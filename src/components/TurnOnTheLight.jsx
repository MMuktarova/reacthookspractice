import { useState } from "react";

function TurnOnTheLight() {
    const [isTheLightOn, setIsTheLightOn] = useState(false)
    const off = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"
    const on = "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png"
    return (
        <>
            <img src={isTheLightOn ? on : off } alt="light" />
            <button onClick={()=> setIsTheLightOn(true)}>Turn On</button>
            <button onClick={()=> setIsTheLightOn(false)}>Turn Off</button>
        </>
    )
}

export default TurnOnTheLight
