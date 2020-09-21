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
        playernum
    ) {
        this.boomTimer = 30;
        this.countOfPlayers = playernum.value;
        this.unparsedTasks = undefined;
        this.tasks = undefined;
        this.players = undefined;
        this.currentPlayer = undefined;
        this.superQuestionType = -1;
        this.state = undefined;

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

        this.needRightAnswers = 1;
        this.needBadAnswers = 1;
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
        this.playerNum.style.display = "block";
        this.startGameDiv.style.display = "block";
    },

    showGameControls() {
        this.endGameDiv.style.display = "block";
        this.textFieldAnswer1.style.display = "block";
        this.textFieldAnswer2.style.display = "block";
        this.textFieldAnswer3.style.display = "block";
        this.textFieldAnswer4.style.display = "block";
        this.textFieldAnswer5.style.display = "block";
        //    this.playerNum.style.display = "none";  
        //this.startGameDiv.style.display = "none";   
    },

    run() {
        if (this.readJSON()) {
            this.hideGameControls();   
            this.startGameDiv.addEventListener('click', startGame = () => this.startQueeze());
        }
        else {
            this.startGameDiv.style.display = "none";
            this.playerNum.style.display = "none";
        };
    },

    startQueeze(playerNumber=0) {
        console.log(`запустил startQueeze`);
        //создаём массив игроков, если его не было
        if(this.players===undefined){
            this.players=createPlayers(this.playerNum.value, this.boomTimer);
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
        setTimeout(function () {clearInterval(startTimer); self.state = 1; self.timer(); self.turnOn();}, 3000);
        this.startGameDiv.style.display = "none";
        this.playerNum.style.display = "none";
    },

    turnOn() {
        console.log(`запустил turnOn`);
        this.gameStatusField.innerText = `Игра идёт`;
        this.showGameControls();
        this.endGameDiv.addEventListener('click', endGame = () => this.finish(`lose`));

        this.gameStatusField.innerText += ` Вопрос  ${this.players[this.currentPlayer].name}`;

        const taskNumber = randomIntNumber(this.tasks.length - 1);

        const superQuestion = randomIntNumber(this.tasks.length - 1);

  /*      if (taskNumber === superQuestion)
        {
            superQuestionType = randomIntNumber();

           if (superQuestionType === questionOneMillion) {
                this.gameStatusField.innerText +=  ' Это вопрос на миллион'
            }
            else {
                this.gameStatusField.innerText +=  ' Это вопрос восьмерка'
            }
        } */

        this.printQuestion(this.tasks[taskNumber]);
        this.tasks.splice(taskNumber, 1);

     //   this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
    },

    turnOff(value) {
        console.log(`пытаюсь запустить turnoff`);
        this.textFieldAnswer1.removeEventListener('click', Boolean);
        this.textFieldAnswer2.removeEventListener('click', Boolean);
        this.textFieldAnswer3.removeEventListener('click', Boolean);
        this.textFieldAnswer4.removeEventListener('click', Boolean);
        this.textFieldAnswer5.removeEventListener('click', Boolean);

        if(!(this.players===undefined))
        {
            console.log(`запустил turnoff`);
            //перерасчёт очков
            if (value) {
                this.gameStatusField.innerText = 'Верно!';          
    /*           // user answered correct on OneMillionQuestion we should finish game (result-"won")
                if (this.superQuestionType === questionOneMillion) {
                    //this.rightAnswers = this.needRightAnswers;
                    this.players[this.currentPlayer].score = this.needRightAnswers;
                }
                //this.rightAnswers += 1; */
                this.players[this.currentPlayer].score++;
                this.players[this.currentPlayer].addTime(+5);
            } else {
                this.gameStatusField.innerText = 'Неверно!';
                this.players[this.currentPlayer].errors++;
                this.players[this.currentPlayer].addTime(-5);
            }
    /*      // user answered on question eight but he has not enough right answers
            if (this.superQuestionType === questionEight && this.players[this.currentPlayer].score < this.needRightAnswers) {
                this.finish('lose');
            }
            else if (this.players[this.currentPlayer].score < this.needRightAnswers) { */

            //если недостаточно очков и ошибок - продолжаем игру (если ещё остались вопросы)
            if (this.players[this.currentPlayer].score < this.needRightAnswers && this.players[this.currentPlayer].errors < this.needBadAnswers)
            {
                if (this.tasks.length === 0)
                {
                    this.finish('lose');
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
    },

    printQuestion(task) {
        console.log(`запустил printQuestion`);
        this.textFieldQuestion.innerText = task.question;

        const map = getAnswersMap(task);
        const answers = getAnswers(task);
        const answersCount = answers.length;

        console.log(map);

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

        this.state = 0;

        if (result === 'lose') {
            this.gameStatusField.innerText = `${this.players[this.currentPlayer].name} проиграл!`;
        }
        if (result === 'won') {
            this.gameStatusField.innerText = `${this.players[this.currentPlayer].name} выиграл!`;
        }

        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        this.textFieldAnswer3.innerText = ``;
        this.textFieldAnswer4.innerText = ``;
        this.textFieldAnswer5.innerText = ``;


        if (this.currentPlayer<this.players.length-1) 
        {
            this.currentPlayer++;
            console.log(`переход хода игроку ${JSON.stringify(this.players[this.currentPlayer])}`);
            setTimeout(
                () => {
                    this.timer()
                },
                3000,
            );          
            this.startQueeze(this.currentPlayer);
        }
        else
        { 
           this.players=undefined;
           this.hideGameControls();
        }
    },

    timer() {
        if (this.state){
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
};
