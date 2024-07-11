# Reference

Reference - это web-приложение для отслеживания статуса и  взаимодествий с справоками.
##Используемые технлогий

<table>
    <thead>
        <tr>
            <th columnspan=2 >Используемые технологий</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4 align="center">Frontend</td>
            <td  align="center">React.ts</td>
        </tr>
        <tr> <td> Typescript</td></tr>
        <tr><td> Axios</td></tr>
        <tr> <td>Effector</td></tr>
        <tr>
            <td rowspan=4 align="center">Backend</td>
            <td> Nodejs</td>
        </tr>
        <tr> <td>Javascript</td></tr> 
        <tr> <td>Nodemon</td></tr>
        <tr> <td>PG</td></tr>
        <tr>
            <td> DataBase</td>
            <td align="center">Postgres</td>
        </tr>
    </tbody>
</table>

  Frontend был реализован с помощью фреймворка React на языке программирования Typescript, а в свою очередь backend - Nodejs. В качестве базы данных взял популярную СУБД Рostgresql.

## Полный список библиотек
| Список библиотек для реализаций Frontend: | Список библиотек для реализаций Backend:|
|-------------------------------------------|-----------------------------------------|
|       "axios": "^1.7.2"                   |                                         |
|       "docxtemplater": "^3.47.4"          |                                         |
|       "effector": "^23.2.2"               |                                         |
|       "effector-react": "^23.2.1"         |                                         |
|       "react": "^18.2.0",                 |                                         |
|       "react-dom": "^18.2.0"              |                                         |
|       "react-router-dom": "^6.24.0"       |                                         |
|       "sass": "^1.77.6"                   |                                         |
|       "scss": "^0.2.4"                    |                                         |

## Запуск проекта
  1) Через docker-compose:
  ```bash
    docker-compose run
 ```   
  2) Самому в ручную через командную консоль:
  ```bash
    cd ./Front/reference/
    npm i
    npm run dev
    cd ./Server
    npm i
    nodemone app.js
 ```

Схема проектирования Базы данных:




