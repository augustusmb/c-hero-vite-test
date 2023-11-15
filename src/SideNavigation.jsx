import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Navigation } from "baseui/side-navigation";
// import { UserAuthContext } from "./MainPanel.jsx";

const SideNavigation = ({ history, location, showSidebar, toggleSidebar }) => {
  const { userInfo } = useContext(UserAuthContext);

  const sidebarStyle = showSidebar ? { display: "block" } : { display: "none" };

  return (
    <div onClick={toggleSidebar}>
      <Navigation
        items={[
          {
            title: "Account",
            itemId: "/",
            subNav: [
              userInfo.level === 0
                ? {
                    title: "All Users",
                    itemId: "/all-user-overview",
                  }
                : {},
            ],
          },
          {
            title: "Certification",
            itemId: "/certification",
          },
          {
            title: "Drill Video",
            itemId: "/drill-videos-page",
          },
          {
            title: "Safety",
            itemId: "/help/safety",
          },
          {
            title: "Trouble Shooting",
            itemId: "/help/troubleShooting",
          },
          {
            title: "MOB Drill Log",
            itemId: "/help/MobDrillLog",
          },
          {
            title: "MOB Inspection Check List",
            itemId: "/help/MobInspectionCheckList",
          },
        ]}
        activeItemId={location.pathname}
        onChange={({ event, item }) => {
          event.preventDefault();
          history.push(item.itemId);
        }}
        onClick={toggleSidebar}
        overrides={{
          Root: {
            style: {
              "@media screen and (max-width: 600px)": sidebarStyle,
            },
          },
        }}
      ></Navigation>
    </div>
  );
};

export default withRouter(SideNavigation);
