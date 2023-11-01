import { Stack } from "@mui/material";
import React from "react";
import {
  Checkroom,
  DeveloperMode,
  FaceRetouchingNatural,
  FitnessCenter,
  GraphicEq,
  Home,
  LiveTv,
  MusicNote,
  OndemandVideo,
  School,
  SportsEsports,
  TheaterComedy,
} from "@mui/icons-material";
import { colors } from "../../constants";

export const categorys = [
  { name: "New", icon: <Home /> },
  { name: "Movie", icon: <OndemandVideo /> },
  { name: "Live", icon: <LiveTv /> },
  { name: "Gaming", icon: <SportsEsports /> },
  { name: "Education", icon: <School /> },
  { name: "Sport", icon: <FitnessCenter /> },
  { name: "Comedy", icon: <TheaterComedy /> },
  { name: "Podcast", icon: <GraphicEq /> },
  { name: "Fashion", icon: <Checkroom /> },
  { name: "Crypto", icon: <DeveloperMode /> },
  { name: "Gym", icon: <FitnessCenter /> },
  { name: "Beauty", icon: <FaceRetouchingNatural /> },
  { name: "Music", icon: <MusicNote /> },
];

function Category({ selectcate, SelectedCategory }) {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {categorys.map((item) => {
        return (
          <button
            key={item.name}
            className="category-btn"
            style={{
              borderRadius: "0",
              background: item.name === SelectedCategory && colors.secondry,
              color: item.name === SelectedCategory && "#fff",
            }}
            onClick={() => selectcate(item.name)}
          >
            <span
              style={{
                color: colors.secondry,
                marginRight: "15px",
                color:
                  item.name === SelectedCategory ? "#fff" : colors.secondry,
              }}
            >
              {item.icon}
            </span>
            <span style={{ opacity: "1" }}>{item.name}</span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Category;
