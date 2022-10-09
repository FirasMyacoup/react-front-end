import axios from "axios";
import { useState } from "react";

function Person () {
    const [ name, setName ] = useState( "firas" );
    const [ age, setAge ] = useState( 22 );
    const [ gender, setGender ] = useState( "male" );
    const [newAge, setNewAge] = useState(" ");


    function handleSubmit ( event ) {
        event.preventDefault();
        setName( event.target.newName.value );
        setGender( event.target.gender.value );
        setAge( event.target.age.value );
        getNewAge();
      
    }

    async function getNewAge() {
    
        await axios.post(`${process.env.REACT_APP_SERVER}person?name=${name}&age=${age}&gender=${gender}`)
        .then(response => {
            setNewAge(response.data)
            console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        })
        
      }
    return (
        <>
        <div class = "person">
            <h2>Person</h2>
            <p data-testid="name">My name is {name}</p>
            <p data-testid="age">My age is {age}</p>
            <p data-testid="gender">My gender is {gender}</p>
            <p>Click twice on sumbit to see the new age!</p>
            {newAge && <p data-testid="newAge">My new age is {newAge}</p>}
        </div>
        <div>
            <form class = "personForm" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="newName" data-testid="name-input" />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" name="age" data-testid="age-input" />
                </label>
                <br />
                <label>
                    Gender:
                    <select name="gender" data-testid="gender-input" >
                        <option value="select">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <br />
                
                <input type="submit" value="Submit" data-testid="submit"/>
            </form>
        </div>
        </>
    );
}


export default Person;