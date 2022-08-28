import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImageList } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getVideoURL } from "../Reducers/VideoURLReducer";
import { refreshingActions } from "../../../redux/reducers/refreshingSlice";



const VideoURL = () => {
  const dispatch = useDispatch();

  const videoURL = useSelector((state) => state.videoURL);

  useEffect(() => {
    dispatch(refreshingActions.setRefreshing(true));
    dispatch(getVideoURL());
  }, []);

  return (
    <ImageList
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr)) !important",
        gridAutoColumns: "minmax(300px, 1fr)"
      }}
    >
      {videoURL?.map((d, index) => (
        <iframe
          src={d.url}
          title="The Stone Master"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ))}
    </ImageList>
  );
};

export default VideoURL;


