import Counter from "./Counter";

const Car = (props) => {
    console.log(props);
    return (
        <>
        <Counter/>
            <h1>Brand is {props.brand} and Model is {props.model}</h1>
        </>
    )
}

export default Car;