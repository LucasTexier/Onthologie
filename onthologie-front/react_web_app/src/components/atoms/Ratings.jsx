import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { labels } from "../../assets/constants/rating_mark";
import "../../assets/scss/ratings.scss";

//Ratings components

export default function Ratings({ value }) {
  return (
    <Box
      className="rating-container"
      sx={{
        width: 600,
        display: "flex",
        alignItems: "center",
        backgroundColor: "darkblue",
        color: "white",
        fontSize: "1rem",
      }}
    >
      Current form:
      <Rating
        className="rating-text"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
