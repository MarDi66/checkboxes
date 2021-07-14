import * as React from 'react'

interface ICheckBoxProps {
    isChecked: boolean,
    index: number,
    setIsChecked: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: React.FunctionComponent<ICheckBoxProps> = ({ isChecked, setIsChecked, index }) => <input type='checkbox' value={ index } checked={ isChecked } onChange={ setIsChecked } />

export default CheckBox