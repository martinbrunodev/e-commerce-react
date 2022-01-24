import { BadgeStyled } from "./Badge.styled";

interface Props {
  label: string | number;
}

const Badge: React.FC<Props> = ({ label }) => {
  return <BadgeStyled>{label}</BadgeStyled>;
};

export default Badge;
