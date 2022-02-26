export interface Props {
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
