import { useState } from "react";
import {
  CounterFormStyled,
  CounterWrapperStyled,
  CounterIncrementStyled,
  CounterBox,
  CounterDecrementStyled,
} from "./Counter.styled";

import Button from "../Button/Button";

interface Props {
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: React.VFC<Props> = ({ setItemCount }) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((previousValue) => previousValue + 1);
  };
  const handleDecrement = () => {
    if (value <= 0) {
      return false;
    }
    setValue((previousValue) => previousValue - 1);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (value === 0) {
      return;
    }
    setItemCount(value);
    setValue(0);
  };

  return (
    <CounterFormStyled onSubmit={handleSubmit}>
      <CounterWrapperStyled>
        <CounterDecrementStyled
          icon="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
          width="20px"
          height="7px"
          color="hsl(26, 100%, 55%)"
          onClick={handleDecrement}
          type="button"
        />
        <CounterBox name="counter" value={value}>
          {value}
        </CounterBox>
        <CounterIncrementStyled
          onClick={handleIncrement}
          icon="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022"
          width="20px"
          height="12px"
          color="hsl(26, 100%, 55%)"
          type="button"
        />
      </CounterWrapperStyled>
      <Button
        icon="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        width="22"
        height="20"
        label="Add to cart"
        color="#FFF"
        type="submit"
      />
    </CounterFormStyled>
  );
};

export default Counter;
