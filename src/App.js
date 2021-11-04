import logo from "./logo.svg";
import "./App.scss";
import Grid from "./components/Grid";
import Grid2 from "./components/Grid2";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import TemimaLife from "./pages/textPages/TemimaLife";
import Artist from "./pages/textPages/Artist";
import ArtEducator from "./pages/textPages/ArtEducator";
import Memories from "./pages/textPages/Memories";


function App() {
  const [current, setCurrent] = useState(null);

  return (
    <>
      <Layout>
        <Route exact path="/" render={() => <Index />} />
        <Route exact path="/temima-life" render={() => <TemimaLife />} />
        <Route exact path="/artist" render={() => <Artist />} />
        <Route exact path="/art-educator" render={() => <ArtEducator />} />
        <Route exact path="/professional-relationships" render={() => <Memories />} />
      </Layout>
    </>
  );
}

export default App;
