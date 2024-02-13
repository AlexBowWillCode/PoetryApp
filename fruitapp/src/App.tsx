import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import PoemGrid from "./components/PoemGrid";
import SortSelector from "./components/SortSelector";

export interface PeomQuery {
  searchQuery: string;
  sortOrder: string;
}

function App() {
  const [poemQuery, setPoemQuery] = useState<PeomQuery>({} as PeomQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchQuery) =>
            setPoemQuery({ ...poemQuery, searchQuery })
          }
        />
        <SortSelector
          sortOrder={poemQuery.sortOrder}
          onSelectSortOrder={(sortOrder) =>
            setPoemQuery({ ...poemQuery, sortOrder })
          }
        />
      </GridItem>
      <GridItem area="main" marginBottom={1000}>
        <PoemGrid poemQuery={poemQuery}></PoemGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
