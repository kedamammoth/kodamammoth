import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./service/firebase";
import Top from "./components/Top";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";

import React from "react";
import { styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";

/* Original Windows95 font (optional) */
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import marumonica from "./font/x12y16pxmarumonica.ttf";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  @font-face {
    font-family: 'marumonica';
    src: url('${marumonica}') format('truetype');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
    /* font-family: 'marumonica'; */
  }
  body {
    background-color: rgb(85, 170, 170);
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <BrowserRouter>
          {/* BrowserRouter直下に置けるコンポーネントは1つだけ */}
          <Routes>
            {/* RouteはBrowserRouter以下ならばどこの階層に置いてもよい */}
            <Route path={`/`} element={<Top />} />
            <Route path={`/profile`} element={<Profile />} />
            <Route path={`/gallery`} element={<Gallery />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
