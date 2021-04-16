import React, { useState } from 'react';
import Greeter from './components/Greeter';

const App = () => {

    const [email, setEmail] = useState('');
    const [loaded, setLoaded] = useState(false);

    if (loaded) return (
        <>
            <Greeter text="Hello there" name="L3p" />
            <Greeter text="Idk what to write here" name="oh well" />
            <Greeter text="Sorry I don't have something better to say" name="person reading this" />
            <input placeholder="Email" type="email" onChange={e => {setEmail(e.target.value)}} />  
            <p>You're logging in as: {email}</p>
        </>
    );

    else return (
        <>
            <h1>Website loading...</h1>
            <button onClick={() => setLoaded(true)}>Load?</button>
        </>
    );
}

export default App;