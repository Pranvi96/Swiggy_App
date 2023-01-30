import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Footer = () => {
    const {user} = useContext(UserContext)
    return (
        <h4>This is production of {user.name}</h4>
    )
}

export default Footer