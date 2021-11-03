import logo from "./logo.svg";
import "./App.scss";
import Grid from "./components/Grid";
import Grid2 from "./components/Grid2";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/Layout";
function App() {
  const [current, setCurrent] = useState(null);

  return (
    <>
      <Layout>
        <Route exact path="/" render={() => <Index />} />
      </Layout>
    </>
  );
}

export default App;
