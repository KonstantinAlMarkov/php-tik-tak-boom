const commonAnswersCount = 6;


const randomIntNumber = (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

function getAllAnswers(task) {
    let answers = [];

    answers.push(task.answer1.value);
    answers.push(task.answer2.value);
    answers.push(task.answer3.value);
    answers.push(task.answer4.value);
    answers.push(task.answer5.value);
    answers.push(task.answer6.value);

    return answers;
}

function getAnswersMap (task) {
    const map = new Map([[task.answer1.value, task.answer1.result], [task.answer2.value, task.answer2.result],
                        [task.answer3.value, task.answer3.result],[task.answer4.value, task.answer4.result],
                        [task.answer5.value, task.answer5.result],[task.answer6.value, task.answer6.result]]);

    return map;
}

function mixAnswers(answers)
{   
    let result = [];
    
    while (answers.length > 0) {
        let k = randomIntNumber(answers.length-1,0);
        result.push(answers[k]);
        answers.splice(k,1); 
    } 
    
    return answers = result;
}

function getAnswers(task) {

    // generate random answers count
    let answersCount = randomIntNumber(5,2);
    let answers = getAllAnswers(task);
    let result = [];

    //add correct answer to result
    result.push(task.answer2.value);
    
    //remove correct answer from answers
    answers.splice(1,1);  

    //add random incorrect answers
    for (let i = 0; i < answersCount - 1; i++) {
        let k = randomIntNumber(answers.length-1,0);
        result.push(answers[k]);
        answers.splice(k,1); 
    }

    //mix again because correct answer always has the same position   
    result = mixAnswers(result);
    return result;
}

