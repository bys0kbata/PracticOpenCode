import React, {useEffect, useState} from "react";
import "./Main.scss"
import {useNavigate} from "react-router-dom";

export default function Main() {
    const [allref,setAR] = useState();
    const nav = useNavigate();
    const [viserror, setViserror] = useState(false);
    const [selectedRow, setSelectedRow] = useState<number>(null);
    // Пример данных
    const data = [
        { id: 1, name: 'Иван Иванов', age: 30 },
        { id: 2, name: 'Мария Петрова', age: 25 },
        { id: 3, name: 'Алексей Смирнов', age: 35 },
    ];

    // Функция для обработки клика на строку
    const handleRowClick = ( rowId: number ) => {
        setSelectedRow(rowId);
    };
    const handleEditClick = (e) =>{
        e.preventDefault();
        if(selectedRow){
        nav(`/ref?idref=${selectedRow}`);}
        else {
            setViserror(true);
        }
    }
    const handleDeleteClick = (e) =>{
        e.preventDefault();
        if(selectedRow){
            console.log(selectedRow);
        }
        else {
            setViserror(true);
        }
    }
    const handleCreateClick = (e) =>{
        e.preventDefault();
        nav(`/ref`);}
    const ErrorMessage = ()=>{ return(<p className="error" >Выберите справку, которую нужно отредактировать </p>)}
    return(
        <>
            <div>
                <h1>Служебные записки </h1>
            </div>
            <div className = "dividing-line" />
            <div className="ButMenu">
                <button onClick={
                    (e)=>{
                        handleCreateClick(e);
                    }} > Создать</button>
                <button
                    onClick={
                    (e)=>{
                    handleEditClick(e);
                }}
                > Редактировать</button>
                <button
                    onClick={
                        (e)=>{
                            handleDeleteClick(e);
                        }}> Удалить</button>
            </div>
            { viserror && <ErrorMessage />}
            <table>
                <thead>
                <tr>
                    <th> Номер</th>
                    <th> Дата создания</th>
                    <th> Статус</th>
                    <th> Исполнитель</th>
                    <th> Подписант</th>
                    <th> Согласующий</th>
                    <th> Регистратор</th>
                    <th> Рег. дата</th>
                    <th> Рег. номер</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr
                        key={row.id}
                        onClick={() => handleRowClick(row.id)}
                        style={{ backgroundColor: selectedRow === row.id ? '#D6D6FF' : 'transparent' }}
                    >
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}