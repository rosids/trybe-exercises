function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercise 1
function createDates(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.getElementById('days');
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const date = dezDaysList[index];
    const itemsList = document.createElement('li');
    itemsList.className = 'day';
    if(date === 24 || date === 31) {
      itemsList.className = 'day holiday';
      itemsList.innerHTML = date;
    } else if (date === 4 || date === 11 || date === 18) {
      itemsList.className = 'day friday';
      itemsList.innerHTML = date;
    } else if (date === 25) {
      itemsList.className = 'day holiday friday';
      itemsList.innerHTML = date;
    }
    itemsList.innerHTML = date;
    days.appendChild(itemsList);
  }
  
}

createDates();

// Exercise 2
function addholidays (holiday) {
  const buttonsContainer = document.querySelector('.buttons-container')
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = holiday;
  buttonsContainer.appendChild(button);
}

addholidays('Feriados');