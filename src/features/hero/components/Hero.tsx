import { Content, Grid, Column } from "@carbon/react";

export function Hero(): JSX.Element {
  return (
    <Content>
      <Grid>
        <Column sm={4} md={6} lg={12} xlg={12} max={12}>
          <p>Column 1 Content</p>
        </Column>
        <Column sm={4} md={6} lg={12} xlg={12} max={12}>
          <p>Column 2 Content</p>
        </Column>
      </Grid>
    </Content>
  );
}
