tikTakBoom = {
    init(
        tasks,
        timerField,
        gameStatusField,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        textFieldAnswer3,
        textFieldAnswer4,
        textFieldAnswer5,
        startGamediv,
        endGamediv,
        playernum,
        gametime,
        playernumtext,
        playerinp,
        additionaltime,
        timetoplay
    ) {
        this.boomTimer = 30;// gametime.value;
        this.gameTime = gametime;
        this.countOfPlayers = playernum.value;
        this.unparsedTasks = undefined;
        this.playerNumtext = playernumtext;
        this.playerInp = playerinp;
        this.additionalTime = additionaltime;
        this.timeToPlay = timetoplay;
        this.tasks = undefined;
        this.players = undefined;
        this.currentPlayer = undefined;
        this.superQuestionType = -1;
    //    this.state = undefined;

        this.timerField = timerField;
        this.gameStatusField = gameStatusField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        this.textFieldAnswer3 = textFieldAnswer3;
        this.textFieldAnswer4 = textFieldAnswer4;
        this.textFieldAnswer5 = textFieldAnswer5;
        this.startGameDiv = startGamediv;
        this.endGameDiv = endGamediv;
        this.playerNum = playernum;

        this.needRightAnswers = 3;
        this.needBadAnswers = 3;

        this.playerTimer = undefined;
        // 0 - обычая игра, 1 - супер-игра
        this.gameType = 0;
        this.turnedOff = false;
    },

    //Чтение и проверка JSON
    readJSON() {
        try {
            //Попытка чтения файла
            this.tasks = JSON.parse(tasks);  
            //вопросов > 30
            if (this.tasks.length < 29) {
                throw new Error('Недостаточно вопросов!');
            }

            let i = 0;
            //Проверка файла на соответствие условиям           
            for (quest of this.tasks) {
                i++;
                //Проверка наличия всех папаметров объекта
                if (!quest.hasOwnProperty(`question`)) {
                    throw new Error(`Не хватает вопроса в вопросе №${i}`);
                }
                if (!quest.hasOwnProperty(`answer1`)) {
                    throw new Error(`Не хватает ответа 1 в вопросе №${i}`);
                }
                if (!quest.hasOwnProperty(`answer2`)) {
                    throw new Error(`Не хватает ответа 2 в вопросе №${i}`);
                }
                if (!quest.hasOwnProperty(`answer3`)) {
                    throw new Error(`Не хватает ответа 3 в вопросе №${i}`);
                }
                if (!quest.hasOwnProperty(`answer4`)) {
                    throw new Error(`Не хватает ответа 4 в вопросе №${i}`);
                }
                if (!quest.hasOwnProperty(`answer5`)) {
                    throw new Error(`Не хватает ответа 5 в вопросе №${i}`);
                }
                if (!quest.hasOwnProperty(`answer6`)) {
                    throw new Error(`Не хватает ответа 6 в вопросе №${i}`);
                }
                //Проверка наличия параеметров в ответах
                let qAnswer1 = quest.answer1;
                let qAnswer2 = quest.answer2;
                let qAnswer3 = quest.answer3;
                let qAnswer4 = quest.answer4;
                let qAnswer5 = quest.answer5;
                let qAnswer6 = quest.answer6;
                if (!qAnswer1.hasOwnProperty(`result`)) {
                    let qAnswer3 = quest.answer3;
                    let qAnswer4 = quest.answer4;
                    let qAnswer5 = quest.answer5;
                    let qAnswer6 = quest.answer6;
                }
                if (!qAnswer1.hasOwnProperty(`result`)) {
                    throw new Error(`Не хватает верности ответа в ответе №1 в вопросе №${i}`);
                }
                if (!qAnswer1.hasOwnProperty(`value`)) {
                    throw new Error(`Не хватает значения результата в ответе №1 в вопросе №${i}`);
                }
                if (!qAnswer2.hasOwnProperty(`result`)) {
                    throw new Error(`Не хватает верности ответа в ответе №2 в вопросе №${i}`);
                }
                if (!qAnswer2.hasOwnProperty(`value`)) {
                    throw new Error(`Не хватает значения результата в ответе №2 в вопросе №${i}`);
                }
                if (!qAnswer3.hasOwnProperty(`result`)) {
                    throw new Error(`Не хватает верности ответа в ответе №3 в вопросе №${i}`);
                }
                if (!qAnswer3.hasOwnProperty(`value`)) {
                    throw new Error(`Не хватает значения результата в ответе №3 в вопросе №${i}`);
                }
                if (!qAnswer4.hasOwnProperty(`result`)) {
                    throw new Error(`Не хватает верности ответа в ответе №4 в вопросе №${i}`);
                }
                if (!qAnswer4.hasOwnProperty(`value`)) {
                    throw new Error(`Не хватает значения результата в ответе №4 в вопросе №${i}`);
                }
                if (!qAnswer5.hasOwnProperty(`result`)) {
                    throw new Error(`Не хватает верности ответа в ответе №5 в вопросе №${i}`);
                }
                if (!qAnswer5.hasOwnProperty(`value`)) {
                    throw new Error(`Не хватает значения результата в ответе №5 в вопросе №${i}`);
                }
                if (!qAnswer6.hasOwnProperty(`result`)) {
                    throw new Error(`Не хватает верности ответа в ответе №6 в вопросе №${i}`);
                }
                if (!qAnswer6.hasOwnProperty(`value`)) {
                    throw new Error(`Не хватает значения результата в ответе №6 в вопросе №${i}`);
                }

                //В каждом вопросе есть текст
                if (quest.question.length === 0) { throw new Error(`Отсутствует тест вопроса в вопросе №${i}!`); }
                //во всех ответах заполнены данные
                if(typeof(qAnswer1.result) !== `boolean`){ throw new Error(`Верность ответа ответа №1 в вопросе №${i} не bool!`);}
                if(typeof(qAnswer2.result) !== `boolean`){ throw new Error(`Верность ответа ответа №2 в вопросе №${i} не bool!`);}
                if(typeof(qAnswer3.result) !== `boolean`){ throw new Error(`Верность ответа ответа №3 в вопросе №${i} не bool!`);}
                if(typeof(qAnswer4.result) !== `boolean`){ throw new Error(`Верность ответа ответа №4 в вопросе №${i} не bool!`);}
                if(typeof(qAnswer5.result) !== `boolean`){ throw new Error(`Верность ответа ответа №5 в вопросе №${i} не bool!`);}
                if(typeof(qAnswer6.result) !== `boolean`){ throw new Error(`Верность ответа ответа №6 в вопросе №${i} не bool!`);}
                if(qAnswer1.value.length===0){ throw new Error(`Отсутствует результат ответа №1 в вопросе №${i}!`);}                 
                if(qAnswer2.value.length===0){ throw new Error(`Отсутствует результат ответа №2 в вопросе №${i}!`);}
                if(qAnswer3.value.length===0){ throw new Error(`Отсутствует результат ответа №3 в вопросе №${i}!`);}
                if(qAnswer4.value.length===0){ throw new Error(`Отсутствует результат ответа №4 в вопросе №${i}!`);}
                if(qAnswer5.value.length===0){ throw new Error(`Отсутствует результат ответа №5 в вопросе №${i}!`);}
                if(qAnswer6.value.length===0){ throw new Error(`Отсутствует результат ответа №6 в вопросе №${i}!`);}
                //нет вопроса с двумя правильными и неправильными ответами
                if (qAnswer1.result === qAnswer2.result) { throw new Error(`Ответы совпадают в вопросе №${i}!`); }
                let qAnsw = [qAnswer1.result, qAnswer2.result, qAnswer3.result, qAnswer4.result, qAnswer5.result, qAnswer6.result];
                let trueAnsw = false;
                const err = () => { throw new Error(`Как минимум 2 верных ответа в вопросе №${i}!`) };

                for (let j = 0; j < qAnsw.length; j++) {
                    if (qAnsw[j]) {
                        trueAnsw ? err() : trueAnsw = true;
                    }
                }
                if (!trueAnsw) { throw new Error(`Нет верного ответа в вопросе №${i}!`) }
                //if(qAnswer1.result === qAnswer2.result) { throw new Error(`Ответы совпадают в вопросе №${i}!`);}
            }

            return true;
        } catch (e) {
            alert("Игру невозможно начать:" + e.message);
            return false;
        }
    },

    hideGameControls() {
        this.endGameDiv.style.display = "none";
        this.textFieldAnswer1.style.display = "none";
        this.textFieldAnswer2.style.display = "none";
        this.textFieldAnswer3.style.display = "none";
        this.textFieldAnswer4.style.display = "none";
        this.textFieldAnswer5.style.display = "none";
        //this.playerNum.style.display = "block";
        //this.additionalControls.style.display = "block";
        this.playerNumtext.style.display = "block";
        this.playerInp.style.display = "block";
        this.additionalTime.style.display = "block";
        this.timeToPlay.style.display = "block";
    },

    hideMenu() {
        document.getElementById('playerNumtext').style.display = "none";
        document.getElementById('playerTimeText').style.display = "none";
        document.getElementById('playerInpTime').style.display = "none";
        this.playerNum.style.display = "none";  
        this.startGameDiv.style.display = "none"; 
    },

    showGameControls() {
        this.endGameDiv.style.display = "block";
        this.textFieldAnswer1.style.display = "block";
        this.textFieldAnswer2.style.display = "block";
        this.textFieldAnswer3.style.display = "block";
        this.textFieldAnswer4.style.display = "block";
        this.textFieldAnswer5.style.display = "block";
        //this.playerNum.style.display = "none";  
        //this.additionalControls.style.display = "none";   
        //this.playerNum.style.display = "none";
        this.playerNumtext.style.display = "none";
        this.playerInp.style.display = "none";
        this.additionalTime.style.display = "none";
        this.timeToPlay.style.display = "none";
    },

    run() {
        if (this.readJSON()) {
            this.hideGameControls();   
            this.startGameDiv.addEventListener('click', startGame = () => this.startQueeze());
        }
        else {
            this.startGameDiv.style.display = "none";
        };
    },

    startQueeze(playerNumber=0) {
        console.log(`запустил startQueeze`);
        if (this.gameType===0)
        {
            this.boomTimer = parseInt(this.gameTime.value);
        }

        this.hideMenu();

        //инициализируем таймер времени игры
        this.boomTimer = parseInt(document.getElementById('timePlay').value);

        //создаём массив игроков, если его не было
        if(this.players===undefined){
            this.players=createPlayers(this.playerNum.value, this.boomTimer);
        }

        if (this.gameType===1){
            for (player of this.players){
                player.timer = this.boomTimer;
                player.errors = 0;
                player.score = 0;
            }
        }

        console.log(`игроки: ${JSON.stringify(this.players)}`);
        //this.rightAnswers = 0;
        this.currentPlayer = playerNumber;
        console.log(`играет: ${this.players[this.currentPlayer].name}`);
        this.startTimer();
    },

    //Время подготовки игрока
    startTimer() {
        console.log(`запустил startTimer`);
        let timeToPlay = 3;
        this.timerField.innerText = `3`;
        //исправь
        this.gameStatusField.innerText = `Ход ${this.players[this.currentPlayer].name} начнётся через`;
        let self = this;
        const startTimer = setInterval(function () { timeToPlay--; this.timerField.innerText = `${timeToPlay}`; }, 1000);
        setTimeout(function () {self.playerTimer = setInterval(function(){self.startPlayTimer(self.players[self.currentPlayer])},1000); clearInterval(startTimer); self.state = 1;  self.turnOn();}, 2000);
        this.startGameDiv.style.display = "none";
    },

    turnOn() {
        console.log(`запустил turnOn`);
        this.gameStatusField.innerText = `Игра идёт`;
        this.endGameDiv.addEventListener('click', endGame = () => this.finish(`stop`));
        this.gameStatusField.innerText += `Вопрос ${this.players[this.currentPlayer].name}`;
        const taskNumber = randomIntNumber(this.tasks.length - 1);
        const superQuestion = randomIntNumber(this.tasks.length - 1);
        this.turnedOff = false;

        if (taskNumber === superQuestion) {
            superQuestionType = randomIntNumber();

            if (superQuestionType === questionOneMillion) {
                this.gameStatusField.innerText +=  ' Это вопрос на миллион';
            }
            else {
                this.gameStatusField.innerText +=  ' Это вопрос восьмерка';
            }
        }
        this.printQuestion(this.tasks[taskNumber]);
        this.tasks.splice(taskNumber, 1);

        //   this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
    },

    turnOff(value) {
        this.textFieldAnswer1.removeEventListener('click', Boolean);
        this.textFieldAnswer2.removeEventListener('click', Boolean);
        this.textFieldAnswer3.removeEventListener('click', Boolean);
        this.textFieldAnswer4.removeEventListener('click', Boolean);
        this.textFieldAnswer5.removeEventListener('click', Boolean);

        this.hideGameControls();

        if (!this.turnedOff)
        {
            this.turnedOff = true;
            if(!(this.players===undefined))
            {
                console.log(`запустил turnoff`);
                //перерасчёт очков
                if (value) {
                    this.gameStatusField.innerText = 'Верно!';          
                    // user answered correct on OneMillionQuestion we should finish game (result-"won")
                    if (this.superQuestionType === questionOneMillion) {
                        //this.rightAnswers = this.needRightAnswers;
                        this.players[this.currentPlayer].score = this.needRightAnswers;
                    }
                    //this.rightAnswers += 1; */
                    this.players[this.currentPlayer].score++;
                    if (this.gameType===0) {
                        this.players[this.currentPlayer].addTime(+5);
                    }
                } else {
                    this.gameStatusField.innerText = 'Неверно!';
                    this.players[this.currentPlayer].errors++;

                    if (this.gameType===0) {
                        this.players[this.currentPlayer].addTime(-5);                   
                    }
                }

                console.log(`очков=${this.players[this.currentPlayer].score}`);
                console.log(`ошибок=${this.players[this.currentPlayer].errors}`);
                
                //если недостаточно очков и ошибок и вопрос был не восьмерка - продолжаем игру (если ещё остались вопросы)
                if (this.players[this.currentPlayer].score < this.needRightAnswers && this.players[this.currentPlayer].errors < this.needBadAnswers && this.superQuestionType != questionEight)
                {
                    if (this.tasks.length === 0)
                    {
                        if (this.players[this.currentPlayer].score > 0) {
                            this.finish('won');                           
                        }
                        else {this.finish('lose');}
                    } 
                    else 
                    {
                        this.turnOn();
                    }
                } 
                //если превысили количество ошибок
                else if(this.players[this.currentPlayer].errors >= this.needBadAnswers){
                    this.finish('lose');    
                }
                else {
                    this.finish('won');
                }
            }
        }
    },

    printQuestion(task) {
        console.log(`запустил printQuestion`);
        this.textFieldQuestion.innerText = task.question;

        const map = getAnswersMap(task);
        const answers = getAnswers(task);
        const answersCount = answers.length;

        console.log(map);
        this.showGameControls();

        this.textFieldAnswer1.innerText = answers[0];
        this.textFieldAnswer2.innerText = answers[1];

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff(map.get(answers[0])),{once : true});
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff(map.get(answers[1])),{once : true});

        switch (answersCount) {
            case 2:
                this.textFieldAnswer3.style.display = "none";
                this.textFieldAnswer4.style.display = "none";
                this.textFieldAnswer5.style.display = "none";
                break;
            case 3:
                this.textFieldAnswer3.innerText = answers[2];
                this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff(map.get(answers[2])),{once : true});
                this.textFieldAnswer3.style.display = "block";
                this.textFieldAnswer4.style.display = "none";
                this.textFieldAnswer5.style.display = "none";
                break
            case 4:
                this.textFieldAnswer3.innerText = answers[2];
                this.textFieldAnswer4.innerText = answers[3];
                this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff(map.get(answers[2])),{once : true});
                this.textFieldAnswer4.addEventListener('click', answer4 = () => this.turnOff(map.get(answers[3])),{once : true});
                this.textFieldAnswer3.style.display = "block";
                this.textFieldAnswer4.style.display = "block";
                this.textFieldAnswer5.style.display = "none";
                break;
            case 5:
                this.textFieldAnswer3.innerText = answers[2];
                this.textFieldAnswer4.innerText = answers[3];
                this.textFieldAnswer5.innerText = answers[4];
                this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff(map.get(answers[2])),{once : true});
                this.textFieldAnswer4.addEventListener('click', answer4 = () => this.turnOff(map.get(answers[3])),{once : true});
                this.textFieldAnswer5.addEventListener('click', answer5 = () => this.turnOff(map.get(answers[4])),{once : true});
                this.textFieldAnswer3.style.display = "block";
                this.textFieldAnswer4.style.display = "block";
                this.textFieldAnswer5.style.display = "block";
                break;
            default:
                break;
        }
        this.currentTask = task;

    },

    finish(result = 'lose') {
        console.log(`запустил finish`);
        clearInterval(this.playerTimer);
        this.playerTimer = undefined;

        if (result == 'stop'){
            this.gameStatusField.innerText = `Игра окончена`;
            this.players=undefined;
            this.hideGameControls();      
            this.startGameDiv.style.display = "block";          
        } else {
            if (this.tasks.length === 0){
                if (result === 'lose') {
                    let winner = undefined;
                    for (player in players){
                        if (player.score > 0) {winner=player;}
                    }
                    if (winner === undefined){
                        this.gameStatusField.innerText = `Все проиграли!`;  
                    } else {
                        this.gameStatusField.innerText = `${player.name} выиграл!`;    
                    }
                    this.players=undefined;
                    this.boomTimer = parseInt(this.gameTime.value);
                    this.gameType = 0;
                    this.needBadAnswers = 3;
                    this.needRightAnswers = 3;
                    this.hideGameControls();
                    this.startGameDiv.style.display = "block";
                }
                if (result === 'won') {
                    this.gameStatusField.innerText = `${this.players[this.currentPlayer].name} выиграл!`;          
                    this.players=undefined;
                    this.boomTimer = parseInt(this.gameTime.value);
                    this.gameType = 0;
                    this.needBadAnswers = 3;
                    this.needRightAnswers = 3;
                    this.hideGameControls();
                    this.startGameDiv.style.display = "block";
                }               
            } 
            else
            {
                if (result === 'lose') {
                    this.players.length>1 ? this.gameStatusField.innerText = `${this.players[this.currentPlayer].name} выбыл из игры`: this.gameStatusField.innerText = `${this.players[this.currentPlayer].name} проиграл!`;
                    this.players[this.currentPlayer].setState(0);
                }
                if (result === 'won') {
                    this.players.length>1 ? this.gameStatusField.innerText = `${this.players[this.currentPlayer].name} ещё в игре`: this.gameStatusField.innerText = `${this.players[this.currentPlayer].name} выиграл!`;          
                    this.players[this.currentPlayer].setState(1);
                }    
    
                console.log(`очки ${this.players[this.currentPlayer].name}:правильно ${this.players[this.currentPlayer].score}:ошибок:${this.players[this.currentPlayer].errors}`)
        
                this.textFieldQuestion.innerText = ``;
                this.textFieldAnswer1.innerText = ``;
                this.textFieldAnswer2.innerText = ``;
                this.textFieldAnswer3.innerText = ``;
                this.textFieldAnswer4.innerText = ``;
                this.textFieldAnswer5.innerText = ``;
        
                //Если не все ещё сыграли
                if (this.currentPlayer<this.players.length-1) 
                {
                    this.currentPlayer++;
                    setTimeout(
                        () => {
                            this.gameStatusField.innerText = `Переход хода к: ${this.players[this.currentPlayer].name}`;
                            this.startQueeze(this.currentPlayer);
                        },
                        3000,
                    );          
                }
                //Если игроков несколько, то смотрим 
                else if(this.players.length > 1)
                { 
                    let winners = [];
                    for (player of this.players)
                    {
                        if (player.state===1)
                        {
                            winners.push(player);
                        }
                    }
                    //выбор с окончанием игры
                    if (winners.length > 1)
                    {
                                console.log("Начало супер-игры!");
                                this.gameStatusField.innerText = `Начало супер-игры!`;
                                console.log(winners);
                                this.players=winners;
                                this.boomTimer = 5;
                                this.gameType = 1;
                                this.needBadAnswers = 1;
                                this.needRightAnswers = 1;
                                this.hideGameControls();
                                this.startQueeze(0);               
                    } else if (winners.length === 1)
                    {
                        this.gameStatusField.innerText = `Абсолютный победитель: ${winners[0].name}`;
                        this.players=undefined;
                        this.boomTimer = parseInt(this.gameTime.value);
                        this.gameType = 0;
                        this.hideGameControls();    
                        this.startGameDiv.style.display = "block";           
                    } else 
                    {
                        this.gameStatusField.innerText = `Проиграли все!`;
                        this.players=undefined;
                        this.boomTimer = parseInt(this.gameTime.value);
                        this.gameType = 0;
                        this.needBadAnswers = 3;
                        this.needRightAnswers = 3;
                        this.hideGameControls();
                        this.startGameDiv.style.display = "block";
                    }
                }   
                //Если игрок один, то конец игры
                else
                {
                   this.players=undefined;
                   this.hideGameControls();
                   this.showMenu();  
                }                
            }
        }
        //this.state = 0;
    },
    //таймер для отсчёта времени игрока
    startPlayTimer(currentPlayer){
        if(currentPlayer.timer === 0) {
            clearInterval(this.playerTimer);
            this.finish('lose');
          } else {
            this.players[this.currentPlayer].addTime(-1);
            let sec = this.players[this.currentPlayer].timer % 60;
            let min = (parseInt(this.players[this.currentPlayer].timer)  - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;
          }  
    }
};


 /*   timer() {
        if (this.players[this.currentPlayer] === undefined){}
        else if (this.players[this.currentPlayer].state===2)
        {
            this.players[this.currentPlayer].addTime(-1);
            let sec = this.players[this.currentPlayer].timer % 60;
            let min = (parseInt(this.players[this.currentPlayer].timer)  - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;

            if (this.players[this.currentPlayer].timer  > 0) {
                setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose');
            }    
        }
    },
}; */
