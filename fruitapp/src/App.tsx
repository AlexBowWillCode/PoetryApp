import {
  Center,
  Grid,
  GridItem,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import PoemGrid from "./components/PoemGrid";
import SortSelector from "./components/SortSelector";
import { FaBookOpen } from "react-icons/fa6";

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
        md: "60em",
        lg: "84em",
      }}
    >
      <GridItem area="nav">
        <HStack justify="center" padding="10px">
          <FaBookOpen />
          <Heading>My Poem Finder</Heading>
          <FaBookOpen />
        </HStack>
        <HStack justify="center" padding="10px">
          <SortSelector
            sortOrder={poemQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setPoemQuery({ ...poemQuery, sortOrder })
            }
          />
          <NavBar
            onSearch={(searchQuery) =>
              setPoemQuery({ ...poemQuery, searchQuery })
            }
          />
        </HStack>
      </GridItem>
      <GridItem area="main" marginBottom={1000}>
        <PoemGrid poemQuery={poemQuery}></PoemGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
