import React from "react"
import { Link, NavLink } from "react-router-dom";
import "./style.css"

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink activeClassName="selected" activeStyle={{color:'yellow'}} exact to="/">Home页面</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" exact to="/mine">Mine页面</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/mine/ucenter">UCenter页面</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}