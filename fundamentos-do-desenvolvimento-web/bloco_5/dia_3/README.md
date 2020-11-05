1. The dezDaysList array contains the last two days of November and the days of the month of December. Develop a function that dynamically creates each day on the calendar and add them as sons/daughters of the ```<ul>``` tag with id "days". Note that the 29th and 30th of November are in the array as they represent Monday and Tuesday respectively.
   - The days must be contained in a ```<li>``` tag, and everyone must have the _day_ class. Ex:

      ```html
      <li class="day">3</li>
      ```
   - The days 24, 25 and 31 are holidays and, in addition to the _day_ class, must also contain the _holiday_ class. Ex:

      
      ```html
      <li class="day holiday">24</li>
      ``` 
   
   - The 4th, 11th, 18th and 25th are friday. They must contain the _day_ class and the _friday_ class. Ex:
   
      ```html
      <li class="day friday">4</li>
      ```
```js
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
```
<br/>

2. Implement a function that takes a string "holidays" as a parameter and dynamically creates a button with the name "holidays".
    - Add the ```"btn-holiday"``` ID to this button.
    - Add this button as a child of the ```<div>``` tag with class ```"buttons-container"```.
<br/>

3.Implement a function that adds a "click" event to the "holidays" button that changes the background color of the days that have the ```"holiday"``` class.
   - It is interesting that this button also has the reverse logic. When clicked again, it returns to the initial configuration with the color "rgb (238,238,238)".
<br/>

4.Implement a function that takes the string "friday" as a parameter and dynamically creates a button with the name "friday".
   - Add the ```"btn-friday"``` ID to this button.
   - Add this button as a child of the ```<div>``` tag with class ```"buttons-container"```.