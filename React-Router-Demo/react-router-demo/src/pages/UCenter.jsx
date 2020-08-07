import React from "react"

const UCenter = (props) => {
    console.log(props);
    return(
        <div>
            Hell UCenter: {props.match.params.id} - {props.match.params.id}
        </div>
    )
}

export default UCenter