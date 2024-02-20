using Microsoft.EntityFrameworkCore;

namespace CourseProjectApi.Models;

public class CourseProjectApiContext : DbContext {
    public CourseProjectApiContext(DbContextOptions<CourseProjectApiContext> options) : base(options) {}

    public DbSet<Recipe> Recipe { get; set; } = null!;
    public DbSet<IngredientView> IngredientView { get; set; } = null!;
}