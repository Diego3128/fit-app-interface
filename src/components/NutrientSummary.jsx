import '../css/layout/nutrientSummary.css';



function NutrientSummary({ foods }) {

    // Calcular los totales de cada macronutriente
    const totalProtein = foods.reduce((acc, food) => acc + food.proteina, 0);
    const totalFat = foods.reduce((acc, food) => acc + food.grasas, 0);
    const totalCarbs = foods.reduce((acc, food) => acc + food.carbs, 0);

    return (
        <div className="nutrient-summary">
            <div className="nutrient-summary__item">
                <span className="nutrient-summary__label">Proteínas</span>
                <span className="nutrient-summary__value">{totalProtein} / 150g</span>
            </div>
            <div className="nutrient-summary__item">
                <span className="nutrient-summary__label">Carbohidratos</span>
                <span className="nutrient-summary__value">{totalCarbs} / 325g</span>
            </div>
            <div className="nutrient-summary__item">
                <span className="nutrient-summary__label">Grasas</span>
                <span className="nutrient-summary__value">{totalFat} / 80g</span>
            </div>
        </div>
    )
};

export default NutrientSummary;