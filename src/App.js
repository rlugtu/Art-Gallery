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
import ArtCreativity from "./pages/textPages/ArtCreativity";
import ArchivesLinks from "./pages/ArchivesLinks";
import StudioWorkshopPress from "./pages/StudioWorkshopPress";
import Philosophy from "./pages/textPages/Philosophy";
import ArtEducation from "./pages/textPages/ArtEducation";
import FootprintsPreview from "./pages/FootprintsPreview";
import Relationships from "./pages/textPages/Relationships";
import Foundation from "./pages/textPages/Foundation";
import Contact from "./pages/Contact";
import MailingList from "./pages/MailingList";
import VideoMedia from "./pages/VideoMedia";
import Books from "./pages/Books";
import ArtGrid from "./pages/ArtGrid";
function App() {
  const [current, setCurrent] = useState(null);

  return (
    <>
      <Layout>
        <Route exact path="/" render={() => <Index />} />
        <Route exact path="/temima-life" render={() => <TemimaLife />} />
        <Route exact path="/artist" render={() => <Artist />} />
        <Route exact path="/art-educator" render={() => <ArtEducator />} />
        <Route exact path="/philosophy" render={() => <Philosophy />} />
        <Route exact path="/art-education" render={() => <ArtEducation />} />
        <Route exact path="/foundation" render={() => <Foundation />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/mailing-list" render={() => <MailingList />} />
        <Route exact path="/video-media" render={() => <VideoMedia />} />
        <Route exact path="/books" render={() => <Books />} />

        <Route
          exact
          path="/artist-creativity"
          render={() => <ArtCreativity />}
        />

        <Route
          exact
          path="/footprints-preview"
          render={() => <FootprintsPreview />}
        />
        <Route
          exact
          path="/professional-relationships"
          render={() => <Relationships />}
        />

        <Route exact path="/memories" render={() => <Memories />} />

        <Route exact path="/archive-links" render={() => <ArchivesLinks />} />
        <Route
          exact
          path="/studio-workshop-press"
          render={() => <StudioWorkshopPress />}
        />
        <Route
          exact
          path="/sculptures/"
          render={() => <ArtGrid artStyle="sculptures" />}
        />
        <Route
          exact
          path="/illustrations/"
          render={() => <ArtGrid artStyle="illustrations" />}
        />
        <Route
          exact
          path="/drawings/"
          render={() => <ArtGrid artStyle="drawings" />}
        />
        <Route
          exact
          path="/paintings/"
          render={() => <ArtGrid artStyle="paintings" />}
        />
        <Route
          exact
          path="/lithographs/"
          render={() => <ArtGrid artStyle="lithographs" />}
        />
      </Layout>
      <Route exact path="/artwork/:id" render={() => <ArchivesLinks />} />
    </>
  );
}

export default App;
