namespace CourseProjectApi.Models;

public class Recipe {
    public Guid RecipeId { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }

    public Recipe(string name, string description) {
        RecipeId = new Guid();
        Name = name;
        Description = description;
    }
}