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
      .then((res) => res.data);
  };
}

export default APIClient;
