import { useContext } from "react"
import { AuthContext } from "../contexts/UserConext.js"

export default function People() {
    const { user } = useContext(AuthContext);
    return (
        <>
            {!user.email && <h4 className="redirect">You`ve been successfully signed out !</h4>}
        </>

    )
}