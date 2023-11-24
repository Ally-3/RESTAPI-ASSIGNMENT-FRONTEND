import { deleteCookie } from "../utils/utilities";

function Logoff() {
    async function handleLogoff() {
        try {
        deleteCookie("jwt_token");
        window.location.href = window.location.origin;
    } catch (error) {
        console.log(error);
    }
}

    return (
        <div>
            <button onClick={handleLogoff}>Log off</button>
        </div>
    )
};

export default Logoff;