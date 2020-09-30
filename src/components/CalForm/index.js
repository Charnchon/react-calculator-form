import React, {useState} from 'react'

function CalForm () {
    const [inputScale , setInputScale] = useState(false)
    const [inputNumDisplay , setInputNumDisplay] = useState(0)
    const [inputNumInstance, setInputNumInstance] = useState(0)
    const [inputAction , setInputAction] = useState(null)

    const handleClickNum = (event) => {

        if (inputNumDisplay === 0 && inputNumInstance === 0 && inputAction === null && inputScale === false) {
            setInputNumDisplay(event.target.value)
            setInputScale(true)
        } else if (inputNumDisplay !== 0  && inputNumInstance === 0 && inputAction === null&& inputScale === true) {
            setInputNumDisplay(inputNumDisplay + event.target.value)
        } else if (inputNumDisplay !== 0  && inputNumInstance === 0 && inputAction !== null && inputScale === false) {
            setInputNumInstance(inputNumDisplay) 
            setInputNumDisplay(event.target.value) 
            setInputScale(true)
        } else if (inputNumDisplay !== 0 && inputNumInstance !== 0 && inputAction !== null && inputScale === true) {
            setInputNumDisplay(inputNumDisplay + event.target.value)
        } else if (inputNumDisplay !== 0 && inputNumInstance !== 0 && inputAction !== null) {
            setInputNumInstance(inputNumDisplay) 
            setInputNumDisplay(event.target.value)
            setInputScale(true) 
        } else if (inputNumDisplay !== 0 && inputNumInstance !== 0 && inputAction === null && inputScale === false) {
            setInputNumDisplay(event.target.value)
            setInputScale(true)
        } else if (inputNumDisplay !== 0  && inputNumInstance !== 0 && inputAction === null && inputScale === true) {
            setInputNumDisplay(inputNumDisplay + event.target.value)
        }
    }

    const handleClickSubmit = (event) => {
        event.preventDefault()
    }

    const handleActionShow = (event) => {
        if (inputAction === "+") {
            setInputNumDisplay(parseInt (inputNumDisplay) + parseInt (inputNumInstance))
        } else if (inputAction === "-") {
            setInputNumDisplay(parseInt (inputNumInstance) - parseInt (inputNumDisplay))
        } else if (inputAction === "*") {
            setInputNumDisplay(parseInt (inputNumInstance) * parseInt (inputNumDisplay))
        } else if (inputAction === "/") {
            setInputNumDisplay(parseInt (inputNumInstance) / parseInt (inputNumDisplay))
        }
        setInputAction(null)
        setInputScale(false)
        
    }
    const handleClickAction = (event) => {
        inputNumDisplay !== null ? setInputAction(event.target.value) : setInputAction(null)
        setInputScale(false)
    }

    return (
        <>
            <form onSubmit={handleClickSubmit}>
                <label>{inputNumDisplay}</label>
                <button value="1" onClick={handleClickNum} >1</button>
                <button value="2" onClick={handleClickNum} >2</button>
                <button value="3" onClick={handleClickNum} >3</button>
                <button value="4" onClick={handleClickNum} >4</button>
                <button value="5" onClick={handleClickNum} >5</button>
                <button value="6" onClick={handleClickNum} >6</button>
                <button value="7" onClick={handleClickNum} >7</button>
                <button value="8" onClick={handleClickNum} >8</button>
                <button value="9" onClick={handleClickNum} >9</button>
                <button value="0" onClick={handleClickNum} >0</button>
                <button value="+" onClick={handleClickAction} >+</button>
                <button value="-" onClick={handleClickAction} >-</button>
                <button value="*" onClick={handleClickAction} >*</button>
                <button value="/" onClick={handleClickAction} >/</button>
                <button onClick={handleActionShow} >=</button>
            </form>
            
        </>
    )
        
}
export default CalForm 