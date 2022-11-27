import { Grid, Column } from "@carbon/react";

import "./Projects.scss";

export function Projects(): JSX.Element {
  return (
    <div className="projects-container">
      <Grid>
        <Column sm={2} md={4} lg={8} xlg={8} max={8}>
          <p>Col 1</p>
        </Column>
        <Column sm={2} md={4} lg={8} xlg={8} max={8}>
          <div>
            <p>Col 2</p>
          </div>
        </Column>
      </Grid>
    </div>
  );
}
