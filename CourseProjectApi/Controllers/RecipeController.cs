using CourseProjectApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CourseProjectApi.Controllers;

[ApiController]
[Route("[controller]")]
public class RecipeController : ControllerBase {
    [HttpGet]
    public IEnumerable<Recipe> GetRecipes() {
        Recipe[] recipes = [
            new Recipe("Name", "Description")
        ];

        return recipes;
    }
}