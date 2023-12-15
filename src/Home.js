const Home = () => {
    const title = 'Welcome to the new blog';
    const likes = 50;
    const person1 = { name: 'yoshi', age: 30 };
    const person2 = { name: 'mario', age: 10 };
    const persons = [person1,person2];
    console.log(persons[0]);
    return ( 
    <div className="home">
        <h2>Homepage</h2>
        <h1>{title}</h1>
        <p>Liked { likes } times</p>
        <h2>{person1.name}</h2>
        <h2>{person1.age}</h2>
        <h2>{persons[0].name}</h2>
        <h3>{Math.random() * 10}</h3>
    </div> 
    );
}

export default Home;