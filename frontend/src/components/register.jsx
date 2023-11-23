function Register(props) {

    async function sendRegisterToBackend(email, password) {
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
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault(); //stop reseting screen
        sendRegisterToBackend(props.email, props.password)
    }

    console.log(props.email);

    return (
        <div>
            <hr/> 
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <label for="email">Enter your email</label> 
                <input className="emailbox" type="text" id="email" required onChange = {(event) => props.setEmail(event.target.value)}></input>
                <br />
                <label for="password">Enter a password</label>
                <input className="passwordbox" type="text" id="password" required onChange = {(event) => props.setPassword(event.target.value)}></input>
                <br/>
                <input type="submit"/>
            </form>
            <hr/>
        </div>
    )
};

export default Register;