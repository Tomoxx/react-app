import { useState } from "react";

const Home = () => {
    // let name = 'Tomoxx'
    const [name, setName] = useState('tomoxx');
    const [age, setAge] = useState(21);

    const handleClick = (e) => {
        setName('monse');
        setAge(20);
        console.log('Hello, you clicked', e);
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }

    return ( 
    <div className="home">
        <h1>Homepage</h1>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click me</button>
        <button onClick={() => {handleClickAgain('Tomoxx')}}>Click me again</button>
    </div> 
    );
}

export default Home;