import React from "react"
import Child from "./Child"

export default class Parent extends React.Component {

    state = {
        value:""
    }
    clickHandle = (data) => {
        this.setState({
            value:data
        })
    }

    render() {
        return (
            <div>
                Parent:{this.state.value}
                <Child title="子标题" onMyEvent={this.clickHandle}/>
            </div>
        )
    }
}