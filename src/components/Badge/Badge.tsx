import { Props } from "./customTypes";
import { BadgeStyled } from "./Badge.styled";

const Badge = ({ label }: Props) => {
  return <BadgeStyled>{label}</BadgeStyled>;
};

export default Badge;
