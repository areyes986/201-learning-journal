## Chapter 3: Lists ##
- `<ol>` used to make ordered lists. 1,2,3,4, etc.
- `<ul>` used to make unordered lists, begin with bullet points
- Each item in the list should be wrapped about a `<li></li>` tag

- **Definition Lists**
- `<dl>` definition list, in the tags, usually consists series of terms and definitions
- `<dt>` "definition term" the word you are defining
- `<dd>` the definition itself

- **Nested Lists**
- you can put a list inside a list! 
ex: 
```
<ul>
    <li>list</li>
    <li>list</li>
        <ul>
            <li>another list</li>
            <li>inside a list</li>
        </ul>
    <li></li>
    <li></li>
</ul>
```

## Boxes ##
- **Box Dimensions**
    - you can use pixels, percentages, or ems to size a box.
    - ex: `height: 100px;`

- **Limiting Width and Height**
    - specifies the smallest or biggest a box can be when displayed
    - ex; `min-width: 300px`

- **Overflow Content**
    1. Hidden - hides extra content that does not fit in box
    1. Scroll - creates a box with a scrollbar to allow all words to fit
    -  `overflow: hidden;` or `overflow: scroll;`

- **Border, Margin, Padding**
- Border 
    - separates the edges of the box
    - `border-width: 5px;`
    - `border-style: dotted;`refer to pg. 310 for more examples
    - `border-color: blue;` you can also select different colors for each side of the box by doing `border-right-color: blue;`
    - you can also put all that info in one property. Ex: `border: 3px dashed blue;`
-  Margin - sits outside of the border, controls gap between boxes
    - `margin: 30px;`
- Padding - space between border and content within the box
    - `padding: 30px;`

**Centering Content**
- to center a box you can do this:

```
margin-left: auto;
margin-right: auto;
```
**Border Images**
- applies an image to the border of any box. You need 3 things:
    1. URL to image
    1. Where to slice image
    1. you can either *stretch*, *repeat*, or *round* the straight edges

**Box Shadows**
- `box-shadow: ` allows you to add shadows to you boxes

