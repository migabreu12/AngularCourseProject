using System.ComponentModel.DataAnnotations;

namespace CourseProjectApi.Models;

public class Recipe {
    [Key]
    public Guid RecipeId { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }

    public Recipe(string name, string description) {
        RecipeId = new Guid();
        Name = name;
        Description = description;
    }
}