import { createBrowserRouter } from "react-router-dom";
import SpeciesPage from "../pages/SpeciesPage";
import WelcomeComponent from "../components/WelcomeComponent";
import CreateAnimal from "../pages/CreateAnimal";

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
]);

export default router;
