import './App.css';
import { useState } from 'react';
import Register from './components/register';
import Login from './components/login';
import ListUsers from './components/listUsers';
import Logoff from './components/logoff';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userlist, setUserlist] = useState([]);

  return (
    <div className="App">
      {loggedIn ? (
        <>
        <Logoff
          setLoggedIn={setLoggedIn}
          setUserlist={setUserlist}
          setEmail={setEmail}
        />
        <ListUsers
          setUserlist={setUserlist}
          userlist={userlist}
          setLoggedIn={setLoggedIn}
        />
        </>
      ) : (
        <>
          <Register
            setEmail={setEmail}
            email={email}
            setPassword={setPassword}
            password={password}
            setLoggedIn={setLoggedIn}
          />
          <Login
            setEmail={setEmail}
            email={email}
            setPassword={setPassword}
            password={password}
            setLoggedIn={setLoggedIn}
          />
        </>
      )}
    </div>
  );
}

export default App;
