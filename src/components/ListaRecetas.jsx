import React, { useState, useEffect } from "react";

const ListaRecetas = () => {
  const [recetas, setrecetas] = useState([]);

  const [newreceta, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    procedure: "",
  });
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(-1);

  useEffect(() => {
    const savedrecetas = localStorage.getItem("recetas");
    if (savedrecetas) {
      const parsedrecetas = JSON.parse(savedrecetas);
      setrecetas(parsedrecetas);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe({ ...newreceta, [name]: value });
  };

  const handleAddRecipe = () => {
    if (
      newreceta.name.trim() !== "" &&
      newreceta.ingredients.trim() !== "" &&
      newreceta.procedure.trim() !== ""
    ) {
      if (selectedRecipeIndex === -1) {
        setrecetas([...recetas, newreceta]);
        localStorage.setItem(
          "recetas",
          JSON.stringify([...recetas, newreceta])
        );
      } else {
        const updatedrecetas = [...recetas];
        updatedrecetas[selectedRecipeIndex] = newreceta;
        setrecetas(updatedrecetas);
        setSelectedRecipeIndex(-1);
        setNewRecipe({ name: "", ingredients: "", procedure: "" });
        localStorage.setItem("recetas", JSON.stringify(updatedrecetas));
      }
    }
  };
  

  const handleDeleteRecipe = (index) => {
    const updatedrecetas = [...recetas];
    updatedrecetas.splice(index, 1);
    setrecetas(updatedrecetas);
    localStorage.setItem("recetas", JSON.stringify(updatedrecetas));
  };

  const handleEditRecipe = (index) => {
    const recipeToEdit = recetas[index];
    setNewRecipe(recipeToEdit);
    setSelectedRecipeIndex(index);
  };

  

  return (
    <div className="container">
      <h1>Recetas de cocina</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre de la receta
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newreceta.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">
            Ingredientes
          </label>
          <textarea
            className="form-control"
            id="ingredients"
            name="ingredients"
            value={newreceta.ingredients}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="procedure" className="form-label">
            Procedimiento
          </label>
          <textarea
            className="form-control"
            id="procedure"
            name="procedure"
            value={newreceta.procedure}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddRecipe}
        >
          Agregar receta
        </button>
      </form>
      <ul className="list-group mt-3">
        {recetas.map((recipe, index) => (
          <li className="list-group-item" key={index}>
            <h3>{recipe.name}</h3>
            <p>
              <strong>Ingredientes:</strong> {recipe.ingredients}
            </p>
            <p>
              <strong>Procedimiento:</strong> {recipe.procedure}
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleEditRecipe(index)}
            >
              Editar
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDeleteRecipe(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaRecetas;
