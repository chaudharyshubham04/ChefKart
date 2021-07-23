import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Attendance from "./Attendance";
import Subscription from "./Subscription";

export default function TwoButtons() {
  const [decider, setdecider] = useState(true);
  const truer = () => {
    setdecider(true);
  };

  const falser = () => {
    setdecider(false);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={truer}
          style={{
            backgroundColor: "#f9b208",
            display: "flex",
            flex: 0.5,
            borderRadius: "0%",
          }}
        >
          Attendance
        </Button>
        <Button
          onClick={falser}
          style={{
            backgroundColor: "#f9b208",
            display: "flex",
            flex: 0.5,
            borderRadius: "0%",
          }}
        >
          Subscription
        </Button>
      </div>
      {decider ? <Attendance></Attendance> : <Subscription></Subscription>}
    </div>
  );
}
