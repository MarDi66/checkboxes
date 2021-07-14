import * as React from 'react'

interface IGlobalCheckBoxProps {
    isChecked: boolean,
    setIsChecked: () => void
}

const GlobalCheckBox: React.FunctionComponent<IGlobalCheckBoxProps> = ({ isChecked, setIsChecked }) => {

    return (
        <>
            <span>{ `Tout ${ isChecked ? 'déselectionner' : 'sélectionner' }` }</span>
            <input type='checkbox' checked={ isChecked } onChange={ setIsChecked } />
        </>
    )

}

export default GlobalCheckBox