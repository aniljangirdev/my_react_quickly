import { Fragment } from "react";

function ButtonList(props) {
    return (
        <Fragment>
            {getButton(props, 'Up')}
            {getButton(props, 'Down')}
        </Fragment>
    )
}

const getButton = (props, text) => <button disabled={props.disabled}>{text}</button>;

export default ButtonList;