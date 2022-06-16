type StatusProps = {
    status: "success" | "error" | "loading...";
};

function Status(props: StatusProps) {
    return ( <div>{props.status}</div> );
}

export default Status;