import { IconStyled } from "./Icon.styled";
interface Props {
  width?: string;
  height?: string;
  color?: string;
  path?: string;
  fillRule?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  isClickable?: boolean
}

const Icon: React.VFC<Props> = ({ width, height, color, path, onClick, isClickable }) => {
  return (
    <IconStyled
      onClick={onClick}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      isClickeable
    >
      <path d={path} fill={color} fillRule="nonzero"  />
    </IconStyled>
  );
};

export default Icon;
