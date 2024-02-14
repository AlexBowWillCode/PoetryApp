import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PeomQuery } from "../App";
import usePoems from "../hooks/usePoems";

interface Props {
  poemQuery: PeomQuery;
}

const PoemGrid = ({ poemQuery }: Props) => {
  const { data, error, isLoading } = usePoems(poemQuery);

  if (error)
    return (
      <>
        <Text marginLeft={3}>{error.message}</Text>;
      </>
    );

  if (isLoading)
    return (
      <>
        <Text marginLeft={3}>Loading ...</Text>
      </>
    );

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 1 }}
      padding="10px"
      justifyContent="center"
      spacing={6}
    >
      {data?.map((poem) => (
        <Card width="100%" key={poem.title}>
          <CardBody>
            <VStack>
              <Heading fontSize="2xl">{poem.title}</Heading>
              <Heading fontSize="l">{poem.author}</Heading>
              {poem.lines.map((line, index) => (
                <Text key={index}>{line}</Text>
              ))}
            </VStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default PoemGrid;
