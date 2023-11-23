import './App.css';
import { useState } from 'react';
import Register from './components/register';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Register 
        setEmail={setEmail} email={email}
        setPassword={setPassword} password={password}>
      </Register>
    </div>
  );
}

export default App;
