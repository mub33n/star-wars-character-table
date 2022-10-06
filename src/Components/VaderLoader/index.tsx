declare var require: any;
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function VaderLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        flexDirection: "column",
      }}
    >
      <img
        src={require("./loader.gif")}
        width={150}
        height={150}
        alt="loading..."
      />
      <h3 style={{ paddingTop: 16 }}>
        Fetching data from a server far, far away...
      </h3>
    </div>
  );
}
