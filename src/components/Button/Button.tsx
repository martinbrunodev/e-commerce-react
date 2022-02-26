import Icon from "../Icon/Icon";
import { Props } from "./customTypes";
import { ButtonStyled } from "./Button.styled";

const Button = ({
  label,
  icon,
  width,
  height,
  color,
  onClick,
  fillRule = "nonzero",
  className,
  type,
  stroke,
  strokeWidth,
}: Props) => {
  return (
    <ButtonStyled onClick={onClick} className={className} type={type}>
      <Icon
        path={icon}
        color={color}
        width={width}
        height={height}
        fillRule={fillRule}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      {label}
    </ButtonStyled>
  );
};

export default Button;
