import React, { useState } from "react";
import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";

export const UserAuthContext = React.createContext();

const DeleteUserSection = () => {
  const [fetchedUserData, setFetchedUserData] = useState({ name: "" });
  const [userSearched, setUserSearched] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const { handleSubmit, register, reset } = useForm();

  const retrieveUser = async (data) => {
    const fetchedUser = await axios.get("/routes/users", {
      params: { phone: data["Phone Number"] },
    });
    setUserFound(!!fetchedUser.data[0]);
    setUserSearched(!userSearched);
    setFetchedUserData(fetchedUser.data[0]);
    reset();
  };

  const retrieveUserForm = () => {
    return (
      <div>
        <h3>Retrieve User for possible deletion from database</h3>
        <form onSubmit={handleSubmit(retrieveUser)}>
          <label>Phone Number:</label>
          <input
            type="text"
            placeholder="Phone Number"
            {...register("Phone Number")}
          ></input>
          <input type="submit" />
          <p>
            {userSearched ? (userFound ? "User Found" : "No User Found") : ""}
          </p>
        </form>
      </div>
    );
  };

  const deleteUserForm = () => {
    console.log("Here ", fetchedUserData);
    return (
      <form onSubmit={handleSubmit(deleteUser)}>
        <div>
          <p className={{ font: "bg-red-600" }}>
            Are you sure you want to delete this user?
          </p>
          <p>{`Name: ${fetchedUserData.name}`}</p>
          <p>{`Port: ${fetchedUserData.port}`}</p>
          <p>{`Vessel: ${fetchedUserData.vessel}`}</p>
          <input type="submit" />
        </div>
      </form>
    );
  };

  const deleteUser = () => {
    axios.delete("/routes/users", {
      params: { phone: fetchedUserData.phone },
    });

    setUserFound(false);
    setUserSearched(false);
    setFetchedUserData({ name: "" });

    alert("User Deleted!");
    reset();
  };

  return (
    <div>
      <div>{retrieveUserForm()}</div>
      <div>{userFound ? deleteUserForm() : ""}</div>
    </div>
  );
};

export default DeleteUserSection;
