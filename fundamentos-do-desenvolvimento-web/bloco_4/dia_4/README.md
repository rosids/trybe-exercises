### Parte I - Objects and For/in
Using the object below, do the following exercises:

```js
  let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
```
<br>

1. Print a welcome message on the console to the character above, including her name.
   - Expected value on the console: Bem-vinda, Margarida

2. Insert a new property in the object with the key name "recurring" and the value "Sim" and then print the object on the console.
    - Expected value on the console: 
    ```js
    {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente: 'Sim'
    };
    ```

3. Make a for/in that shows all the keys of the object.
    - Expected value on the console:
    ```
      personagem
      origem
      nota
      recorrente
    ```
4. Make a new one for/in, but now show all key values ​​for the object.
    - Expected value on the console:
    ```
    Margarida
    Pato Donald
    Namorada do personagem principal nos quadrinhos do Pato Donald
    Sim
    ```
5. Now, define a second object with the same structure (the same keys) as the first and the following values: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics # 178", "O último MacPatinhas", "Sim" .
    - Expected value on the console:
    ```
    Margarida e Tio Patinhas
    Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
    Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
    Ambos recorrentes // Atenção para essa última linha!
    ```
<br>
### Parte II - Function
6. Create a function that takes a string and returns true if for a palindrome, or false, if not.
    - Example of palindrome: arara
    - verificaPalindrome("arara");
      - Expected return: **_true_**;
    - verificaPalindrome("desenvolvimento");
      - Expected return: **_false_**;

7. Create a function that receives an _array_ of integers and returns the index of the highest value.
    - test array: _[2, 3, 6, 7, 10, 1];_
    - Expected value return of function: _4_.
8. Create a function that receives an _array_ of integers and returns the index of the lowest value.
    - test array: _[2, 4, 6, 7, 10, 0, -3];_
    - Expected value return of function: _6_.
9. Create a function that receives an _array_ of names and returns the name with the most characters.
    - test array: _['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];._
    - Expected value return of function: _Fernanda_.
10. Create a function that takes an _array_ of integers and returns the most repeated integer.
    - test array: _[2, 3, 2, 5, 8, 2, 3];_
    - Expected value return of function: _2_.
11. Create a function that receives an integer N and returns the sum of all numbers from 1 to N.
    - Test value: _N = 5_.
    - Expected value on function return: _1+2+3+4+5 = **15**_.
12. Create a function that receives a _string word_ and another _string ending_. Check that the _string ending_ is the end of the _string word_. Consider that a _string ending_ will always be less than a _string word_.
    - Test value: _"trybe" e "be"_
    - verificaFimPalavra("trybe", "be");
      - Expected value on function return: _**true**_
    - verificaFimPalavra("joaofernando", "fernan");
      - Expected value on function return: _**false**_