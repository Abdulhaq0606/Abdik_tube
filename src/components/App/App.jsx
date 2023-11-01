import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../main/Main";
import Chanel from "../chanel/Chanel";
import Navbar from "../navbar/Navbar";
import VideoDeteil from "../vediodetial/VideoDeteil";
import Saerch from "../saerch/Saerch";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chanel/:id" element={<Chanel />} />
        <Route path="/video/:id" element={<VideoDeteil />} />
        <Route path="/saerch/:id" element={<Saerch />} />
      </Routes>
    </Box>
  );
}

export default App;
