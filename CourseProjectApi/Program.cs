using CourseProjectApi.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Adding the db context to the DI
var connectionString = builder.Configuration.GetSection("ConnectionStrings:LocalDockerSqlDb").Value;
builder.Services.AddDbContext<CourseProjectApiContext>(options => options.UseSqlServer(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
