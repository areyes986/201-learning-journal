## Local Storage ##  

**HTML5 Storage* is a way for webpages to store key/value pairs locally. Data is not transmitted to the remote web server. 

**Using HTML5 Storage**
- based on key/value pairs.  
- store data based on named key then get data with same key.
- Data is stored as a string. 
- use `parseInt()` or `parseFloat()` functions to store/retrieve anything other than a string. 


**Tracking Changes**  
To keep track when storage area changes, you can trap the storage event. The storage event is fired when the setItem(), removeItem(), or clear() is called and changes something. Not cancelable. 
