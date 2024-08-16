import styles from "./card.module.scss";
import PropTypes from "prop-types";

const Card = ({ children, title }) => {
  return (
    <div className={styles.cardWrapper}>
      {title ? (
        <div className={styles.cardTitle}>
          <span>{title}</span>
        </div>
      ) : null}
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Card;
