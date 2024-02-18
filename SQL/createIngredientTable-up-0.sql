create table Ingredient (IngredientId uniqueidentifier primary key default newid(), Name varchar(100), Amount decimal, RecipeId uniqueidentifier foreign key references Recipe(RecipeId));
