import { useStore } from "effector-react";
import { $user } from "../../store/userStore";
import "./Ref.scss"
import { useNavigate } from "react-router-dom";

export default function Ref() {
    const nav = useNavigate();
    const user = useStore($user)
    const StatusElement = ()=>{
        return(
            <div className="StatusGray">
                Создана
            </div>
        )
    }
    console.log(user)
    const ButtonMenu = ()=>{
    const Cancel = () =>{
        return(<button className="no">Отклонить</button>)
    }
    switch(user.role){
        case "Согласовант":{
            return(<div className="ButtonMenu">
                <Cancel></Cancel>
                <button className="yes">Cогласовать</button>
            </div>)
        }
        case "Подписант":{
            return(<div className="ButtonMenu">
                <Cancel></Cancel>
                <button className="yes"> Подписать</button>
            </div>)
        }
        case "Регистратор":{
            return(<div className="ButtonMenu">
                <Cancel></Cancel>
                <button className="yes"> Зарегистрировать</button>
            </div>)
        }
    }

 }

    return(
        <div className="ref">
            <div>
                <h1>Служебная записка №</h1>
                <StatusElement/>
            </div>
            <div className="dividing-line"/>
            <div className="Box">
                <div className="Container">
                    <label htmlFor="numberRef">Номер</label>
                    <input name="DataCreateRef" disabled></input>
                </div>
                <div className="Container">
                    <label htmlFor="DataCreateRef">Дата создания</label>
                    <input name="numberRef" disabled></input>
                </div>
                <div className="Container">
                    <label htmlFor="DataCreateRef">Рег. номер</label>
                    <input name="numberRef" disabled></input>
                </div>
                <div className="Container">
                    <label htmlFor="DataCreateRef">Рег. дата</label>
                    <input name="numberRef" disabled></input>
                </div>
            </div>
            <div className="Container">
            <label htmlFor="DataCreateRef">Краткое содержание</label>
            <input/>
            </div>
            <div className="Box">
                <div className="Container">
                    <label htmlFor="numberRef">Кому</label>
                    <input name="DataCreateRef" disabled></input>
                </div>
                <div className="Container">
                    <label htmlFor="DataCreateRef">Исполнитель</label>
                    <input name="numberRef" disabled></input>
                </div>
                <div className="Container">
                    <label htmlFor="DataCreateRef">Согласующий</label>
                    <input name="numberRef" disabled></input>
                </div>
                <div className="Container">
                    <label htmlFor="DataCreateRef">Подписант</label>
                    <input name="numberRef" disabled></input>
                </div>
                <div className="Container">
                    <label htmlFor="DataCreateRef">Регистратор</label>
                    <input name="numberRef" disabled></input>
                </div>
            </div>
            <div className="Container">
                    <label htmlFor="DataCreateRef">Описание</label>
                    <textarea name="numberRef" disabled></textarea>
            </div>
            <div className="Container">
                    <label htmlFor="DataCreateRef">Комментарий</label>
                    <input name="numberRef" disabled></input>
            </div>
            <div className="dividing-line"/>
            <div className="BodyBottom">
                <ButtonMenu />
                <button className="Center"> Печать</button>
                <div className="Left">
                    <button onClick={(e)=>{e.preventDefault(); nav("/main")}}> Закрыть</button>
                    <button> Сохранить</button>
                </div>
            </div>
        </div>
    )
}