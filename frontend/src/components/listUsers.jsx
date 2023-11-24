import { useState } from "react";
import { readCookie } from "../utils/utilities";

function ListUsers(props) {
    const [userlist, setUserlist] = useState([]);

    async function getListOfUsers(setUserlist, userlist) {
        try {
            const jwt_token = await readCookie("jwt_token");
            const response = await fetch(
                "http://localhost:5001/listAllUsers",
                {
                    method : "GET",
                    headers : {
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${jwt_token}`
                    }
                }
            );
            const data = await response.json(); // provides thunderclient response
            setUserlist(data);
            console.log(data);
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    function handleClick(event) {
        getListOfUsers(setUserlist, userlist);
    }

    function handleOffClick(event) {
        setUserlist([]);
    }

    return (
        <div className="box">
                <h2>List All Users</h2>
                <button onClick={handleClick}>Press to list users</button>
                <br></br>   
                <button onClick={handleOffClick}>Press to close list</button>  
                <br></br>          
                <p>The user list is as follows:</p>
                <br></br>
                {userlist.map((item, index) => {return(
                    <div key={index}>
                        <h3>{item.email}</h3>
                    </div>
                )})}
        </div>
    )
};

export default ListUsers;