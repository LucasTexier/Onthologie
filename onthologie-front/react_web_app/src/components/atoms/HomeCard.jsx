import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import logo from "../../assets/logo/titanic.jpg";
import "../../assets/scss/homeCard.scss";


export default function HomeCard() {
  return (
    <Card className="card" sx={{ maxWidth: 600 }}>
      <CardMedia sx={{ height: 500 }} image={logo} title="Bordeaux" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h2"
          textAlign="center"
          component="div"
        >
          TITANIC
        </Typography>
        <Typography variant="body" color="text.secondary">
          Elle va s'enrhumer a être toute nue dehors.
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Click to go to official website" arrow>
          <a href="https://www.girondins.com/fr" target="_blank">
            <Button size="small">Learn More</Button>
          </a>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
