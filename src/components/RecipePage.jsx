import React, { useState } from 'react';


const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    ingredients: '',
    procedure: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleAddRecipe = () => {
    if (newRecipe.name.trim() !== '' && newRecipe.ingredients.trim() !== '' && newRecipe.procedure.trim() !== '') {
      setRecipes([...recipes, newRecipe]);
      setNewRecipe({ name: '', ingredients: '', procedure: '' });
    }
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
            value={newRecipe.name}
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
            value={newRecipe.ingredients}
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
            value={newRecipe.procedure}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddRecipe}>
          Agregar receta
        </button>
      </form>
      <ul className="list-group mt-3">
        {recipes.map((recipe, index) => (
          <li className="list-group-item" key={index}>
            <h3>{recipe.name}</h3>
            <p>
              <strong>Ingredientes:</strong> {recipe.ingredients}
            </p>
            <p>
              <strong>Procedimiento:</strong> {recipe.procedure}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
