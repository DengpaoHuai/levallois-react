import axios from "axios";

const crudcrud = axios.create({
  baseURL: `https://crudcrud.com/api/${import.meta.env.VITE_KEY}/`,
});

export default crudcrud;
