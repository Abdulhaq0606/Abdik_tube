import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../constants";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Videocard({ item }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShodow: "none",
        borderRadius: "none",
      }}
    >
      <Link to={`/video/${item?.id?.videoId}`}>
        <CardMedia
          image={item?.snippet?.thumbnails?.high?.url}
          sx={{ xs: "%100", sm: "360px", md: "320px", height: "180px" }}
        />
      </Link>
      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Typography my={"5px"} sx={{ opacity: ".4" }}>
          {moment(item?.snippet.publishedAt).fromNow()}
        </Typography>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          {item?.snippet?.title.slice(0, 40)}
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: ".8" }}>
          {item?.snippet?.description.slice(0, 60)}
        </Typography>
        <>
          <Link to={`/chanel/${item?.snippet?.channelId}`}>
            <Stack
              direction={"row"}
              position={"absolute"}
              bottom={"10px"}
              alignItems={"center"}
              gap={10}
            >
              <Avatar src={item?.snippet?.thumbnails?.high?.url}> </Avatar>
              <Typography variant="subtitle2" color={"grey"}>
                {item?.snippet?.channelTitle}
                <CheckCircle
                  sx={{ fontSize: "13px", color: "grey", marginLeft: " 5px " }}
                />
              </Typography>
            </Stack>
          </Link>
        </>
      </CardContent>
    </Card>
  );
}

export default Videocard;
