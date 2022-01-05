import "./App.scss";
import { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
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
import AutoBiography from "./pages/textPages/AutoBiography";
import SingleArt from "./pages/SingleArt";
import FullArtSingle from "./pages/FullArtSingle";

import AllArtGrid from "./pages/AllArtGrid";
import NoHeader from "./components/NoHeader";
import BookSingle from "./pages/BookSingle";
import Catalog from "./pages/Catalog";
import Murals from "./pages/Murals";

function App() {
  const [current, setCurrent] = useState(null);
  const [hasVisited, setHasVisited] = useState(false);

  return (
    <>
      {/* <Switch> */}
      {/* <Routes>
    <Route exact path="/artwork/:style/:id" render={() => <SingleArt />} />

   </Routes> */}
      <BrowserRouter>
        {/* <Routes> */}
        <Switch>
          <Route
            exact
            path="/artwork/:style/:id"
            render={() => <SingleArt />}
          />
          <Route
            exact
            path="/full/artwork/:id"
            render={() => <FullArtSingle />}
          />
          <Route
            path={[
              "/books",
              "/test",
              "/philosophy",
              "/art-education",
              "/artist-creativity",
              "/art-educator",
              "/video-media",
              "/archive-links",
              "/professional-relationships",
              "/autobiography",
            ]}
          >
            <NoHeader>
              <Switch>
                <Route path="/books" render={() => <Books />} />
                <Route path="/test" render={() => <Index />} />
                <Route path="/autobiography" render={() => <AutoBiography />} />
                <Route path="/philosophy" render={() => <Philosophy />} />
                <Route path="/art-education" render={() => <ArtEducation />} />
                <Route
                  path="/artist-creativity"
                  render={() => <ArtCreativity />}
                />
                <Route
                  exact
                  path="/art-educator"
                  render={() => <ArtEducator />}
                />
                <Route
                  exact
                  path="/video-media"
                  render={() => <VideoMedia />}
                />
                <Route
                  exact
                  path="/archive-links"
                  render={() => <ArchivesLinks />}
                />
                <Route
                  exact
                  path="/professional-relationships"
                  render={() => <Relationships />}
                />
              </Switch>
            </NoHeader>
          </Route>

          <Layout>
            <Route
              exact
              path="/"
              render={() => (
                <Index setHasVisited={setHasVisited} hasVisited={hasVisited} />
              )}
            />
            <Route exact path="/temima-life" render={() => <TemimaLife />} />
            <Route exact path="/artist" render={() => <Artist />} />

            <Route exact path="/foundation" render={() => <Foundation />} />
            <Route exact path="/catalog" render={() => <Catalog />} />

            <Route exact path="/contact" render={() => <Contact />} />
            <Route exact path="/mailing-list" render={() => <MailingList />} />
            <Route exact path="/book/:id" render={() => <BookSingle />} />
            <Route exact path="/murals" render={() => <Murals />} />

            <Route
              exact
              path="/footprints-preview"
              render={() => <FootprintsPreview />}
            />

            <Route exact path="/memories" render={() => <Memories />} />

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
            <Route
              exact
              path="/art/all"
              render={() => <AllArtGrid artStyle="lithographs" />}
            />
            <Route
              exact
              path="/illustrations/"
              render={() => <ArtGrid artStyle="illustrations" />}
            />
            <Route
              exact
              path="/rockypoint-studio/"
              render={() => <ArtGrid artStyle="rockypointstudio" />}
            />
            <Route
              exact
              path="/temima"
              render={() => <ArtGrid artStyle="temimaLife" />}
            />
            <Route
              exact
              path="/family-life"
              render={() => <ArtGrid artStyle="familyLife" />}
            />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
