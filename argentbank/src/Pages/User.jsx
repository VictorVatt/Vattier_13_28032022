import UserHeader from "../Components/UserHeader/UserHeader"
import UserCard from "../Components/UserCard/UserCard"
import { useEffect, useState } from "react"
import { selectJWTtoken } from "../Utils/selectors"
import { useSelector } from "react-redux"
import ApiProvider from "../Api/ApiPorvider"


function User() {
    let JWTtoken = useSelector(selectJWTtoken)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        async function getUserProfile() {
            const response = await new ApiProvider().getUserProfileData(JWTtoken)
            console.log(response.data.body)
            setFirstName(response.data.body.firstName)
            setLastName(response.data.body.lastName)
            return response
        }
        getUserProfile()
    }, [JWTtoken])
    return (
        <div className="user-container">
            <UserHeader firstName={firstName} lastName={lastName}/>
            <UserCard />
        </div>
    )
}

export default User