import React, { useCallback, useEffect, useState } from "react";

const ProductCounter = ({ count }) => {
  const [repeat, setRepeat] = useState();
  const [counter, setCounter] = useState(0);
  const [placeValue, setPlaceValue] = useState();

  useEffect(() => {
    let pv = 10;
    while (true) {
      let value = Math.floor(count / pv);
      if (value > 0) {
        pv = pv * 10;
      } else {
        setPlaceValue(pv / 10);
        console.log(pv / 10, "dwedwed");
        break;
      }
    }
  }, [count]);

  useEffect(() => {
    let stop;
    if (counter < count && placeValue) {
      stop = setInterval(() => {
        let counterPlaceValue = getPlaceValue(counter, placeValue);
        let countPlaceValue = getPlaceValue(count, placeValue);
        console.log(counterPlaceValue, countPlaceValue, "count", placeValue);
        if (counterPlaceValue == countPlaceValue) {
          setPlaceValue(placeValue / 10);
          return;
        }
        setCounter(counter + placeValue);
      }, 100);
    }
    return () => clearInterval(stop);
  }, [counter, placeValue]);

  return <h4 class="Box-body">{counter}</h4>;
};

export default ProductCounter;

const getPlaceValue = (value, place) => {
  let placeValue = Math.floor((value % (place * 10)) / place);
  return placeValue;
};
