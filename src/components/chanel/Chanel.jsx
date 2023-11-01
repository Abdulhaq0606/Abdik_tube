import { Box, Button, Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppServis } from "../servise/Api-servise";
import Videos from "../videos/Videos";
import ChanelCard from "../chanel_card/ChanelCard";

function Chanel() {
  const [chanelDetail, SetchanelDetail] = useState([]);
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const dataChanel = await AppServis.fetching(
          `channels?part=snippet&id=${id}`
        );
        SetchanelDetail(dataChanel.data.items[0]);
        const dataVideo = await AppServis.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideo(dataVideo.data.items);
      } catch (error) {}
    };
    getData();
  }, []);
  console.log(video.data);
  console.log(chanelDetail);

  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"3 00px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${chanelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChanelCard video={chanelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"}>
        <Videos videos={video} />
      </Container>
    </Box>
  );
}

export default Chanel;
