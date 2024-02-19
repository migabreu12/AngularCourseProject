namespace courseProjectApi.Model;

public class Ingredient {
    public string IngredientId { get; set; } = default!;
    public string? Name { get; set; }
    public float? Amount { get; set; }
    public string RecipeId { get; set; } = default!;
}