## Basic Usage of Canvas ##  
`<canvas></canvas>` only has two optional attributes: width and height. Can be set up using DOM.

**Fallback Content**  
If older browers do not support it, you can give fallback content. To do this, just enter an the alt content inside the element. 

**Rendering**  
- canvas element as a method called `getContext()` to get the rendering contexts and drawing functions. It takes one parameter, which is type of context.  
Syntax:  
 `var canvas = document.getElementById('your ID';  
 var variable = canvas.getContext('2d');`

 ## Drawing Shapes ##  
 Canvas only supports rectangles and paths which are points connected by lines. There are 3 func to make a rect.  
 ### Rectangles ###  
 `_____Rect(x,y,widthheight)` 1. *fill* draws a filled rect, *stroke* draws the outline, *clear* clears the rect area, making it transparent.  

 ### Paths ###  
1. Create the path
2. use draw commands to draw intho the path
3. when path is created, you can stroke/fill to render.  
`beginPath()` creates new path, draw commands are directed into the path and used to build it up.  
`closePath()` closes the shape by drawing a line from current point to start point. 
`stroke()` draws shape by stroking the outline.  
`fill()` daws solid shape by filling the paths content area.  
`moveTo(x,y)` within the path you created, you can start the point in a new area, 
`lineTo(x,y)` to see connecting lines. Draws a line from current point to position x and y.  
`arc(x,y,radius,startAngle, endAngle, anticlockwise)` x an y is the center of the circle where the arc should be. Radius is radius. start/end angle are the start and end points of the arc in radians measured by the x axis. anticlockwise is a Boolean value.   

## Colors##
fillStyle - fills shapes  
stroke Style - sets style for outlines.  

the value should be in a string. Ex: `variable.fillStyle = 'blue';

