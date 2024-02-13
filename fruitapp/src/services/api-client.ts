import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://poetrydb.org",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (addition: string) => {
    return axiosInstance
      .get<T[]>(this.endpoint + "/" + addition)
      .then((res) => {
        //Error codes in this API are in the main body not the header, therefore some pre processing must be done
        const responseDataAsString = JSON.stringify(res.data); // Convert data to string
        if (responseDataAsString.includes("status")) {
          throw new Error("Search not found");
        }
        return res.data; // Otherwise, return the data
      });
  };
}

export default APIClient;
