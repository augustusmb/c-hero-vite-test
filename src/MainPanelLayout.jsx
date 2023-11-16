import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import SideNavigation from "./SideNavigation.jsx";
import HeaderNavigationBar from "./HeaderNavigation.jsx";
import MainPanelRouter from "./MainPanelRouter.jsx";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const UserAuthContext = React.createContext();

const MainPanelLayout = () => {
  const [userInfo, setUserInfo] = useState({});
  const [editMode, setEditMode] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useAuth0();

  console.log("User here: ", user);

  // const user = {
  //   name: "+16503808229",
  // };

  const userInfoContext = {
    userInfo,
    toggleEditMode: (val) => {
      setEditMode(val);
    },
  };

  useEffect(() => {
    setEditMode(1);
    user &&
      axios
        .get("/api/routes/users", {
          params: { phone: user.name },
        })
        .then((res) => {
          setUserInfo(res.data[0]);
          console.log("User Info Set", res.data[0]);
        })
        .catch((err) => {
          console.log("Error here retrieving user info: ", err);
        });
  }, [user, editMode]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  };

  return (
    <Router>
      <UserAuthContext.Provider value={userInfoContext}>
        <div>
          <HeaderNavigationBar toggleSidebar={toggleSidebar} />
        </div>
        <div>
          {/* <SideNavigation
            showSidebar={showSidebar}
            // toggleSidebar={toggleSidebar}
          /> */}
          {/* <MainPanelRouter /> */}
          {showSidebar && window.innerWidth < 600 ? "" : <MainPanelRouter />}
        </div>
      </UserAuthContext.Provider>
    </Router>
  );
};

export default MainPanelLayout;
