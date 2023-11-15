import { useState, useRef } from "react";

import axios from "axios";

const UserInfoSection = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [companies, setCompanies] = useState([{}]);
  let [vessels, setVessels] = useState([{}]);
  let [ports, setPorts] = useState([{}]);
  const { userInfo, toggleEditMode } = props;
  const formRef = useRef(null);

  function triggerEditMode() {
    setEditMode(!editMode);
    axios
      .get("/routes/companies")
      .then((res) => {
        setCompanies(res.data);
        return axios.get("/routes/vessels");
      })
      .then((res) => {
        setVessels(res.data);
        return axios.get("/routes/ports");
      })
      .then((res) => {
        setPorts(res.data);
      })
      .catch((err) =>
        console.log("Error retrieving companies, ports or vessels: ", err),
      );
  }

  const updateUserInfoToDatabase = () => {
    let name = formRef.current["name"].value || userInfo.name;
    let email = formRef.current["email"].value || userInfo.email;
    let title = formRef.current["title"].value || userInfo.title_function;
    let company = formRef.current["company"].value || userInfo.company;
    let vessel = formRef.current["vessel"].value || userInfo.vessel;
    let port = formRef.current["port"].value || userInfo.port;

    let updatedUserInfo = {
      id: userInfo.id,
      name,
      email,
      title,
      company,
      vessel,
      port,
    };

    axios.put("/routes/users", { params: updatedUserInfo }).then(() => {});
    setEditMode(false);
    toggleEditMode(2);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <div htmlFor="Name">Name:</div>
          <div>{userInfo.name}</div>
          <div htmlFor="Email">Email:</div>
          <div>{userInfo.email}</div>
          <div htmlFor="Title">Title:</div>
          <div>{userInfo.title_function}</div>
          <div htmlFor="Company">Company:</div>
          <div>{userInfo.company}</div>
          <div htmlFor="Vessel">Vessel:</div>
          <div>{userInfo.vessel}</div>
          <div htmlFor="Port">Port:</div>
          <div>{userInfo.port}</div>
        </div>
      ) : (
        <form ref={formRef}>
          <div htmlFor="Name">Name:</div>
          <input placeholder={userInfo.name} type="text" name="name" />
          <div htmlFor="Email">Email:</div>
          <input placeholder={userInfo.email} type="text" name="email" />
          <div htmlFor="Title">Title:</div>
          <input
            placeholder={userInfo.title_function}
            type="text"
            name="title"
          />
          <div htmlFor="Company">Company:</div>
          <input placeholder={userInfo.company} type="text" name="company" />
          <div htmlFor="Vessel">Vessel:</div>
          <input placeholder={userInfo.vessel} type="text" name="vessel" />
          <div htmlFor="Port">Port:</div>
          <input placeholder={userInfo.port} type="text" name="port" />
        </form>
      )}
      <button onClick={() => triggerEditMode()}>
        {editMode ? `Cancel` : `Edit`}
      </button>
      {editMode ? (
        <button onClick={() => updateUserInfoToDatabase()}>Save</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserInfoSection;
