import { Client,Databases } from "appwrite";


const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_ENDPOINT) // Your API Endpoint
  .setProject(import.meta.env.VITE_PROJECT_ID) // Your project ID;

const databases = new Databases(client);



export { client, databases };