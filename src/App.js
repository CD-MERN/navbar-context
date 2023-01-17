import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrapper';
import NavContext from './context/NavContext';


function App() {
  const [name, setName] = useState('');

  return (
    <div className='App'>
      <NavContext.Provider value={{name, setName} }>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </NavContext.Provider>
    </div>
  );
}

export default App;