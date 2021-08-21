import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({
  className,
  onClick,
  styles,
  content,
  children,
  type,
  dense,
  color,
  ...props
}) => {
  return (
    <WButton
      className={`btn btn-${type} ${type !== color ? `btn-${color}` : ""}`}
      onClick={onClick}
      styles={styles}
      dense={dense}
      {...props}
    >
      {content || children}
    </WButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  children: PropTypes.element,
  type: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  dense: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'red', 'blue']),
};

Button.defaultProps = {
  children: null,
  type: 'primary',
  dense: false,
  color: 'primary'
};

export default Button;

const WButton = styled.button`
  ${(props) => (props.dense ? "" : "font-size: 14px !important;")};
  ${(props) => (props.dense ? "" : "width: 216px !important;")};
`;
