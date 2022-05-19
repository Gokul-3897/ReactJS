import react, {useEffect, useState} from "react";

function UseEffect() {

    const [value, updateValue] = useState(100);

    useEffect(() => {
        document.title ="Gokul";
        console.log("Dom Created.");
    },[value]);
    return(<>
    <h1>This is UseEffect()......</h1>
    <h2>{value}</h2>
    <button onClick={ () =>{updateValue(value * 2)}}>UpdateValue</button>
    </>)
}

export default UseEffect;