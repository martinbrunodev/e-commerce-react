import { IconStyled, PathStyled } from "./Icon.styled";
interface Props {
  width?: string;
  height?: string;
  color?: string;
  path?: string;
  fillRule?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  isClickable?: boolean;
  strokeWidth?: string;
  stroke?: string;
}

const Icon: React.VFC<Props> = ({
  width,
  height,
  color,
  path,
  onClick,
  isClickable,
  stroke,
  strokeWidth,
}) => {
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
