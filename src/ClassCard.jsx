import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ClassCard = (props) => {
  return (
    <div className="border-double border-4 border-sky-500">
      <h4 className="underline">{props.product?.name}</h4>
      <div className="flex flex-col items-start ml-10">
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
  product: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default ClassCard;
