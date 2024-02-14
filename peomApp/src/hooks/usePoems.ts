import { useQuery } from "@tanstack/react-query";
import { PeomQuery } from "../App";
import APIClient from "../services/api-client";

export interface Poem {
  title: string;
  author: string;
  lines: string[];
}

const apiClient = new APIClient<Poem>("");

const usePoems = (peomQuery: PeomQuery) => {
  const searchName = peomQuery.searchQuery
    ? peomQuery.searchQuery
    : "Ozymandias";

  const order = peomQuery.sortOrder || "title";

  const searchQuery = order + "/" + searchName;
  return useQuery<Poem[], Error>({
    queryKey: ["peoms", peomQuery],

    queryFn: () => apiClient.getAll(searchQuery),
    staleTime: 10 * 60 * 1000, //10m
  });
};

export default usePoems;
