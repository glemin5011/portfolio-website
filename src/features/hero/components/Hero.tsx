import { Grid, Column, Layer } from "@carbon/react";
// import headshot from "../../../img/headshot_no_background.png";
import headshotBW from "../../../img/headshot_bw_no_background.png";

import "./Hero.scss";

export function Hero(): JSX.Element {
  return (
    <Layer as="section" id="hero">
      <Grid>
        <Column
          sm={4}
          md={0}
          lg={0}
          xlg={0}
          max={0}
          style={{ position: "relative" }}
        >
          <div>
            <h1 style={{ paddingBottom: "5%", fontSize: "2rem" }}>
              Matej Palenik
            </h1>
            <h4 style={{ fontWeight: "300" }}>Full Stack Developer @ IBM</h4>
          </div>
        </Column>
        <Column
          sm={0}
          md={4}
          lg={0}
          xlg={0}
          max={0}
          style={{ position: "relative" }}
        >
          <div style={{ position: "absolute", top: "10%", left: "10%" }}>
            <h1 style={{ paddingBottom: "5%" }}>Matej Palenik</h1>
            <h3 style={{ fontWeight: "300", fontSize: "1.25rem" }}>
              Full Stack Developer @ IBM
            </h3>
          </div>
        </Column>
        <Column
          sm={0}
          md={0}
          lg={8}
          xlg={8}
          max={8}
          style={{ position: "relative" }}
        >
          <div style={{ position: "absolute", top: "35%", left: "40%" }}>
            <h1 style={{ paddingBottom: "5%" }}>Matej Palenik</h1>
            <h3 style={{ fontWeight: "300" }}>Full Stack Developer @ IBM</h3>
          </div>
        </Column>
        <Column sm={4} md={4} lg={0} xlg={0} max={0}>
          <img src={headshotBW} className="headshot-photo" />
        </Column>
        <Column sm={0} md={0} lg={8} xlg={8} max={8}>
          <img src={headshotBW} className="headshot-photo" />
        </Column>
      </Grid>
    </Layer>
  );
}
