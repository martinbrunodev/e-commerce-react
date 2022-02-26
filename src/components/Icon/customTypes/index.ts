export interface Props {
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
