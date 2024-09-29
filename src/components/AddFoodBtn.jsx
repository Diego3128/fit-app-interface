import '../css/layout/buttons.css';
function AddFoodBtn({ onClick }) {

    function handleClick() {
        console.log('open modal form');
    }

    return (
        <button className="btn btn--add-food" onClick={onClick}>Agregar comida</button>
    )
}


export default AddFoodBtn;