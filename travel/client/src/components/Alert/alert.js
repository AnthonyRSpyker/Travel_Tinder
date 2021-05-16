import React from "react";


const getStyle = (props) => {
    let alertClass = "callout";
    if (props.message.msgError)
        alertClass = alertClass + "alert";
    else
        alertClass = alertClass + "success"
    return alertClass;

}

const Message = props => {
    return (
        <div className={getStyle(props)} data-closable>
            {props.message.msgBody}

        </div>

    )
}

export default Message;