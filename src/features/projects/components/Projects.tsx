import {
  Grid, Column, Layer, useTheme,
} from "@carbon/react";
import { ReactComponent as CloudIcon } from '../../../img/cloud--services.svg'

import "./Projects.scss";

export function Projects(): JSX.Element {

  const { theme } = useTheme();

  const spacing = {
    sm: 4,
    md: 8,
    lg: 16,
    xlg: 16,
    max: 16
  }

  const halfSpacing = {
    sm: 2,
    md: 4,
    lg: 8,
    xlg: 8,
    max: 8,
  }

  return (
    //   <div className="projects-container">
    <Layer as="section" id="projects" className={theme === 'white' ? 'projects-container-white' : 'projects-container-dark'}>
      <Grid>
        <Column {...spacing} style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
          <h1>My work</h1>
        </Column>
        <Column {...spacing} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "1rem" }}>
              <CloudIcon height="3.5rem" style={{ fill: theme === 'white' ? 'black' : 'white' }} />
            </span>
            Cloud Native Development
          </h4>
        </Column>
        <Column {...spacing} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "1rem" }}>
              <CloudIcon height="3.5rem" style={{ fill: theme === 'white' ? 'black' : 'white' }} />
            </span>
            Cloud Native Development
          </h4>
        </Column>
        <Column {...spacing} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "1rem" }}>
              <CloudIcon height="3.5rem" style={{ fill: theme === 'white' ? 'black' : 'white' }} />
            </span>
            Cloud Native Development
          </h4>
        </Column>


      </Grid>
    </Layer>
    // </div>
  );
}


