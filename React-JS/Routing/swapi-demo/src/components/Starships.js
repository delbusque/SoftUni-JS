import { useContext } from "react"
import { AuthContext } from "../contexts/UserConext.js"

export default function Starships() {

    const { user } = useContext(AuthContext);
    return (
        <>
            {!user.email && <h4 className="redirect">You've been redirected with error 403 !</h4>}
        </>
    )
}