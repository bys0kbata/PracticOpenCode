import React from "react";

export default function Ref() {


    const StatusElement = ()=>{
        return(
            <div className="StatusElement">
                Создана
            </div>
        )
    }

 const onButtonClick = ()=>{

 }

    return(
        <div className="ref">
            <div>
                <h1>Служебная записка №</h1>
                <StatusElement/>
            </div>
            <div className="dividing-line"/>
            <div>
                <div className="Container">
                    <label htmlFor="numberRef">Номер</label>
                    <input name="DataCreateRef" disabled></input>
                </div>
                <div className="Container">
                    <label htmlFor="DataCreateRef">Дата создания</label>
                    <input name="numberRef" disabled></input>
                </div>
            </div>
            <input/>
            <div>

            </div>
            <textarea/>
            <input/>
            <div>
                <button> Печать</button>
            </div>
        </div>
    )
}