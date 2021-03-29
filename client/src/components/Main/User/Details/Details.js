

const Details = (props) => {
    const id = props.match.params.id;

    return (
        <div>
            Details page for {id}
        </div>
    );
}

export default Details 