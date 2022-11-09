import { useContext } from "react"
import { UserContext } from "../contexts/UserConext.js"

export default function Starships() {

    const { user } = useContext(UserContext);
    return (
        <>
            {!user.email && <h4 className="redirect">You've been redirected with error 403 !</h4>}
        </>
    )
}