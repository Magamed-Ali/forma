import React, {useState} from 'react';
import style from "./style.css"

function App(props) {
    const [numberone, setNumberone] = useState("")
    const [numbertwo, setNumbertwo] = useState("")

    let [peremenayaone, setPeremenaya] = useState()
    const handleClickplyus = ()=>{
        let nper = Number(numberone) + Number(numbertwo)
        setPeremenaya(nper)
    }

    const handleClickminus = ()=>{
       let nper = Number(numberone) - Number(numbertwo)
        setPeremenaya(nper)
    }
    const handleClickmultiplication = ()=>{
        let nper = Number(numberone) * Number(numbertwo)
        setPeremenaya(nper)
    }
    const handleClickdivision = ()=>{
        let nper = Number(numberone) / Number(numbertwo)
        setPeremenaya(nper)
    }
    const hendlChangeOne = (e)=> {
       setNumberone(e.target.value)
    }
    const hendlChangeTwo = (e)=> {
        setNumbertwo(e.target.value)
    }

    return (
        <div className="div">
            {/*<input type="text" value={login} onChange={hendlChange}/>*/}
            {/*<button onClick={handleClick} >click</button>*/}
            <div className="input">
                <input placeholder="число 1" type="number" value={numberone} onChange={hendlChangeOne}/>
                <input placeholder="число 2" type="number" value={numbertwo} onChange={hendlChangeTwo}/>
            </div>
            <div className="button">
                <button onClick={()=>{handleClickplyus()}} >{"+"}</button>
                <button onClick={()=>{handleClickminus()}}>{"-"}</button>
                <button onClick={()=>{handleClickmultiplication()}}>{"*"}</button>
                <button onClick={()=>{handleClickdivision()}}>{"/"}</button>
            </div>
            <div className="result">
                Результат = {peremenayaone}
            </div>

        </div>
    );
}

export default App;