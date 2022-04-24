import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { useState } from "react";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <div
          className="p-0 m-0"
          style={{
            background:
              "url(http://pets-images.dev-apis.com/pets/wallpaperC.jpg",
          }}
        >
          <BrowserRouter>
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                Adopt Me!
              </Link>
            </header>

            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

render(<App />, document.getElementById("root"));
