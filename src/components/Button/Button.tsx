import { ButtonStyled } from "./Button.styled";
import Icon from "../Icon/Icon";

interface Props {
  label?: string;
  icon?: string;
  width?: string;
  height?: string;
  color?: string;
  fillRule?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string
  path?:string
  type?: "button" | "submit" | "reset" 
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
  path,
  type
}) => {
  return (
    <ButtonStyled onClick={onClick} className={className} type={type}>
      <Icon
        path={icon}
        color={color}
        width={width}
        height={height}
        fillRule={fillRule}
      />
      {label}
    </ButtonStyled>
  );
};

export default Button;
