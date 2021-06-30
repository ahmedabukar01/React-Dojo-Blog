import { useState } from "react";

const Home = () =>{
    const [name,setName] = useState('Ahmed');
    const [age,setAge] = useState(23);

    const ya = (Mname,Mage) =>{
        setName(Mname);
        setAge(Mage)
    }
    return (
        <div className="content">
            <p>hey I'm {name} {age} year old, and that means more !!!</p>
            <h1>Home Page</h1>
            <button onClick={()=>ya('Nur',18)}>click me</button>
        </div>
    )
}
export default Home;