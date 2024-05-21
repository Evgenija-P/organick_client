import PropTypes from "prop-types";
import { Star } from "@/icons/iconComponent";

const Stars = ({ active }) => {
  const stars = Array.from({ length: 5 - active }, (v, i) => i);
  const starsActive = Array.from({ length: active }, (v, i) => i);
  return (
    <ul className={`flex gap-x-0.5`}>
      {starsActive.map(itemActive => (
        <li key={itemActive}>
          <Star className={"fill-orange"} />
        </li>
      ))}
      {stars.map(item => (
        <li key={item}>
          <Star className={"fill-grey"} />
        </li>
      ))}
    </ul>
  );
};

Stars.propTypes = {
  active: PropTypes.number.isRequired,
};

export default Stars;
