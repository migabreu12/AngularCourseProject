namespace courseProjectApi.Model;

public class Recipe {
    public string RecipeId { get; set; } = default!;
    public string? Name { get; set; }
    public string? Description { get; set; }
}