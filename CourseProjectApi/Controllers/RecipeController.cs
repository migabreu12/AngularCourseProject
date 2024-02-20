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

    [HttpGet]
    public IEnumerable<Recipe> GetRecipes() {
        List<Recipe> recipes = _dbContext.Recipe.ToList();
        return recipes.ToArray<Recipe>();
    }
}