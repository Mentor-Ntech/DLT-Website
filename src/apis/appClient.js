import { Client } from "appwrite";

export const appClient = new Client()
  .setEndpoint(process.env.REACT_APP_ENDPOINT) // API Endpoint
  .setProject(process.env.REACT_APP_PROJECT); // project ID
