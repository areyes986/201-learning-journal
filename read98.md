### Chapter 6: Events pp.243-292 ###
**Event handling** - how events trigger JS codes.
1. Select element node you want the js to respond to. 
1. Determine which event will trigger the response. This is *binding.*
1. Call the code you want ran when the event occurs.

**Binding an event to an element** - 
Three different types of event handling: HTML, Tradition DOM, and:  

 **DOM Lvl 2 Event Listeners**
- *Event listeners* are now introduces and now favored way. 
- Syntax is different and allows one event to trigger multiple functions. 
 - syntax: `element.addEventListener('event', functionnName [, Boolean]);` square bracketts are optional. 
- The element used is often first stored in a variable. `var el = document.getElementByID('user');`
    
   