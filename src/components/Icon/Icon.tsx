import { Props } from "./customTypes";
import { IconStyled, PathStyled } from "./Icon.styled";

const Icon = ({
  width,
  height,
  color,
  path,
  onClick,
  isClickable,
  stroke,
  strokeWidth,
}: Props) => {
  return (
    <IconStyled
      onClick={onClick}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      isClickeable={isClickable}
    >
      <PathStyled
        d={path}
        fill={color}
        fillRule="nonzero"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </IconStyled>
  );
};

export default Icon;
