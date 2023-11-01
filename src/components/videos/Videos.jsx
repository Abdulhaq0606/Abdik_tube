import { Box, Stack } from "@mui/material";
import React from "react";
import Videocard from "../videocard/Videocard";
import ChanelCard from "../chanel_card/ChanelCard";
import Laoder from "../loader/Laoder";

function Videos({ videos }) {
  if (!videos.length) return <Laoder />;
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      <Videocard />
      {videos.map((item) => {
        return (
          <Box key={item.id.videoId}>
            {item.id.videoId && <Videocard item={item} />}
            {item.id.channelId && <ChanelCard video={item}></ChanelCard>}
          </Box>
        );
      })}
    </Stack>
  );
}

export default Videos;
