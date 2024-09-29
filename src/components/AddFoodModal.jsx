import '../css/layout/addFoodModal.css';
import { useState } from 'react';

function AddFoodModal({ isOpen, onClose, addFood }) {
    const [formData, setFormData] = useState({
        nombre: '',
        grasas: 0,
        carbs: 0,
        proteina: 0,
        marca: 'default'
    });

    // Calcular calorías automáticamente
    const calorias = (formData.grasas * 9) + (formData.carbs * 4) + (formData.proteina * 4);

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        addFood({ ...formData, calorias: calorias });
        onClose(); // Cierra el modal
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Agregar Comida</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </label>
                    <label>
                        Grasas (g):
                        <input type="number" name="grasas" value={formData.grasas} onChange={handleChange} />
                    </label>
                    <label>
                        Carbohidratos (g):
                        <input type="number" name="carbs" value={formData.carbs} onChange={handleChange} />
                    </label>
                    <label>
                        Proteínas (g):
                        <input type="number" name="proteina" value={formData.proteina} onChange={handleChange} />
                    </label>
                    <p>Calorías: {calorias} kcal</p>
                    <button type="submit">Guardar</button>
                </form>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default AddFoodModal;
