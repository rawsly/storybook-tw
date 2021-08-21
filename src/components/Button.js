import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({
  className,
  onClick,
  style,
  children,
  type,
  dense,
  color,
  content,
  ...props
}) => {
  const classes = ['btn', `btn-${type}`, color && `btn-color-${color}`, className].filter(c => !!c).join(' ');
  return (
    <WButton
      className={classes}
      onClick={onClick}
      style={style}
      dense={dense}
      {...props}
    >
      {content || children}
    </WButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  dense: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'red', 'blue']),
  content: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  type: 'primary',
  dense: false,
  color: '',
  content: ''
};

export default Button;

const WButton = styled.button`
  ${(props) => (props.dense ? "" : "font-size: 14px !important;")};
  ${(props) => (props.dense ? "" : "width: 216px !important;")};
`;
