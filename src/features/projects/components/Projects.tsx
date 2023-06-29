import { Grid, Column, Layer,  useTheme,
} from "@carbon/react";

import "./Projects.scss";

export function Projects(): JSX.Element {

  const {theme} = useTheme();

  const spacing = {
    sm: 2,
    md: 4,
    lg: 8,
    xlg: 8,
    max: 8
  }
  
  return (
 //   <div className="projects-container">
 <Layer as="section" id="projects" className={theme === 'white' ? 'projects-container-white' : 'projects-container-dark'}>
      <Grid>
        <Column sm={4} md={10} lg={16} xlg={16} max={16} style={{textAlign: 'center', marginTop:'3rem', marginBottom: '3rem'}}>
          <h1>My work</h1>
        </Column>
        <Column {...spacing}>
          <p>Col 1</p>
        </Column>
        <Column {...spacing}>
          <div>
            <p>Col 2</p>
          </div>
        </Column>
      </Grid>
      </Layer>
   // </div>
  );
}
