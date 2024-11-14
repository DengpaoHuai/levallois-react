import { createBrowserRouter } from "react-router-dom";
import SpeciesPage from "../pages/SpeciesPage";
import WelcomeComponent from "../components/WelcomeComponent";
import CreateAnimal from "../pages/CreateAnimal";
import AnimalsScreen from "../pages/AnimalsScreen";
import UpdateAnimal from "../pages/UpdateAnimal";
import crudcrud from "../services/crudcrud.instance";
import { useAnimalStore } from "../zustand/useAnimalStore";
import { getAnimalsList } from "./loaders/animalsLoader";
import DemoPage from "../pages/DemoPage";
import WoafScreen from "../pages/WoafScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SpeciesPage></SpeciesPage>,
  },
  {
    path: "/welcome",
    element: <WelcomeComponent></WelcomeComponent>,
  },
  {
    path: "/create_animal",
    element: <CreateAnimal></CreateAnimal>,
  },
  {
    path: "/animals",
    element: <AnimalsScreen></AnimalsScreen>,
  },
  {
    path: "/update-animal/:id",
    loader: getAnimalsList,
    element: <UpdateAnimal></UpdateAnimal>,
  },
  {
    path: "/meow",
    element: <DemoPage></DemoPage>,
  },
  {
    path: "/woaf",
    element: <WoafScreen></WoafScreen>,
  },
]);

export default router;
