using System.ComponentModel.DataAnnotations;

namespace CourseProjectApi.Models;

public class IngredientView {
    [Key]
    public Guid IngredientId { get; set; }
    public string? IngredientName { get; set; }
    public decimal? Amount { get; set; }
    public string? RecipeName { get; set; }
    public string? RecipeDescription { get; set; }
}