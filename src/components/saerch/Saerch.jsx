import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppServis } from "../servise/Api-servise";
import Videos from "../videos/Videos";
import { Box, Container, Typography } from "@mui/material";
import { colors } from "../../constants";

function Saerch() {
  const [videos, SetVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getDate = async () => {
      try {
        const data = await AppServis.fetching(`search?part=snippet&q=${id}`);
        console.log(data);
        SetVideos(data.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getDate();
  }, [id]);
  console.log(id);
  return (
    <Box p={2} sx={{ height: "90" }}>
      <Container maxWidth={"90"}>
        <Typography variant={"h4"} fontWeight={"bolid"} mb={2}>
          Searsh results for{" "}
          <span style={{ color: colors.secondry }}>{id}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
}

export default Saerch;
