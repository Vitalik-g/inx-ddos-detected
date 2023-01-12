# inx-ddos-detected
## Встановлення 
`npm i` - Встановлення node модулів

[`https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=uk`](#tampermonkey) - Встановлення Tampermonkey 
> В каталозі tampermonkey знаходяться наглядачі для збору інформації
> Їх необхідно встановити в розширення браузеру (Встановлювати окремо)

## Налаштуваняя 
> В assets/index.js:3 Змінна loadMax вказує мінімальне значення CPU для показу серверу як проблемний

> В modules/ssh.js:9 Необхідно вказати шлях до свого ssh клюка для підключення (Шлях вказувати повний)