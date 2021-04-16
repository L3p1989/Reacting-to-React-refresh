import React from 'react';
import Greeter from './components/Greeter';

const App = () => {
    return (
        <>
            <Greeter text="Hello there" name="L3p" />
            <Greeter text="Idk what to write here" name="oh well" />
            <Greeter text="Sorry I don't have something better to say" name="person reading this" />
        </>
    );
}

export default App;