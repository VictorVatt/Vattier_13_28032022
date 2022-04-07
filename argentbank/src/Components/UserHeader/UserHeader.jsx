import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ApiProvider from "../../Api/ApiPorvider"
import "../../styles/User.css"
import { updateUser } from "../../Utils/reducers/userReducer"
import { selectFirstName, selectJWTtoken, selectLastName } from "../../Utils/selectors"

function UserHeader() {
    let dispatch = useDispatch()

    let [editMode, setEditMode] = useState(false) // set an editMode local state
    let [editedFirstName, setEditedFirstName] = useState('') // set  on localState the in modification firstname
    let [editedLastName, setEditedLastNamee] = useState('') // set  on localState the in modification lastName


    let firstNameFromGlobalState = useSelector(selectFirstName) // retrieve the firstName from the global state 
    let lastNameFromGlobalState = useSelector(selectLastName) // retrieve the lastName from the global state
    let JWTtoken = useSelector(selectJWTtoken) // retrive the JWTtoken from the global state redux

    
    async function handleChangeUserName(firstName, lastName, JWTtoken) {
        const response = await new ApiProvider().updateUserProfileData(firstName, lastName, JWTtoken) // call the udpate method from API provider

        console.log(response)
        dispatch(updateUser(response.data.body)) // dispatch the response with the updateUser action to update the state
        setEditMode(false) 
    }

    return (
        <div className="header">
            {!editMode ? (
            <div className="edited-header">
                <h1>Welcome back<br/>{firstNameFromGlobalState} {lastNameFromGlobalState} !</h1>
            </div>) : (
            <div className="edit-header">
                <h1>Welcome back</h1>
                <div className="edit-container">
                    <input className="change-name" type="text" placeholder={firstNameFromGlobalState} onChange={(e) => setEditedFirstName(e.target.value)}/>
                    <input className="change-name" type="text" placeholder={lastNameFromGlobalState} onChange={(e) => setEditedLastNamee(e.target.value)}/>
                    <button className="edit-button" onClick={() => handleChangeUserName(editedFirstName, editedLastName, JWTtoken)}>Validate</button>
                </div>
            </div>
            )}
            <button className="edit-button" onClick={() => setEditMode(!editMode)}>
                {editMode === false ? "Edit name" : "Close"}
            </button>
        </div>
    )
}

export default UserHeader