import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../constants";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function SaerchBar() {
  const [value, SetValue] = useState("");

  const nagiate = useNavigate();

  const SubmitEvent = (e) => {
    e.preventDefault();
    console.log(value);
    if (value) {
      nagiate(`/saerch/${value}`);
    }
    SetValue("");
  };
  return (
    <Paper
      component={"form"}
      onSubmit={SubmitEvent}
      sx={{
        border: `1px solid ${colors.secondry}`,
        pl: 2,
        boxShadow: "none",
        mr: 5,
      }}
    >
      <input
        type="text"
        placeholder="Search.."
        className="search-bar"
        value={value}
        onChange={(e) => SetValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SaerchBar;
