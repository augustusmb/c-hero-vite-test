import eTrainingIcon from "./assets/ETraining.png";
import AuthenticationButton from "./AuthenticationButton";
// import Menu from "baseui/icon/menu";
import PropTypes from "prop-types";

const HeaderNavigationBar = ({ toggleSidebar }) => {
  return (
    <div className="border-double border-4 border-sky-500">
      <button onClick={toggleSidebar}>{/* <Menu size={28} /> */}</button>
      <img src={eTrainingIcon} />
      <AuthenticationButton />
    </div>
  );
};

HeaderNavigationBar.propTypes = {
  toggleSidebar: PropTypes.func,
};

export default HeaderNavigationBar;
