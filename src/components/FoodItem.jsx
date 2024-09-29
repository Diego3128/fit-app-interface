import '../css/layout/foodItem.css';
function FoodItem({ food }) {
    return (
        <div className="food-item">
            <div className="food-item__group">
                <p className="food-item__name">{food.nombre}</p>
                <p className="food-item__brand">{food.marca}</p>
            </div>
            <div className="food-item__group">
                <p className='food-item__macros'>Proteina: {food.proteina}g | Carbs: {food.carbs}g | Grasa: {food.grasas}g | Calorias: {food.calorias}</p>
                <p>Porción</p>
            </div>
        </div>
    );
}

export default FoodItem;