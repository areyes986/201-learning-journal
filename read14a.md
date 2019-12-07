## Transitions and Animation ##

**Transitions**  
To have a transition to happen, the element has a change in state in which diff styles are inputted for each one. Best way to determine which state is to use the :hover,:focus,:active,:target. pseudo classes.  
1. *Transition-property* determines which properties will change with the other transition properties. Only properties identified with the transition-property value will be affected.  
2. *Transition-Duration* is the duration of the transition. It can be set by general timeings like sec.(s) or millisec.(ms) as well as fractional measurements.  
3. *Transition-Timing* used to set the speed of the transition. Popular values include `linear,ease-in` or `ease-out`.  
4. *Transition-Delay*  determined how long a transition should be delayed before going. 

**Animations**  
When transitions need to have multiple states, that's where you use animation.  
*Keyframes* is used to set mulitiple points where an element should do a transition. It inlcludes animation-name and breakpoints. Breakpoints are set using % from 0 -> 100.
