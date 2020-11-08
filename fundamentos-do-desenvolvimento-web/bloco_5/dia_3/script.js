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
function addButton (id, name) {
  const buttonsContainer = document.querySelector('.buttons-container')
  let button = document.createElement('button');
  button.id = id;
  button.innerHTML = name;
  buttonsContainer.appendChild(button);
}

addButton('btn-holiday','Feriados');

// Exercise 3
function changeColorHolidays () {
  let holidays = document.querySelectorAll('.holiday');
  const buttonHoliday = document.querySelector('#btn-holiday');
  let color = 'rgb(118,248,35)';
  for(let index = 0; index < holidays.length; index += 1) {
    let holiday = holidays[index];
    buttonHoliday.addEventListener('click', function() {
      holiday.style.backgroundColor = color;
    });
    buttonHoliday.addEventListener('dblclick', function() {
      holiday.style.backgroundColor = 'initial';
    })
  }
}

changeColorHolidays();

// Exercise 4
addButton('btn-friday','Sexta-feira');

// Exercise 5
function changeTextFriday () {
  let fridays = document.getElementsByClassName('friday');
  const buttonFriday = document.querySelector('#btn-friday');
  for(let index = 0; index < fridays.length; index += 1) {
    let friday = fridays[index];
    buttonFriday.addEventListener('click', function() {
      if (friday.innerText === "Sextou!") {
        friday.innerText = (Number(friday.previousElementSibling.innerText) + 1);
      } else {
        friday.innerHTML = 'Sextou!';
      }
    });
  }
}

changeTextFriday();

function zoom () {
  days = document.querySelector('#days');

  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = 'bold';
  });
}

zoom();

function zoomOut() {
  days = document.querySelector('#days');

  days.addEventListener('mouseout', (event) =>{
    event.target.style.fontSize = '18px';
    event.target.style.fontWeight = 'normal';
  }); 
}

zoomOut();