import { Content, Grid, Column, Tile } from "@carbon/react";
// import headshot from "../../../img/headshot_no_background.png";
import headshotBW from "../../../img/headshot_bw_no_background.png";

import "./Hero.scss";

export function Hero(): JSX.Element {
  return (
    <Content className="hero-container">
      <Tile>
        <Grid>
          <Column sm={2} md={4} lg={8} xlg={8} max={8}>
            <div style={{ paddingTop: "20%", paddingLeft: "50%" }}>
              <h1 style={{ paddingBottom: "5%" }}>Matej Palenik</h1>
              <h3 style={{ fontWeight: "300" }}>Full Stack Developer @ IBM</h3>
            </div>
          </Column>
          <Column sm={2} md={4} lg={8} xlg={8} max={8}>
            <div>
              <img src={headshotBW} height="450px" />
            </div>
          </Column>
        </Grid>
      </Tile>
    </Content>
  );
}
