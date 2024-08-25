import { useStore } from "effector-react";
import { $user } from "../../store/userStore";

export default function Ref() {

   const user = useStore($user)
    const StatusElement = ()=>{
        return(
            <div className="StatusElement">
                Создана
            </div>
        )
    }
console.log(user)
 const ButtonMenu = ()=>{
    const Cancel = () =>{
        return(<button>Отклонить</button>)
    }
    switch(user.role){
        case "Согласовант":{
            return(<div>
                <Cancel></Cancel>
                <button>Cогласовать</button>
            </div>)
        }
        case "Подписант":{
            return(<div>
                <Cancel></Cancel>
                <button> Подписать</button>
            </div>)
        }
        case "СРегистратор":{
            return(<div>
                <Cancel></Cancel>
                <button> Зарегистрировать</button>
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
            <div>
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
            <label htmlFor="DataCreateRef">Краткое содержание</label>
            <input/>
            <div>
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
            <div>
                <ButtonMenu />
                <button> Печать</button>
                <button> Закрыть</button>
                <button> Сохранить</button>
            </div>
        </div>
    )
}