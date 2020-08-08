import React from "react"
import querystring from "querystring"
import MineDemo from "./MineDemo"

const Mine = (props) => {
    // const params = new URLSearchParams(props.location.search)
    // console.log(params.get("name"));
    // console.log(params.get("age"));

    // const value = querystring.parse(props.location.search);
    // console.log(value);
    // console.log(value.name);
    // console.log(value.age);

    console.log(props);

    const clickHandle = () => {
        props.history.push("/")
        props.history.replace("/")
    }
    return(
        <div>
            Mine
            <button onClick={clickHandle}>回到Home</button>
            <MineDemo />
        </div>
    )
}

export default Mine