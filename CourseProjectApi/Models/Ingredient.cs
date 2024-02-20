namespace CourseProjectApi.Models;

public class Ingredient {
    public Guid IngredientId { get; set; }
    public string? Name { get; set; }
    public decimal? Amount { get; set; }
    public Guid RecipeId { get; set; }
}