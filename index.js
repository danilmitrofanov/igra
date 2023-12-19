
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
 
  function getComputerChoice() {
    const choices = ['камень', 'ножницы', 'бумага'];
    const randomIndex = getRandomInt(choices.length);
    return choices[randomIndex];
  }
  
 
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Ничья!";
    } else if (
      (userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
      return "Вы выиграли!";
    } else {
      return "Компьютер выиграл!";
    }
  }
  
  
  function playGame() {
    const userChoice = prompt("Ваш выбор: камень, ножницы или бумага?");
    const computerChoice = getComputerChoice();
    console.log("Вы выбрали: " + userChoice);
    console.log("Компьютер выбрал: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
 
  playGame();
  