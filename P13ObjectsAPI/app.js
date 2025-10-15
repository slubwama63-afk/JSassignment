// Excercise
async function getMeals() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const mealData = await res.json();
  console.log(mealData); // här funkar det också
}

getMeals();

/* Test uppgift, skapa en async-funktion
async function getMeals() {
  try {
    // Hämta data från API:et
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const data = await res.json();

    // Spara måltiderna i en variabel
    const meals = data.meals;

    // Loopar igenom måltiderna och skriver ut namnen
    meals.forEach(meal => {
      console.log(meal.strMeal);
    });

  } catch (error) {
    console.error("Något gick fel:", error);
  }
}

// Kör funktionen
getMeals();


