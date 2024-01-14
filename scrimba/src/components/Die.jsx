export default function Die(props) {
    return(
        <button
            className={props.on ? "active" : ""}
            onClick={() => props.handleClick(props.id)}
        >
            {props.value}
        </button>
    )
}