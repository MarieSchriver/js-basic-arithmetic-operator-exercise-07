# Exercise 7: Using `Arithmetic Operators`

### Task: How to fork a repository on GitHub.com

1. Click on the **Fork** icon at the top right corner of the repository page on GitHub.com.

2. On the next screen, click the green **Create fork** button to create your own copy of the original repository.

3. Once the fork is created, click the green **Code** button and select **Open with GitHub Desktop**.

4. In GitHub Desktop, clone the repository by choosing a **Local Path** where you want to store a copy on your computer. When prompted about how you plan to use this fork, select **For my own purposes**.

## JavaScript Task:

1. In this exercise, the HTML and CSS are provided to you as index.html and css/style.css.
   Note: You should not modify the css/style.css file; focus only on the JavaScript functionality.

2. Link to the JavaScript file `js/script.js` from the provided HTML.

3. Ensure `"use strict"` is at the top of your script.

4. Update the text in the HTML file where the total amount is displayed:

   - Change "Total:" to "Total incl. tax:" to reflect that the total includes tax.

5. Declare and initialize the following variables:
   - `subtotal` with an initial value of $50.
   - `shipping` with an initial value of $10.
   - `quantity` with an initial value of 3.
   
6. Use the `+=` operator to add $20 to the `subtotal`.

7. Calculate the total excluding tax (`totalExclusivTax`) as `(quantity * subtotal) + shipping`.

8. Apply a 25% tax using the formula `totalInclusivTax = totalExclusivTax * 1.25`.

9. Use document.getElementById to select the subtotal, shipping, and total spans from the HTML. Assign these elements to variables for later use in updating the displayed values.

10. Dynamically update the HTML content to display the calculated values:

- `subtotal`, `shipping`, and `totalInclusivTax`.

11. Use `console.log` to log the calculated values (`subtotal`, `shipping`, and `totalInclusivTax`) for debugging purposes.

12. Open Go Live in your VS Code editor and check that the content has been updated.
