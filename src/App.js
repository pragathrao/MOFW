import DataContext from "./Context/DataContext";
import Home from "./Pages/Home";
import { MantineProvider } from '@mantine/core';
import Spotlight from "./Components/Spotlight";
import { Route, Routes } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";
import Explore from "./Pages/Explore";
import { useDocumentTitle, useDocumentVisibility } from "@mantine/hooks";


function App() {

  const documentState = useDocumentVisibility();
  useDocumentTitle(`${documentState === 'visible' ? 'Movies are Lovin you ❤' : 'Movies Want you to come back 😢'} `)


  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <DataContext>
        <Spotlight>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/Explore" element={<Explore />} />
          </Routes>
          <DataContext />
        </Spotlight>
      </DataContext>
    </MantineProvider>

  );
}

export default App;
