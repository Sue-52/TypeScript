type HelloProps = {
    greet: string;
    onClick: () => void;
}

function Hello(props: HelloProps) {
    return ( 
        <div onClick={props.onClick}>{props.greet}</div>
     );
}

export default Hello;