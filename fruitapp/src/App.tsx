import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";

export interface PeomQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [poemQuery, setPoemQuery] = useState<PeomQuery>({} as PeomQuery);

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="main"></GridItem>
    </Grid>
  );
}

export default App;
