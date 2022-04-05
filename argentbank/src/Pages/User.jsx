import UserHeader from "../Components/UserHeader/UserHeader"
import UserCard from "../Components/UserCard/UserCard"
import { useEffect, useState } from "react"
import { selectJWTtoken } from "../Utils/selectors"
import { useDispatch, useSelector } from "react-redux"
import ApiProvider from "../Api/ApiPorvider"
import { setUser } from "../Utils/reducers/userReducer"


function User() {
    let dispatch = useDispatch()
    let JWTtoken = useSelector(selectJWTtoken)

    useEffect(() => {
        async function getUserProfile() {
            const response = await new ApiProvider().getUserProfileData(JWTtoken)
            console.log(response.data.body)
            dispatch(setUser(response.data.body))
            return response
        }
        getUserProfile()
    }, [JWTtoken, dispatch])
    return (
        <div className="user-container">
            <UserHeader  />
            <UserCard />
        </div>
    )
}

export default User