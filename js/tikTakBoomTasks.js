const tasks = `
    [
        {
            "question": "2 * 2 = ",
            "answer1": { "result": false, "value": "3" },
            "answer2": { "result": true, "value": "4" },
            "answer3": { "result": false, "value": "2" },
            "answer4": { "result": false, "value": "5" },
            "answer5": { "result": false, "value": "7" },
            "answer6": { "result": false, "value": "9" }
        },
        {
            "question": "Как зовут крокодила, лучшего друга Чебурашки?",
            "answer1": { "result": false, "value": "Данди" },
            "answer2": { "result": true, "value": "Гена" },
            "answer3": { "result": false, "value": "Чип" },
            "answer4": { "result": false, "value": "Дейл" },
            "answer5": { "result": false, "value": "Скрудж" },
            "answer6": { "result": false, "value": "Тотошка" }
        },
        {
            "question": "5 + 5",
            "answer1": { "result": false, "value": "1" },
            "answer2": { "result": true, "value": "10" },
            "answer3": { "result": false, "value": "12" },
            "answer4": { "result": false, "value": "9" },
            "answer5": { "result": false, "value": "13" },
            "answer6": { "result": false, "value": "7" }
        },
        {
            "question": "Столица Италии?",
            "answer1": { "result": false, "value": "Ватикан" },
            "answer2": { "result": true, "value": "Рим" },
            "answer3": { "result": false, "value": "Рига" },
            "answer4": { "result": false, "value": "Копенгаген" },
            "answer5": { "result": false, "value": "Прага" },
            "answer6": { "result": false, "value": "Стамбул" }
        },
        {
            "question": "Самая большая страна в мире?",
            "answer1": { "result": false, "value": "США" },
            "answer2": { "result": true, "value": "Россия" },
            "answer3": { "result": false, "value": "Китай" },
            "answer4": { "result": false, "value": "Монголия" },
            "answer5": { "result": false, "value": "Канада" },
            "answer6": { "result": false, "value": "Япония" }
        },
        {
            "question": "Самая маленькая страна в мире?",
            "answer1": { "result": false, "value": "Монако" },
            "answer2": { "result": true, "value": "Ватикан" },
            "answer3": { "result": false, "value": "Италия" },
            "answer4": { "result": false, "value": "Греция" },
            "answer5": { "result": false, "value": "Латвия" },
            "answer6": { "result": false, "value": "Польша" }
        },              
        {
            "question": "Луанда столица?",
            "answer1": { "result": false, "value":  "ЮАР"},
            "answer2": { "result": true, "value": "Анголы" },
            "answer3": { "result": false, "value":  "Мексики"},
            "answer4": { "result": false, "value": "Мьянмы" },
            "answer5": { "result": false, "value":  "Австралии"},
            "answer6": { "result": false, "value": "Литвы" }
        },     
        {
            "question": "Глубина озера Байкал, метров?",
            "answer1": { "result": false, "value":  "2148"},
            "answer2": { "result": true, "value":  "1642"},
            "answer3": { "result": false, "value":  "2599"},
            "answer4": { "result": false, "value":  "3000"},
            "answer5": { "result": false, "value":  "2900"},
            "answer6": { "result": false, "value":  "1800"}
        },          
        {
            "question": "Глубина Марианской впадины, метров?",
            "answer1": { "result": false, "value": "5000"},
            "answer2": { "result": true, "value": "11000"},
            "answer3": { "result": false, "value": "15000"},
            "answer4": { "result": false, "value": "22000"},
            "answer5": { "result": false, "value": "3000"},
            "answer6": { "result": false, "value": "15800"}
        },   
        {
            "question": "Это выражение приведёт к ошибке: console.log(«Нормальные герои всегда идут в обход»)",
            "answer1": { "result": false, "value":  "Нет"},
            "answer2": { "result": true, "value": "Да" },
            "answer3": { "result": false, "value":  "Вопрос некорректный"},
            "answer4": { "result": false, "value": "Не знаю" },
            "answer5": { "result": false, "value":  "В зависимости от используемого стандарта"},
            "answer6": { "result": false, "value": "Зависит от браузера" }
        },
        {
            "question": "В каком случае в switch выполнится код в default?",
            "answer1": { "result": false, "value": "При вложении else if" },
            "answer2": { "result": true, "value": "Если не сработал ни один case" },
            "answer3": { "result": false, "value": "Если сработало более одного case" },
            "answer4": { "result": false, "value": "Если условие некорретное" },
            "answer5": { "result": false, "value": "Если в коде ошибка" },
            "answer6": { "result": false, "value": "Никогда не выполнится" }
        },  
        {
            "question": "Что такое десериализация?",
            "answer1": { "result": false, "value": "Преобразование объекта в строку JSON для передачи и использования другими языками программирования" },
            "answer2": { "result": true, "value":  "Преобразование строки JSON в объект"},
            "answer3": { "result": false, "value": "Преобразование целого числа к числу с плавающей точкой" },
            "answer4": { "result": false, "value":  "Преобразование объекта в число"},
            "answer5": { "result": false, "value": "Результат работы хеш-функции" },
            "answer6": { "result": false, "value":  "Передозировка сериалами"}
        }, 
        {
            "question": "В каком иде спорта используется бита и мяч?",
            "answer1": { "result": false, "value": "Гольф"},
            "answer2": { "result": true, "value": "Крикет"},
            "answer3": { "result": false, "value": "Американский футбол"},
            "answer4": { "result": false, "value": "Гандбол"},
            "answer5": { "result": false, "value": "Лапта"},
            "answer6": { "result": false, "value": "Воллейбол"}
        },             
        {
            "question": "Кто съел колобка?",
            "answer1": { "result": false, "value": "Никто"},
            "answer2": { "result": true, "value": "Лиса"},
            "answer3": { "result": false, "value": "Заяц"},
            "answer4": { "result": false, "value": "Волк"},
            "answer5": { "result": false, "value": "Медведь"},
            "answer6": { "result": false, "value": "Бабушка"}
        },    
        {
            "question": "К кому шла красная шапочка?",
            "answer1": { "result": false, "value": "К дедушке"},
            "answer2": { "result": true, "value": "К бабушке"},
            "answer3": { "result": false, "value": "К волку"},
            "answer4": { "result": false, "value": "К охотникам"},
            "answer5": { "result": false, "value": "К подружке"},
            "answer6": { "result": false, "value": "К маме"}
        },    
        {
            "question": "Какого веса может достигать слон в кг?",
            "answer1": { "result": false, "value": "12000"},
            "answer2": { "result": true, "value": "6000"},
            "answer3": { "result": false, "value": "15000"},
            "answer4": { "result": false, "value": "60000"},
            "answer5": { "result": false, "value": "120000"},
            "answer6": { "result": false, "value": "13000"}
        },    
        {
            "question": "Самая маленькая порода собак?",
            "answer1": { "result": false, "value": "Шпитц"},
            "answer2": { "result": true, "value": "Чихуахуа"},
            "answer3": { "result": false, "value": "Московская сторожевая"},
            "answer4": { "result": false, "value": "Бульдог"},
            "answer5": { "result": false, "value": "Кане-корсо"},
            "answer6": { "result": false, "value": "Мопс"}
        },    
        {
            "question": "Сколько зубов у собаки?",
            "answer1": { "result": false, "value": "20"},
            "answer2": { "result": true, "value": "42"},
            "answer3": { "result": false, "value": "30"},
            "answer4": { "result": false, "value": "35"},
            "answer5": { "result": false, "value": "44"},
            "answer6": { "result": false, "value": "49"}
        },    
        {
            "question": "Сколько зубов у кошки?",
            "answer1": { "result": false, "value": "12"},
            "answer2": { "result": true, "value": "30"},
            "answer3": { "result": false, "value": "42"},
            "answer4": { "result": false, "value": "50"},
            "answer5": { "result": false, "value": "24"},
            "answer6": { "result": false, "value": "15"}
        },    
        {
            "question": "Сколько пальцев у кошки?",
            "answer1": { "result": false, "value": "12"},
            "answer2": { "result": true, "value": "18"},
            "answer3": { "result": false, "value": "20"},
            "answer4": { "result": false, "value": "25"},
            "answer5": { "result": false, "value": "27"},
            "answer6": { "result": false, "value": "29"}
        },    
        {
            "question": "Сколько пальцев у волнистого попугая?",
            "answer1": { "result": false, "value": "10"},
            "answer2": { "result": true, "value": "4"},
            "answer3": { "result": false, "value": "15"},
            "answer4": { "result": false, "value": "8"},
            "answer5": { "result": false, "value": "3"},
            "answer6": { "result": false, "value": "15"}
        },    
        {
            "question": "Население Москвы, миллионов?",
            "answer1": { "result": false, "value": "21"},
            "answer2": { "result": true, "value": "12"},
            "answer3": { "result": false, "value": "16"},
            "answer4": { "result": false, "value": "22"},
            "answer5": { "result": false, "value": "25"},
            "answer6": { "result": false, "value": "19"}
        },    
        {
            "question": "Население Краснодара, тыс.?",
            "answer1": { "result": false, "value": "450"},
            "answer2": { "result": true, "value": "774"},
            "answer3": { "result": false, "value": "500"},
            "answer4": { "result": false, "value": "900"},
            "answer5": { "result": false, "value": "580"},
            "answer6": { "result": false, "value": "200"}
        },    
        {
            "question": "Зимний олимпийский вид спорта, представляющий собой спуск по ледяному жёлобу на двухполосных санях на укрепленной раме, победитель которого определяется по сумме двух или четырёх заездов?",
            "answer1": { "result": false, "value": "Кёрлинг"},
            "answer2": { "result": true, "value": "Скелетон"},
            "answer3": { "result": false, "value": "Бобслей"},
            "answer4": { "result": false, "value": "Гонки"},
            "answer5": { "result": false, "value": "Крокет"},
            "answer6": { "result": false, "value": "Гандбол"}
        },    
        {
            "question": "Сколько человек в футбольной команде?",
            "answer1": { "result": false, "value": "13"},
            "answer2": { "result": true, "value": "11"},
            "answer3": { "result": false, "value": "15"},
            "answer4": { "result": false, "value": "9"},
            "answer5": { "result": false, "value": "18"},
            "answer6": { "result": false, "value": "7"}
        },    
        {
            "question": "Сколько человек в хоккейной команде?",
            "answer1": { "result": false, "value": "8"},
            "answer2": { "result": true, "value": "6"},
            "answer3": { "result": false, "value": "9"},
            "answer4": { "result": false, "value": "10"},
            "answer5": { "result": false, "value": "11"},
            "answer6": { "result": false, "value": "12"}
        },    
        {
            "question": "Сколько игроков в комнаде по кёрлингу?",
            "answer1": { "result": false, "value": "5"},
            "answer2": { "result": true, "value": "4"},
            "answer3": { "result": false, "value": "6"},
            "answer4": { "result": false, "value": "7"},
            "answer5": { "result": false, "value": "8"},
            "answer6": { "result": false, "value": "8"}
        },    
        {
            "question": "Что такое alert??",
            "answer1": { "result": false, "value": "Функция, выводящая ошибки в консоль"},
            "answer2": { "result": true, "value": "Функция, выводящая всплывающее окно пользователю"},
            "answer3": { "result": false, "value": "Функция, генерирующая случайное число"},
            "answer4": { "result": false, "value": "Функция, выводящая предупреждение о выключении компьютера"},
            "answer5": { "result": false, "value": "Функция, генерирующая пароль"},
            "answer6": { "result": false, "value": "Функция, верифицирующая данные пользователя"}
        },    
        {
            "question": "Как вывести системное окно с полем ввода значения?",
            "answer1": { "result": false, "value": "confirm()"},
            "answer2": { "result": true, "value": "prompt()"},
            "answer3": { "result": false, "value": "alert()"},
            "answer4": { "result": false, "value": "input()"},
            "answer5": { "result": false, "value": "slice()"},
            "answer6": { "result": false, "value": "push()"}
            
        },    
        {
            "question": "Что такое событие?",
            "answer1": { "result": false, "value": "Вывод ошибки в консоль"},
            "answer2": { "result": true, "value": "Способ взаимодействия между пользователем и сайтом"},
            "answer3": { "result": false, "value": "Исключение в коде"},
            "answer4": { "result": false, "value": "Процесс отладки"},
            "answer5": { "result": false, "value": "Окончание работы программы"},
            "answer6": { "result": false, "value": "Начало работы программы"}
        }   
    ]
`;
