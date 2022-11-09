import { useContext } from "react"
import { UserContext } from "../contexts/UserConext.js"

export default function People() {
    const { user } = useContext(UserContext);
    return (
        <>
            {!user.email && <h4 className="redirect">You`ve been successfully signed out !</h4>}
        </>

    )
}