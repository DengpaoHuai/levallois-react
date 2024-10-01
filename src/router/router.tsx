import { createBrowserRouter } from "react-router-dom";
import SpeciesPage from "../pages/SpeciesPage";
import WelcomeComponent from "../components/WelcomeComponent";
import CreateAnimal from "../pages/CreateAnimal";
import AnimalsScreen from "../pages/AnimalsScreen";
import UpdateAnimal from "../pages/UpdateAnimal";

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
    path: "/update-animal/:id/:toto?",
    loader: async ({ params }) => {
      const response = await fetch(
        "https://crudcrud.com/api/b680a69bf8054e18bf625f1f75626985/animals/" +
          params.id
      );
      const data = await response.json();
      return data;
    },
    element: <UpdateAnimal></UpdateAnimal>,
  },
]);

export default router;
