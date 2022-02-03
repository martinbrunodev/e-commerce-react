import Icon from "../Icon/Icon";

import { ButtonStyled } from "./Button.styled";

interface Props {
  label?: string;
  icon?: string;
  width?: string;
  height?: string;
  color?: string;
  fillRule?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  path?: string;
  type?: "button" | "submit" | "reset";
  stroke?: string;
  strokeWidth?: string;
}

const Button: React.VFC<Props> = ({
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
}) => {
  return (
    <ButtonStyled onClick={onClick} className={className} type={type} >
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
