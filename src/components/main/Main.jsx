import { Box, Button, Container, Stack, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../constants";
import Category from "../category/Category";
import Videos from "../videos/Videos";
import { AppServis } from "../servise/Api-servise";

function Main() {
  const [SelectedCategory, SetSelectedCategory] = useState("New");
  const [videos, SetVideos] = useState([]);
  const selectcate = (categrory) => SetSelectedCategory(categrory);
  useEffect(() => {
    const getDate = async () => {
      try {
        const data = await AppServis.fetching(
          `search?part=snippet&q=${SelectedCategory}`
        );
        SetVideos(data.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    getDate();
  }, [SelectedCategory]);
  // console.log(videos);

  return (
    <Stack>
      <Category selectcate={selectcate} SelectedCategory={SelectedCategory} />
      <Box p={2} sx={{ height: "90" }}>
        <Container maxWidth={"90"}>
          <Typography variant={"h4"} fontWeight={"bolid"} mb={2}>
            {SelectedCategory}{" "}
            <span style={{ color: colors.secondry }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;
