# @danielkalen/is
Collection of common bool functions for checking the type of a given value.

## Usage
```javascript
var IS = require('@danielkalen/is')
IS.defined(...)
IS.array(...)

var IS2 = IS.create() // Create a new copy of the checks collection
var IS3 = IS.create('natives', 'dom') // Create copy and load these check functions

assert(IS2 !== IS3)
assert(typeof IS2.domEl === 'undefined')
assert(typeof IS3.domEl === 'function')

IS2.load('dom') // load the dom check group
assert(typeof IS2.domEl === 'function')

IS3.load({
    bool: (subject)=> typeof subject === 'boolean'
}) // load custom check group
assert(typeof IS2.bool === 'undefined')
assert(typeof IS3.bool === 'function')
```


## Available Checks
### natives (loaded by default)
- `IS.defined(...)` check if value is not `undefined`
- `IS.array(...)` check if value is an array
- `IS.object(...)` check if value is an object type (excluding null)
- `IS.objectPlain(...)` check if value is a plain object (e.g. not array, not custom constructor)
- `IS.string(...)` check if value is a string
- `IS.number(...)` check if value is a number
- `IS.numberLoose(...)` check if value is a number or a string that can be resovled to a number
- `IS.function(...)` check if value is a function
- `IS.iterable(...)` check if value is an iterable (e.g. fn arguments)

### dom
*these are available only after calling `IS.load('dom')` or `IS.create('natives','dom')`* 
- `IS.domDoc(...)` check if value is a DOM Document object
- `IS.domEl(...)` check if value is a DOM element node (false for text node)
- `IS.domText(...)` check if value is a DOM text node
- `IS.domNode(...)` check if value is a DOM element or text node
- `IS.domTextarea(...)` check if value is a Textarea element
- `IS.domInput(...)` check if value is an Input element
- `IS.domSelect(...)` check if value is a Select element
- `IS.domField(...)` check if value is a Textarea,Input, or Select element


*License* MIT
