import { writeCookie } from "../utils/utilities";

function Register(props) {

    async function sendRegisterToBackend(email, password, setLoggedIn) {
        try {
            const response = await fetch(
                "http://localhost:5001/registerUser",
                {
                    method : "POST",
                    headers : {"Content-Type" : "application/json"},
                    body : JSON.stringify({
                        email : email,
                        password : password
                    })
                }
            );
            const data = await response.json(); // provides thunderclient response and token
            console.log(data.token);
            writeCookie("jwt_token",data.token,7);
            setLoggedIn(true);

        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault(); //stop reseting screen
        sendRegisterToBackend(props.email, props.password, props.setLoggedIn)
    }

    return (
        <div className="box">
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter your email</label> 
                <input 
                    className="emailbox" 
                    type="text" 
                    id="email" 
                    required 
                    onChange = {(event) => props.setEmail(event.target.value)}
                />
                <br />
                <label htmlFor="password">Enter a password</label>
                <input 
                    className="passwordbox" 
                    type="text" 
                    id="password" 
                    required 
                    onChange = {(event) => props.setPassword(event.target.value)}
                />
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
};

export default Register;