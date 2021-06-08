import React, {useState} from 'react';
import style from "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App(props) {
    const [advertisements, setAdvertisements] = useState([
        {price: 100, name: 'Продам кошку', active: true, id: 0 },
        {price: 100, name: 'Продам машину', active: false, id: 1 },
        {price: 105, name: 'Купить собаку', active: true, id: 2 },
    ]);
console.log(advertisements)
    const [pricField, setPricField] = useState("");
    const [nameField, setNameField] = useState("");
    const [checkField, setCheckField] = useState("")
    const [numberId, setNumberId] = useState("")
    let [troo = true, setTroo] = useState();
    const [clickactivity, setclickactivity] = useState("")

    const changeTruetoFalse = (indexcheng)=>{
        const newArrayAfterClickingActivity = advertisements.map((item,index)=>{
        if (indexcheng === index){
            return {
                ...item, active: !item.active
            }

        }return item
        })
    setAdvertisements(newArrayAfterClickingActivity)
    }

    const hendeleChengePrice = (e)=>{
        setPricField(e.target.value)
    }
    const hendeleChengeName = (e)=>{
        setNameField(e.target.value)
    }
    const hendelcheckField = ()=>{
        setCheckField(!checkField)
    }
    const hendChengID =(e)=>{
        setNumberId(e.target.value)
    }
    const handleAdd = ()=>{
        const newHandleAdd ={
            price: pricField,
            name: nameField,
            active: checkField,
            id: numberId
        }
        setAdvertisements([...advertisements, newHandleAdd])
    }

    const deleteForm = (indexOfremuve)=>{
        const filtred = advertisements.filter((item,itid)=>{
            if(itid === indexOfremuve){
                return false;
            }
            return true;
        })
        setAdvertisements(filtred)
    }


    const oneblack=()=>{
      troo = !troo

        setTroo(troo)
    }

    return(
        <div className = {`generalParentBlock ${troo ? "" : "nightTheme"}`}>
        <button  onClick={oneblack} className="buttonlamp"><p className={`buttonSwitchTheme ${troo ? "buttonSwitchThemeDay" : ""}`}>⚹</p></button>
        <div className="container w-50">
            <div className="justify-content-between">
                <input placeholder="номер" type="text" value={pricField} onChange={hendeleChengePrice}/>
                <input placeholder="значение" type="text" value={nameField} onChange={hendeleChengeName}/>
                <input  type="checkbox" checked={checkField} onChange={hendelcheckField} style={{marginLeft: 30}}/>
                <input placeholder="id" type="number" value={numberId} onChange={hendChengID} style={{width: 40, marginLeft: 30, marginRight: 30}}/>

                <button onClick={handleAdd}>
                    Добавить
                </button >
            </div>
            <div>
                <ul className="list-group">
                    {advertisements.map((item, index) => {
                        return(
                            <li className="list-group-item d-flex justify-content-between align-items-center
                            ">
                                <div>
                                    {item.price}
                                </div>
                                <div>
                                    {item.name}
                                </div>
                                <div className="activityWhenClicked" onClick={()=>changeTruetoFalse(index)}>
                                    {item.active ? 'активное' : 'скрытое'}
                                </div>
                                <div>
                                    {item.id}
                                </div>
                                <button className="btn btn-outline-danger" onClick={()=>deleteForm(index)}>
                                    ❌
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </div>
    )
}

export default App;