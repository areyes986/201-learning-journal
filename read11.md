## Chapter 16: “Images” pp.406-427##

**Aligning Images**  
Best to use `float` to move an element to left or right of its containing block. It allows text to flow around it. Make sure you use `margin` so text will not touch img. 

**Centering Images**  
Use `display:block;` to center images. Then you can either use `text-align: center` or `margin: 0px auto;`.

**Background Images**  
Syntax: `background-image: url("images/pattern.gif);`  
This allows you to put an image behind and HTML element.  
- backgrand imgs automatically repeat to fill an entire box.

**Repeating Images**  
`background: repeat;`img is repeated horizonally and vertically. For only horizontal use `repeat-x` and`repeat-y` for vertical.  `no-repeat;` img is shown once. 
- `background-attachment: fixed;` for img to stay in same position on page
- `background-attachment: scroll;` img moves up and down as use scrolls up and down.

**Background Position**  
To specify where the background to be placed, Use `background-position:` ex: `background-position: center top;`
If you put only one value, it will default to the center. Percentages can be used as well.

Shorthands can be used and the values should be used in the following order:
color, image, repeat, attachment, position. 

**Image Rollovers & Sprites**  
*Rollover* is when a user moves their mouse over a link or button and it changes to a second style.  
*Sprite* is a single img used for diff parts of interface.