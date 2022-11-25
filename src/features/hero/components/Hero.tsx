import { Content, Grid, Column } from "@carbon/react";
// import headshot from "../../../img/headshot_no_background.png";
import headshotBW from "../../../img/headshot_bw_no_background.png";

import "./Hero.scss";

export function Hero(): JSX.Element {
  return (
    <Content className="hero-container">
      <Grid>
        <Column
          sm={1}
          md={0}
          lg={0}
          xlg={0}
          max={0}
          style={{ position: "relative" }}
        >
          <div style={{ position: "absolute", top: "5%", left: "10%" }}>
            <h1 style={{ paddingBottom: "5%", fontSize: "2rem" }}>
              Matej Palenik
            </h1>
            <h3 style={{ fontWeight: "300", fontSize: "1rem" }}>
              Full Stack Developer @ IBM
            </h3>
          </div>
        </Column>
        <Column
          sm={0}
          md={4}
          lg={8}
          xlg={8}
          max={8}
          style={{ position: "relative" }}
        >
          <div style={{ position: "absolute", top: "35%", left: "50%" }}>
            <h1 style={{ paddingBottom: "5%" }}>Matej Palenik</h1>
            <h3 style={{ fontWeight: "300" }}>Full Stack Developer @ IBM</h3>
          </div>
        </Column>
        <Column
          sm={3}
          md={4}
          lg={8}
          xlg={8}
          max={8}
          style={{ paddingLeft: "4rem" }}
        >
          <img src={headshotBW} className="headshot-photo" />
        </Column>
      </Grid>
    </Content>
  );
}
