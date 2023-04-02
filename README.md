# calculator
calculator Programm using HTML, CSS, and JS
This calculator allows users to perform arithmetic operations like addition, subtraction, multiplication, and division. It also includes a "C" button to clear the result, a "<" button to delete the last character, and an "=" button to calculate the result. The result is displayed in a text input field with a disabled attribute to prevent users from editing it directly.

I added a hint text that disappears when the user starts typing in the result input field, using the placeholder attribute in the HTML code:
the input field display "0.0" as a hint text until the user starts typing. Once the user starts typing, the hint text disappear and the user's input will be displayed in the input field.

I added an event listener for the keydown event in the JS code to allow the user to type numbers from the keyboard, 
This code listens for the keydown event on the document object and checks if the key pressed is a number or an operator. If it is, the corresponding value is added to the result input field using the addToResult() function. The code also checks for the Enter key to calculate the result, and the Backspace key to delete the last character.

I added parentheses.These buttons will call the addToResult() function with the '(' and ')' values respectively when clicked.
we can handle parentheses inside calculateResult() function in the JS code using the eval() function to evaluate the expression inside the parentheses first, then replace the parentheses and their contents with the result. 

I changed the buttons color. the C button has the operator class, and the = button has both the operator and equals classes. Then, I added CSS rules to style these buttons differently. 
With these CSS rules, the C button will has a red background and white text, and the = button will has a green background. but you can adjust the colors and styles to fit your design preferences.

<img width="1185" alt="Screenshot 2023-04-02 at 12 43 46 PM" src="https://user-images.githubusercontent.com/86812397/229350774-1bf49eaf-7bf2-4b16-851f-390b3967fbe9.png">


📫 reach me on my email address: wafaa.bouklihc@gmail.com

✨ LinkedIn ✨ : https://www.linkedin.com/in/wafaa-boukli-hacene-32a39018a/

✨youtube ✨: https://www.youtube.com/channel/UCvovdyJEHdAdhWWe-hViKiQ
