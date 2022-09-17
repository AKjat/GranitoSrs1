import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProductBlockDetailPages from "../Components/ProductBlockDetailPage";
import {
  getProductBlockDetail,
  productBlockDetailActions,
} from "../Reducers/productBlockDetailReducer";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";
import LoadingSpinner from "../../Loader/LoadingSpinner";
import { WebsiteFormActions } from "../../../redux/reducers/WebsiteDataReducer";
import { saveWebsiteForm } from "../../../redux/reducers/WebsiteDataSave";

const ProductBlockDetailPage = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.productBlockDetail);
  const refresing = useSelector((state) => state.refreshing);
  console.log(refresing, "hye");
  React.useEffect(() => {
    dispatch(productBlockDetailActions.clearProductBlockDetail());
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getProductBlockDetail(id));

    const array = window.location.href.split("/");
    const product = array[array.length - 2];
    const name = product == "product_block_page" ? "product" : "block";
    dispatch(WebsiteFormActions.setWebsite({ name: name, value: array.pop() }));
    dispatch(saveWebsiteForm());
  }, [id]);

  return (
    <>
      {refresing == true ? (
        <LoadingSpinner />
      ) : (
        <Box>
          <ProductBlockDetailPages product={product} />
        </Box>
        // <Box sx={{ marginLeft: "10px", marginRight: "10px" }}>
        //   <Box marginX={1} marginTop={2}>
        //     <Grid container marginTop={1}>
        //       <Grid item xs={12} lg={6} marginTop="10px">
        //         <ImagSelect product={product} />
        //       </Grid>
        //       <Grid item xs={12} lg={6} marginTop="10px">
        //         <ProductDetails product={productname} block={product} />
        //       </Grid>
        //       <Grid item xs={12} lg={12} marginTop="10px">
        //         <Box sx={{ backgroundColor: "#bbbb", height: 50 }}>
        //           <Typography padding={1} className="Product-detail">
        //             <h3>Related Products</h3>
        //           </Typography>
        //         </Box>
        //       </Grid>
        //       <HomeImgCollections />
        //     </Grid>
        //   </Box>
        // </Box>
      )}
    </>
  );
};

export default ProductBlockDetailPage;
