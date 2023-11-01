import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppServis } from "../servise/Api-servise";
import ReactPlayer from "react-player";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import Videos from "../videos/Videos";
// import renderHTML from "react-render-html";

function VideoDeteil() {
  const [videoDeteail, SetVideoDeteail] = useState({});
  const [relatedVideo, SetrelatedVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getdate = async () => {
      try {
        const data = await AppServis.fetching(
          `videos?part=snippet, statistics&id=${id}`
        );
        SetVideoDeteail(data.data.items[0]);
        const relatedata = await AppServis.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        SetrelatedVideo(relatedata.data.items);
      } catch (error) {}
    };
    getdate();
  }, [id]);

  // console.log(videoDeteail);
  console.log(relatedVideo);

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            controls
            className="react-player"
            url={`https://www.youtube.com/watch?v=${id}`}
          />

          <Typography variant="h5" fontWeight="bold" p={2}>
            {videoDeteail?.snippet?.title.length &&
              videoDeteail?.snippet?.title}
          </Typography>
          <Typography variant="subtitle2" p={2} sx={{ opacity: " .7" }}>
            {videoDeteail?.snippet?.description.length &&
              videoDeteail?.snippet?.description}
          </Typography>
          <Stack direction="row" gap="20px" alignItems="center" py={1} px={2}>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <Visibility /> {videoDeteail?.statistics?.viewCount} views
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <FavoriteOutlined />
              {videoDeteail?.statistics?.likeCount} likes
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <MarkChatRead />
              {videoDeteail?.statistics?.commentCount} comment
            </Stack>
          </Stack>
          <Stack direction="row" py={1} px={2}>
            <Link to={`/chanel/${videoDeteail?.snippet?.channelId}`}>
              <Stack
                direction="row"
                alignItems="center"
                gap="5px"
                marginTop="5px"
              >
                <Avatar
                  alt={videoDeteail?.snippet?.channelTitle}
                  src={videoDeteail?.snippet?.thumbnails?.default?.url}
                />
                <Typography variant="subtitle2" color="gray">
                  {videoDeteail?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <Videos videos={relatedVideo}></Videos>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoDeteil;
