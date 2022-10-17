import { signInWithGoogle, signOutWithGoogle } from "../database/firebase";
import { Button } from "react-bootstrap";

const LoginLogout = ({
}) => {
    const Authenticate = () => {
        if (localStorage.getItem("userName")) {
            signOutWithGoogle()
            // window.location.reload(false);
        } else {
            signInWithGoogle()
            // window.location.reload(false);
        }
    }

    return (
        <div className="authentication">
            <Button onClick={Authenticate}>{localStorage.getItem("userName") ? "Logout" : "Login"}</Button>
            <div>
                User: {localStorage.getItem("userName")}
            </div>
        </div>
    )
}

export default LoginLogout;