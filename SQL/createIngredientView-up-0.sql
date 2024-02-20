create view IngredientView AS
select
	ingredient.IngredientId,
	ingredient.Name as IngredientName,
	ingredient.Amount,
	recipe.Name as RecipeName,
	recipe.Description as RecipeDescription
from Ingredient ingredient
	left join Recipe recipe on ingredient.RecipeId = recipe.RecipeId;
