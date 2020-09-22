window.onload = function()
{
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('answer3'),
        document.getElementById('answer4'),
        document.getElementById('answer5'),
        document.getElementById('startgamediv'),       
        document.getElementById('endgamediv'),
        document.getElementById('number')    //вы получали из dom не тот элемент
    );
    tikTakBoom.run();
}
