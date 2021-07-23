import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Button, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PhoneIcon from "@material-ui/icons/Phone";
export default function Subscription() {
  return (
    <div>
      <h2 style={{ marginLeft: "10%", marginTop: "10%" }}>My Subscription</h2>
      <Card style={{ marginLeft: "10%", width: "80vw" }}>
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "10%",
            }}
          >
            <Avatar src="https://avatars.dicebear.com/api/human/:seed.svg" />
            <div style={{ width: "35vw" }}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <h4 style={{ marginTop: "0%" }}>Nazma biwi</h4>
                <CheckCircleOutlineIcon />
              </div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <PhoneIcon />
                <Typography variant="h6">123456789</Typography>
              </div>
            </div>
          </div>

          <Typography
            variant="body2"
            style={{
              width: "50vw",
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "10%",
            }}
          >
            <strong>Subcription details</strong>
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10%",
            }}
          >
            <div>
              <Typography variant="caption text">Start</Typography>
              <Typography variant="body2">
                <strong>16 Aug 2020</strong>
              </Typography>
            </div>
            <div>
              <Typography variant="caption text">Expire</Typography>
              <Typography variant="body2">
                <strong>16 july 2021</strong>
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button size="small" variant="outlined">
              Cancel Plan
            </Button>
            <Button
              size="small"
              variant="contained"
              style={{ backgroundColor: "#f9b208" }}
            >
              Renew Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
