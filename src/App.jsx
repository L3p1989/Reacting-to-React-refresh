import React, { useState } from 'react';
import Greeter from './components/Greeter';

const App = () => {

    const [email, setEmail] = useState('');

    const postEmail = e => {
        e.preventDefault();
        alert(`${email} submitted, thank you!`);
    }

    return (
        <>
            <Greeter text="Hello there" name="L3p" />
            <Greeter text="Idk what to write here" name="oh well" />
            <Greeter text="Sorry I don't have something better to say" name="person reading this" />
            <form> 
                <input placeholder="Email" type="email" onChange={e => {setEmail(e.target.value)}} />
                <button type="submit" onClick={postEmail}>Submit</button>
                <input type="reset" />
            </form>
        </>
    );
}

export default App;