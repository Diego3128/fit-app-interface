import '../css/layout/mealSection.css';

import { useState } from 'react';
import AddFoodModal from './AddFoodModal'; // Modal

import FoodItem from './FoodItem';
import AddFoodBtn from "./AddFoodBtn";

function MealSection({ title, foods }) {

    const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar el modal
    const [foodList, setFoodList] = useState(foods); // Estado para manejar la lista de comidas


    // Función para agregar una nueva comida
    const addFood = (newFood) => {
        setFoodList([...foodList, newFood]);
    };


    return (
        <section className="meal-section">
            <h2 className="meal__name">{title}</h2>
            <div className="food-list">
                {foodList.map((food, i) => (
                    <FoodItem key={i} food={food} />
                ))}
            </div>

            {/* Botón que abrirá el modal */}
            <AddFoodBtn onClick={() => setModalOpen(true)} />

            {/* Modal que se abre al hacer clic en el botón */}
            <AddFoodModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                addFood={addFood}
            />
        </section>
    );
}
export default MealSection