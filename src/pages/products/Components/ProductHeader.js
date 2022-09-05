import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
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
      <Grid item margin={1} xs={12} md={12} lg={3}>
        <div
         style={{
            // backgroundColor: "grey",
            display: "flex",
            justifyContent: "center",
            // alignSelf: "center",
            boxShadow: "2px 5px 15px red",
            borderRadius: "10px",
            // backdropFilter: "blur",
          }}
        >
          <div class="item">
            <h5> Available Products</h5>
            <h1 class="counter" data-speed="1000">
              {productCount.Product}
            </h1>
          </div>
        </div>
      </Grid>
      <Grid item margin={1} xs={12} md={12} lg={3}>
        <div
          style={{
            // backgroundColor: "grey",
            display: "flex",
            justifyContent: "center",
            // alignSelf: "center",
            boxShadow: "2px 5px 15px red",
            borderRadius: "10px",
            // backdropFilter: "blur",
          }}
        >
          <div class="item">
            <h5> Available Blocks</h5>
            <h1 class="counter" data-speed="1000">
              {productCount.ProductBlock}
            </h1>
          </div>
        </div>
      </Grid>
      <Grid item margin={1} xs={12} md={12} lg={4}>
        <div
          style={{
            // backgroundColor: "grey",
            display: "flex",
            justifyContent: "center",
            // alignSelf: "center",
            boxShadow: "2px 5px 15px red",
            borderRadius: "10px",
            // backdropFilter: "blur",
          }}
        >
          <div class="item">
            <h5> Available Square Feet</h5>
            <h1>{productCount.ProductSquarefeet}</h1>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductHeader;
