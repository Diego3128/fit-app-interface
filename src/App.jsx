// Components
import Header from './components/Header'
import NutrientSummary from './components/NutrientSummary'
import MealSection from './components/MealSection';

//data
import { foods } from './data/foods';

import './css/App.css'

function App() {

  return (
    <>
      <Header />
      <NutrientSummary foods={foods} />
      <MealSection title="Desayuno" foods={foods} />
      <MealSection title="Almuerzo" foods={foods} />
      <MealSection title="Comida" foods={foods} />
    </>
  )
}

export default App
