import React, {useState} from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
//Creating State values
const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault()
        //Validate the Values comming from the form.
        if(firstName && email){
            //Creating an Object from the input data from the form.
            const person = {id: new Date().getTime().toString(), firstName: firstName, email: email};
            setPeople(() => {
                return [...people, person];
            });
            //Resetting the values after entering the first person.
            setFirstName('');
            setEmail('');
            console.log(person);
        } else {
            console.log('empty values');
        }
    };
    return (<React.Fragment>
        <article>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='firstName'>Name: </label>
                    <input type='text' id='firstName'
                           name='firstName' value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email: </label>
                    <input type='text' id='email'
                           name='email' value={email}
                            onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <button type='submit'>Add Person</button>
            </form>

            {
                people.map((person, index)=> {
                    const {id, firstName, email} = person;
                    return (<div className='item' key={id}>
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                    </div>)
                })
            }
        </article>
    </React.Fragment>);
};

export default ControlledInputs;

/*
connect label with html elements using htmlFor

We can use onSubmit on the form or We can have it as onClick method in the
Button.

we have connect inputs with the stateValues with value attribute.

How to get input from the form and take them into the React Component.

How to create unique id using data() and insert values to a array().

Show the List in HTML page.

Drawback here is we need state variables for each input.
 */
