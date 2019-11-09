## Chapter 3: Object Literals pg.100-105
- variables -> properties if part of an object
    - properties tell us about the oject
- functions -> methods
    - represent tasks associated with the object

## Chapter 5: Document Object Model pg.183-242 
\
DOM tree - model of page when browser is loaded.\
1. **Document Node** 
- Represents entire page, its the starting point for all visits of DOM tree (element, attribute, text)
2. **Element Node** 
- Describes structure of the HTML page, need to learn to access this node to alter attribute or text nodes
3. **Attribute Node**
- not children of the element but part of that element.  Once access to an element, there are JS methods and properties to change the element attributes.
4. **Text Node**
- They do not have children. No further branches come off of text nodes.  
\

**DOM Queries**\
When working with an element more that once you use a variable to store results of the query.
- If you need to use an element more than once, you can store the location in a variable. 'Caching" \

**Selecting Individual Elements**
- `getElementBy ID('id')`
- `querySelector(css selector)` \

**Returning more than one element**
- It returns a nodeList which looks like and are numbers like arrays. They are called *collection.*
- `getElementsByTagName('h1')`
- `getElementsByClassName()`
- `querySelectorAll('li[id]')`
- you can use loops to repeat actions for a nodelist





