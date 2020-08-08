import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as userActions from "../actions/user"

class User extends React.Component {
    render() {
        return (
            <div className="continer">
                <p className="text-center">{this.props.user.title}</p>
                <p className="text-center">User</p>
                <button onClick={() => {this.props.userActions.get_user()}}></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userActions:bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)