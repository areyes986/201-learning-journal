## Links ## pg. 74-93
- ex of a *link tag*: `<a href="https://github.com/">Github</a>`
- ex of *linking to pages of the same site*: `<a href="index.html">Index</a>`
- ex of *email links* `<a href="mailto:allyexample@gmail.com>Email me!</a>`
- ex of links opening *in new window* `<a href="https://github.com"target="_blank">This will open a new window</a>`
- you  can also use IDs to link to diff parts of the same page

## Layout ## pg 358-404

**Relative Position** `position:relative` \
Moves an element over from where it was in normal flow by possibly moving in 20 px to right or 50px bottom if you want. 
- you can use top, bottom, left, or right(box offset properties) to move how far you want it to. 

**Absolute Position** `position:absolute` \
The box is taken out of normal flow and does not affect any other boxes on the page. 
- use the offset properties

**Fixed Position** `position:fixed` \
The box that this is use on is fixed in its place and will not move even if the user srolls up or down.
- use offset properties

**Floating Elements** `ex: float:right` \
Use width to indicate how wide the element is. Be mindful, if the width is too big, you may not get the result you want.
- anything that is inside the containing element will flow around the element flow is used on
- can be used to place boxes next to each other
 - *clearing floats*
    - lets the element being used by clear to not be touched on the left or right of its box. You can also used 'both' and 'none'.

    **Z-Index or Stacking Context** `z-index:10` \
    Used for boxes that overlap, you can control which box sits on the top.
    - high the value is, the higher it sits in front
