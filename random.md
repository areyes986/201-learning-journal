

*Content Panels*  
Showcase extra info with limited space.

1. **Accordion**  
When user clicks on a title, panel expands to reveal more info. Usually created using an `<ol>` and each `<li>` is the new item in the accordion.  
Creating an Accordian:  
    1. JQuery collection created to hold elements whose class hasa value of accordion. Event listener triggers an anonymous function to the same class attributes of accordion-control.
    1. Use `preventDefault()` to prevent the browser from treating the button like a submit. Best to use early in the function.
    1. Another JQuery is made using `this` and three methods are applied when clicked on.   
        - `.next('accordian-panel')`selects element of that same class
        - `.not(':animated')` checks that it is not in the middle of being animated.
        - `.slideToggle()` to show or hide it.
