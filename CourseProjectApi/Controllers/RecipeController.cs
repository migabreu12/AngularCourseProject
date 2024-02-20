using System.Collections;
using CourseProjectApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CourseProjectApi.Controllers;

[ApiController]
[Route("[controller]")]
public class RecipeController : ControllerBase {
    private readonly CourseProjectApiContext _dbContext;

    public RecipeController(CourseProjectApiContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet("recipes")]
    public IEnumerable<Recipe> GetRecipes() {
        // ToDo: Replace with service
        List<Recipe> recipes = _dbContext.Recipe.ToList();

        return recipes.ToArray<Recipe>();
    }

    [HttpGet("ingredientswithrecipes")]
    public IEnumerable<IngredientView> GetIngredientsWithRecipeDetails() {
        // ToDo: Replace with service
        List<IngredientView> ingredientViews = _dbContext.IngredientView.ToList();

        return ingredientViews;
    }
}