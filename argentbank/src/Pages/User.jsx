import UserHeader from "../Components/UserHeader/UserHeader"
import UserCard from "../Components/UserCard/UserCard"
import { useEffect } from "react"
import { selectJWTtoken } from "../Utils/selectors"
import { useSelector } from "react-redux"
import ApiProvider from "../Api/ApiPorvider"


function User() {
    let JWTtoken = useSelector(selectJWTtoken)
    useEffect(() => {
        async function getUserProfile() {
            const response = await new ApiProvider().getUserProfileData(JWTtoken)
            console.log(response.data.body)
            return response
        }
        getUserProfile()
    })
    return (
        <div className="user-container">
            <UserHeader />
            <UserCard />
        </div>
    )
}

export default User