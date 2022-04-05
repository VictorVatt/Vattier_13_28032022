import { useSelector } from "react-redux"
import "../../styles/User.css"
import { selectFirstName, selectLastName } from "../../Utils/selectors"
function UserHeader() {
    let firstName = useSelector(selectFirstName)
    let lastName = useSelector(selectLastName)

    return (
        <div className="header">
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}

export default UserHeader