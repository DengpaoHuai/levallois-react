import { Specie } from "../pages/SpeciesPage";

const SpecieCard = ({ specie }: { specie: Specie }) => {
  return (
    <div>
      <h2>{specie.name}</h2>
      <p>Classification: {specie.classification}</p>
      <p>Designation: {specie.designation}</p>
      <p>Average Height: {specie.average_height}</p>
    </div>
  );
};

export default SpecieCard;
