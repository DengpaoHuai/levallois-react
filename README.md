set((state) => {
const index = state.animals.findIndex((a) => a.\_id === id);
const newAnimals = state.animals
newAnimals[index] = {
...newAnimals[index],
...animal
};
return { animals: newAnimals };
})
