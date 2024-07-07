import {useEffect, useState} from "react";

export default function Main() {
    const [allref,setAR] = useState();

    useEffect(()=>{


    },[])
    return(
        <>
            <div>
                <button> Создать </button>
                <button> Редактировать </button>
                <button> Удалить </button>
            </div>
            <table>
                <tr>
                    <th> Номер</th>
                    <th> Дата создания</th>
                    <th> Статус </th>
                    <th> Исполнитель</th>
                    <th> Подписант</th>
                    <th> Согласующий</th>
                    <th> Регистратор</th>
                    <th> Рег. дата</th>
                    <th> Рег. номер</th>
                </tr>
                <tr>
                </tr>
            </table>
        </>
    )
}