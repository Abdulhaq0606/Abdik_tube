import { Box, Stack } from "@mui/material";
import React from "react";
import { colors, logo } from "../../constants";
import { Link } from "react-router-dom";
import SaerchBar from "../saerchbar/SaerchBar";
import image from "../assets/Abdik.png";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={3}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to="/">
        <img src={image} alt="logo" height={50} />
      </Link>
      <SaerchBar />
      <Box />
    </Stack>
  );
}

export default Navbar;
