import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import CheckBox from './components/CheckBox';
import GlobalCheckBox from './components/GlobalCheckBox';

function App() {

  // State local
  const [ checkBoxesStates, setCheckBoxesStates ] = useState<Array<boolean>>([])
  const [ globalCheckBoxChecked, setGlobalCheckBoxChecked ] = useState<boolean>(false)


  useEffect(() => {

    // Mise en place du state local
    let newArray: Array<boolean> = []
    for (let i = 1; i<= 4; i++) newArray.push(false)
    setCheckBoxesStates([ ...newArray ])

  }, [])


  // --- HANDLERS --- //
  // Changement de state de la CB global
  const handleGlobalCBChange = (): void => {

    setGlobalCheckBoxChecked(previous => !previous)
    setCheckBoxesStates([ ...checkBoxesStates.map(() => !globalCheckBoxChecked) ])

  }

  // Changement de state de chaque CB
  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>): void => {

    const { checked, value } = e.currentTarget
    const newArray = checkBoxesStates.map((state, i) => i === parseInt(value) ? checked : state)
    setCheckBoxesStates([ ...newArray ])

    // Set de la CB global à checked si toutes les autres CB sont checked
    if (newArray.every(value => value === true)) setGlobalCheckBoxChecked(true)

    // Si la CB global était checked et qu'on décoche une autre CB, on update le state
    if (globalCheckBoxChecked) setGlobalCheckBoxChecked(checked)

  }


  // Constantes
  const checkboxesDisplay = checkBoxesStates.map((state, i) => <CheckBox key={ i } isChecked={ state } setIsChecked={ handleCheckBoxChange } index={ i } />)

  return (
    <div className="App">

      <GlobalCheckBox isChecked={ globalCheckBoxChecked } setIsChecked={ handleGlobalCBChange } />
      
      <div>
        { checkboxesDisplay }
      </div>
      

    </div>
  );
}

export default App;
