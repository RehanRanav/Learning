// import react from 'react';

const Car = (props) => {
    console.log(props);
    return (
        <>
            <h1>Brand is {props.brand} and Model is {props.model}</h1>
        </>
    )
}

export default Car;