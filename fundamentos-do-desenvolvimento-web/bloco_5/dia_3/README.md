1. The dezDaysList array contains the last two days of November and the days of the month of December. Develop a function that dynamically creates each day on the calendar and add them as sons/daughters of the ```<ul>``` tag with id "days". Note that the 29th and 30th of November are in the array as they represent Monday and Tuesday respectively.
     ```js
         const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
      ```   

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
<br/>

5. Implement a function that adds a "click" event to the "Friday" button that changes the displayed date to chosen text.
   - It is interesting that this button also has the reverse logic. When clicked again it returns to the initial configuration displaying the days.
   
<br/>

6.Implement two functions that create a "zoom" effect. When hovering the mouse pointer over a day of the month on the calendar, the text for that day should increase, and when the mouse pointer leaves the day, the text should return to its original size.
   - **Tip:** Property event.target.

<br/>

7.Implement a function that adds a custom task to the calendar. The function must receive as a parameter the string with the task name (ex: "cozinhar") and dynamically create an element with the ```<span>``` tag containing the task.
   - The created element must be added as a child of the ```<div>``` tag that has the class ```"my-tasks"```.
<br/>

8. Implement a function that adds a colored caption to the task created in the previous exercise. This function should take as a parameter a string ("color") and dynamically create an element of tag ```<div>``` with the ```task``` class.
   - The color parameter should be used as the background color of the ```<div>``` created.
   - The created element must be added as a child of the ```<div>``` tag that has the class ```"my-tasks"```.
<br/>

9. Implement a function that adds an event that when clicking on the element with the ```<div>``` tag referring to the color of your task, assign this element to the ```selected task``` class, that is, when your task has the ```selected task``` class it will be selected.
   - When you click on the element again, your class should return to being just ```task```, that is, this task is no longer a selected task.
   <br/>

10.Implement a function that adds an event that, when clicking on a day of the month in the calendar, assigns that day the color of the legend of your selected task.
   - When you click on the day again with the legend color, your color should return to the initial settings of ```rgb(119,119,119)```.