import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import ProductCounter from "./productCounter";
import "./productHeader.css";
const useStyles = makeStyles((theme) => ({}));

const ProductHeader = () => {
  const productCount = useSelector((state) => state.productCount);

  let counter = document.querySelectorAll(".counter");
  let arr = Array.from(counter);
  arr.map((item) => {
    let count = item.innerHTML;
    item.innerHTML = "";
    let countNumber = 0;

    function counterUp() {
      item.innerHTML = countNumber++;
      if (countNumber > count) {
        clearInterval(stop);
      }
    }

    let stop = setInterval(() => {
      counterUp();
    }, item.dataset.speed / count);
  });
  return (
    <Grid container justifyContent={"center"}>
      {/* <Grid item margin={1} xs={3} md={3} lg={3}>
        <div class="Box-ui">
          <div class="item">
            <h6 class="Box-header"> Available Products</h6>

            <ProductCounter count={productCount.Product} />
          </div>
        </div>
      </Grid> */}
      <Grid item margin={1} xs={5} md={5} lg={5}>
        <div class="Box-ui">
          <div class="item">
            <h6 class="Box-header"> Available Blocks</h6>
            <ProductCounter count={productCount.ProductBlock} />
          </div>
        </div>
      </Grid>
      <Grid item margin={1} xs={5} md={5} lg={5}>
        <div class="Box-ui">
          <div class="item">
            <h6 class="Box-header"> Available Square Feet</h6>
            <ProductCounter count={productCount.ProductSquarefeet} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductHeader;
