# JavaScript: Password Generator

## Description

[Visit the Deployed Site](https://aarticontractor.github.io/password_generator/)
<br>

This project required refactoring of the starter code provided to create an application that enables employees to generate random passwords based on criteria that the user selects. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that is written. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.


## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |  
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     |  


<br>



## Table of Contents

* [Application Highlights and Usage](#application-highlights-and-usage)
* [Code Snippets](#code-snippets)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)

<br>


## Application Highlights and Usage

<br>

When prompted for the length of the password, the user can choose a length of at least 8 characters and no more than 128 characters
<br>
<br>
<br>

![alt text](assets/length-prompt.jpg)

<br>
<br>
<br>


When asked for what character types to include in the password, the user can confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
<br>
<br>
<br>

![alt text](assets/characters-prompt.jpg)

<br>
<br>
<br>

When the password is generated, it will be displayed on the page.
<br>
<br>
<br>

![alt text](assets/pwd-displayed.jpg)

<br>
<br>
<br>



## Code Snippets

<br>

The following code snippet displays how the variable are declared for prompts of different characters:


```javascript

//   Added prompts for lowercase, uppercase, numbers, and special characters 
  var lowercasePrompt = prompt("Include lowercase letters? (yes/no)");
  var includeLowercase = lowercasePrompt.toLowerCase() === "yes";
  
  var uppercasePrompt = prompt("Include uppercase letters? (yes/no)");
  var includeUppercase = uppercasePrompt.toLowerCase() === "yes";

  var numberPrompt = prompt("Include numbers? (yes/no)");
  var includeNumber = numberPrompt.toLowerCase() === "yes";

  var symbolsPrompt = prompt("Include special characters? (yes/no)");
  var includeSymbols = symbolsPrompt.toLowerCase() === "yes";
```

<br>
<br>
<br>

The below snippet shows how the recurring for-loop will display a randomly generated password based on the user's input of lenght using the Math.random() method:

```javascript
// Generate random password using for loop and math.random method
  for (var i = 0; i < length; i++) {
    password += allTypes.charAt(Math.floor(Math.random() * allTypes.length));
  }
  
  passwordText.value = password;
```

<br>
<br>
<br>

## Learning Points 

I learned the following skills while doing this project:
<br>
- Java script basics (functions, arrays, for-loops, if-else, alerts, prompts, confirm, etc)
- How to call a function
- When to define a variable
- How to use .addeventListener and document.querySelector to capture data from an HTML element


<br>

## Author Info

### Aarti Contractor


- Portfolio: https://aarticontractor.github.io/aarticontractor_portfolio/
- Linkedin: https://www.linkedin.com/in/aarti-contractor/
- Github: https://github.com/aarticontractor

<br>

## Credits

- https://www.w3schools.com/jsref/jsref_obj_string.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://beautifier.io/
- https://onecompiler.com/javascript/3z45t4b2m


<br>

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.