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
    },

    //Чтение и проверка JSON
    readJSON() {
        try {
            //Попытка чтения файла
            this.tasks = JSON.parse(tasks);  
            this.unparsedTasks = tasks;
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
                if (typeof (qAnswer1.result) !== `boolean`) { throw new Error(`Верность ответа ответа №1 в вопросе №${i} не bool!`); }
                if (typeof (qAnswer2.result) !== `boolean`) { throw new Error(`Верность ответа ответа №2 в вопросе №${i} не bool!`); }
                if (typeof (qAnswer3.result) !== `boolean`) { throw new Error(`Верность ответа ответа №3 в вопросе №${i} не bool!`); }
                if (typeof (qAnswer4.result) !== `boolean`) { throw new Error(`Верность ответа ответа №4 в вопросе №${i} не bool!`); }
                if (typeof (qAnswer5.result) !== `boolean`) { throw new Error(`Верность ответа ответа №5 в вопросе №${i} не bool!`); }
                if (typeof (qAnswer6.result) !== `boolean`) { throw new Error(`Верность ответа ответа №6 в вопросе №${i} не bool!`); }
                if (qAnswer1.value.length === 0) { throw new Error(`Отсутствует результат ответа №1 в вопросе №${i}!`); }
                if (qAnswer2.value.length === 0) { throw new Error(`Отсутствует результат ответа №2 в вопросе №${i}!`); }
                if (qAnswer3.value.length === 0) { throw new Error(`Отсутствует результат ответа №2 в вопросе №${i}!`); }
                if (qAnswer4.value.length === 0) { throw new Error(`Отсутствует результат ответа №2 в вопросе №${i}!`); }
                if (qAnswer5.value.length === 0) { throw new Error(`Отсутствует результат ответа №2 в вопросе №${i}!`); }
                if (qAnswer6.value.length === 0) { throw new Error(`Отсутствует результат ответа №2 в вопросе №${i}!`); }
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
            this.startGameDiv.addEventListener('click', startGame = () => this.startTimer());
        }
        else {
            this.startGameDiv.style.display = "none";
            this.playerNum.style.display = "none";
        };
    },

    //Время подготовки игрока
    startTimer() {
        let timeToPlay = 3;
        this.timerField.innerText = `3`;
        this.gameStatusField.innerText = `Игра начнётся через`;
        let self = this;
        const startTimer = setInterval(function () { timeToPlay--; this.timerField.innerText = `${timeToPlay}`; }, 1000);
        setTimeout(function () { clearInterval(startTimer); self.startQueeze(); }, 3000);
        this.startGameDiv.style.display = "none";
        this.playerNum.style.display = "none";
    },

    startQueeze() {
        this.initPlayers(this.countOfPlayers);
        this.currentPlayerNumber = 0;
        this.rightAnswers = 0;
        this.state = 1;
        this.gameStatusField.innerText = `Игра идёт`;
        this.showGameControls();
        this.endGameDiv.addEventListener('click', endGame = () => this.finish(`lose`));
        this.turnOn();
        this.timer();
    },

    turnOn() {
        var player = this.getNextPlayer();
        this.gameStatusField.innerText += ` Вопрос игроку №${player.name}`;

        const taskNumber = randomIntNumber(this.tasks.length - 1);
        this.printQuestion(this.tasks[taskNumber]);

        this.tasks.splice(taskNumber, 1);

        this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
    },

    turnOff(value) {
        if (value) {
            this.gameStatusField.innerText = 'Верно!';
            //this.rightAnswers += 1;
            players[this.currentPlayerNumber].score++;
        } else {
            this.gameStatusField.innerText = 'Неверно!';
            players[this.currentPlayerNumber].score--;
        }
        if (this.rightAnswers < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose');
            } else {
                this.turnOn();
            }
        } else {
            this.finish('won');
        }

        this.textFieldAnswer1.removeEventListener('click', Boolean);
        this.textFieldAnswer2.removeEventListener('click', Boolean);
        this.textFieldAnswer3.removeEventListener('click', Boolean);
        this.textFieldAnswer4.removeEventListener('click', Boolean);
        this.textFieldAnswer5.removeEventListener('click', Boolean);
    },

    printQuestion(task) {
        this.textFieldQuestion.innerText = task.question;

        const map = getAnswersMap(task);
        const answers = getAnswers(task);
        const answersCount = answers.length;

        this.textFieldAnswer1.innerText = answers[0];
        this.textFieldAnswer2.innerText = answers[1];

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff(map.get(answers[0])));
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff(map.get(answers[1])));

        switch (answersCount) {
            case 2:
                this.textFieldAnswer3.style.display = "none";
                this.textFieldAnswer4.style.display = "none";
                this.textFieldAnswer5.style.display = "none";
                break;
            case 3:
                this.textFieldAnswer3.innerText = answers[2];
                this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff(map.get(answers[2])));
                this.textFieldAnswer3.style.display = "block";
                this.textFieldAnswer4.style.display = "none";
                this.textFieldAnswer5.style.display = "none";
                break
            case 4:
                this.textFieldAnswer3.innerText = answers[2];
                this.textFieldAnswer4.innerText = answers[3];
                this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff(map.get(answers[2])));
                this.textFieldAnswer4.addEventListener('click', answer4 = () => this.turnOff(map.get(answers[3])));
                this.textFieldAnswer3.style.display = "block";
                this.textFieldAnswer4.style.display = "block";
                this.textFieldAnswer5.style.display = "none";
                break;
            case 5:
                this.textFieldAnswer3.innerText = answers[2];
                this.textFieldAnswer4.innerText = answers[3];
                this.textFieldAnswer5.innerText = answers[4];
                this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff(map.get(answers[2])));
                this.textFieldAnswer4.addEventListener('click', answer4 = () => this.turnOff(map.get(answers[3])));
                this.textFieldAnswer5.addEventListener('click', answer5 = () => this.turnOff(map.get(answers[4])));
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
        this.state = 0;
        this.currentPlayerNumber = 0;
        if (result === 'lose') {
            this.gameStatusField.innerText = `Вы проиграли!`;
        }
        if (result === 'won') {
            this.gameStatusField.innerText = `Вы выиграли!`;
        }

        this.boomTimer = 30;
        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        this.textFieldAnswer3.innerText = ``;
        this.textFieldAnswer4.innerText = ``;
        this.textFieldAnswer5.innerText = ``;
        this.hideGameControls();
    },

    timer() {
        if (this.state){
            this.boomTimer -= 1;
            let sec = this.boomTimer % 60;
            let min = (this.boomTimer - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;
    
            if (this.boomTimer > 0) {
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

    initPlayers(count) {
        for (var i = 1; i <= count; i++) {
            var player = {
                name: `Игрок ${i}`,
                remainErrors: 3,
                remainSeconds: 30,
                score: 0
            };
            players.push(player)
        }
    },
    getNextPlayer() {
        if (this.state < players.count - 1) {
            this.state++;
        } else {
            this.state = 0;
        }
        return players[this.state];
    }
};

players = [];