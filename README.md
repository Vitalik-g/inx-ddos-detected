# inx-ddos-detected
## Встановлення 
`npm i` - Встановлення node модулів

*[tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=uk)* - Встановлення Tampermonkey 
> В каталозі tampermonkey знаходяться наглядачі для збору інформації
> Їх необхідно встановити в розширення браузеру (Встановлювати окремо)

## Налаштуваняя 
> В assets/index.js:3 Змінна loadMax вказує мінімальне значення CPU для показу серверу як проблемний

> В modules/ssh.js:9 Необхідно вказати шлях до свого ssh клюка для підключення (Шлях вказувати повний)

## Запуск
`node server.js` - Запуск веб сервера (консоль не можна закривати)

*[Web](https://localhost:1325)* - Доступ до веб морди (Відкриється сам в разі необхідності)