import "./App.scss";
import { Hero } from "./features/hero";
import { Navbar } from "./features/navbar";
import { Projects } from "./features/projects";
import { Content, Theme } from "@carbon/react";
import { useAppSelector } from "./app/hooks/hooks";

function App(): JSX.Element {
  const { theme } = useAppSelector((state) => state.app);
  return (
    <Theme theme={theme}>
      <div className="App">
        <Navbar />
        <Content className="hero-container">
          <Hero />
          <Projects />
        </Content>{" "}
      </div>
    </Theme>
  );
}

export default App;
