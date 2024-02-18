-- Recipes
insert into Recipe (RecipeId, Name, Description)
values ('1E04DF43-A494-4260-889B-749653116BC5', 'Hummus', 'Simple Lemon and Garlic Hummus');

-- Ingredients
insert into Ingredient(IngredientId, Name, Amount, RecipeId)
values ('1B832424-7E92-4A6C-9F7A-FB59882E64DD', 'Chickpeas 2lbs bag', 1, '1E04DF43-A494-4260-889B-749653116BC5');
insert into Ingredient(IngredientId, Name, Amount, RecipeId)
values ('73090F00-1E64-404F-AE62-2214CFA0C135', 'Lemons', 4, '1E04DF43-A494-4260-889B-749653116BC5');
insert into Ingredient(IngredientId, Name, Amount, RecipeId)
values ('793854FB-2A27-436C-8C15-DB575C38652C', 'Garlic cloves', 6, '1E04DF43-A494-4260-889B-749653116BC5');