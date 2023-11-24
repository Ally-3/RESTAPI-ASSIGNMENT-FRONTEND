import { writeCookie } from "../utils/utilities";

function Login(props) {

    async function sendLogin(email, password, setLoggedIn) {
        try {
            const response = await fetch(
                "http://localhost:5001/loginUser",
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
        sendLogin(props.email, props.password, props.setLoggedIn);
    }

    return (
        <div className="box">
            <h2>Login User</h2>
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
                <label htmlFor="password">Enter your password</label>
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

export default Login;