import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { useStyletron } from "baseui";

const ClassCard = (props) => {
  const [css] = useStyletron();
  const styles = {
    classCard: {
      backgroundColor: "white",
      border: "1px black solid",
      borderRadius: "8px",
      width: "250px",
      height: "200px",
    },
    productName: {
      marginLeft: "8px",
      textDecoration: "underline",
    },
    classLinkSection: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  };

  return (
    <div className={css(styles.classCard)}>
      <h4 className={css(styles.productName)}>{props.product?.name}</h4>
      <div className={css(styles.classLinkSection)}>
        <div>
          1. <Link to={`/class/${props.product?.code}_a`}>Setup</Link>
        </div>
        <div>
          2. <Link to={`/class/${props.product?.code}_b`}>Operation</Link>
        </div>
        <div>
          3. <Link to={`/class/${props.product?.code}_c`}>MOB Drills</Link>
        </div>
        <div>
          4.{" "}
          <Link to={`/class/${props.product?.code}_d`}>
            Inspection & Storage
          </Link>
        </div>
      </div>
    </div>
  );
};

ClassCard.propTypes = {
  product: {
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }
}

export default ClassCard;
