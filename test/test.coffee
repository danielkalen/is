test = require('tape').test
IS = require('../')

test "should have native checks by default", (t)->
	t.ok typeof IS is 'object'
	t.ok typeof IS.defined is 'function'
	t.ok typeof IS.array is 'function'
	t.ok typeof IS.object is 'function'
	t.ok typeof IS.objectPlain is 'function'
	t.ok typeof IS.string is 'function'
	t.ok typeof IS.number is 'function'
	t.ok typeof IS.function is 'function'
	t.ok typeof IS.iterable is 'function'
	t.end()

test "should not have dom checks by default", (t)->
	t.ok typeof IS.domDoc is 'undefined'
	t.ok typeof IS.domEl is 'undefined'
	t.ok typeof IS.domText is 'undefined'
	t.ok typeof IS.domNode is 'undefined'
	t.ok typeof IS.domTextarea is 'undefined'
	t.ok typeof IS.domInput is 'undefined'
	t.ok typeof IS.domSelect is 'undefined'
	t.ok typeof IS.domField is 'undefined'
	t.end()

test "a copy of the main object can be created using .create", (t)->
	copy = IS.create()
	t.notEqual IS, copy
	t.deepEqual Object.keys(IS), Object.keys(copy)
	t.end()

test "additional checks can be loaded by giving the name as an arg to .create", (t)->
	copy = IS.create('natives', 'dom')
	t.ok typeof IS.defined is 'function'
	t.ok typeof copy.domDoc is 'function'
	t.ok typeof copy.domEl is 'function'
	t.ok typeof copy.domText is 'function'
	t.ok typeof copy.domNode is 'function'
	t.ok typeof copy.domTextarea is 'function'
	t.ok typeof copy.domInput is 'function'
	t.ok typeof copy.domSelect is 'function'
	t.ok typeof copy.domField is 'function'
	t.end()

test "custom checks can be loaded via IS.load", (t)->
	copy = IS.create('')
	t.ok Object.keys(copy).length is 0

	copy.load(null)
	t.ok Object.keys(copy).length is 0
	
	copy.load({whatever: ''})
	t.ok Object.keys(copy).length is 1
	
	copy.load({whatever: ''})
	t.ok Object.keys(copy).length is 1
	
	copy.load({whatever: (target)-> target is 'whatever'})
	t.ok Object.keys(copy).length is 1
	t.ok copy.whatever('whatever')
	t.notOk copy.whatever('something')

	t.ok typeof IS.whatever is 'undefined'
	t.end()


test "IS.defined", (t)->
	t.ok IS.defined({})
	t.ok IS.defined(null)
	t.ok IS.defined('')
	t.ok IS.defined(false)
	t.ok IS.defined(->)
	t.notOk IS.defined(undefined)
	t.end()


test "IS.array", (t)->
	t.ok IS.array([])
	t.notOk IS.array({})
	t.notOk IS.array(arguments)
	t.notOk IS.array(IS)
	t.notOk IS.array(->)
	t.notOk IS.array(null)
	t.notOk IS.array(undefined)
	t.notOk IS.array('')
	t.notOk IS.array(1)
	t.notOk IS.array(false)
	t.end()


test "IS.iterable", (t)->
	t.ok IS.iterable([])
	t.ok IS.iterable(arguments)
	t.ok IS.iterable({length:0})
	t.notOk IS.iterable({length:'0'})
	t.notOk IS.iterable({length:null})
	t.notOk IS.iterable({length:NaN})
	t.notOk IS.iterable({})
	t.notOk IS.iterable(IS)
	t.notOk IS.iterable(->)
	t.notOk IS.iterable(null)
	t.notOk IS.iterable(undefined)
	t.notOk IS.iterable('')
	t.notOk IS.iterable(1)
	t.notOk IS.iterable(false)
	t.end()


test "IS.object", (t)->
	t.ok IS.object([])
	t.ok IS.object({})
	t.ok IS.object(arguments)
	t.ok IS.object(IS)
	t.notOk IS.object(->)
	t.notOk IS.object(null)
	t.notOk IS.object(undefined)
	t.notOk IS.object('')
	t.notOk IS.object(1)
	t.notOk IS.object(false)
	t.end()


test "IS.objectPlain", (t)->
	t.ok IS.objectPlain({})
	t.notOk IS.objectPlain([])
	t.notOk IS.objectPlain(arguments)
	t.notOk IS.objectPlain(IS)
	t.notOk IS.objectPlain(->)
	t.notOk IS.objectPlain(null)
	t.notOk IS.objectPlain(undefined)
	t.notOk IS.objectPlain('')
	t.notOk IS.objectPlain(1)
	t.notOk IS.objectPlain(false)
	t.end()


test "IS.function", (t)->
	t.ok IS.function(->)
	t.notOk IS.function({})
	t.notOk IS.function([])
	t.notOk IS.function(arguments)
	t.notOk IS.function(IS)
	t.notOk IS.function(null)
	t.notOk IS.function(undefined)
	t.notOk IS.function('')
	t.notOk IS.function(1)
	t.notOk IS.function(false)
	t.end()


test "IS.string", (t)->
	t.ok IS.string('')
	t.notOk IS.string(->)
	t.notOk IS.string({})
	t.notOk IS.string([])
	t.notOk IS.string(arguments)
	t.notOk IS.string(IS)
	t.notOk IS.string(null)
	t.notOk IS.string(undefined)
	t.notOk IS.string(1)
	t.notOk IS.string(false)
	t.end()


test "IS.number", (t)->
	t.ok IS.number(1)
	t.ok IS.number(Infinity)
	t.notOk IS.number(NaN)
	t.notOk IS.number(->)
	t.notOk IS.number({})
	t.notOk IS.number([])
	t.notOk IS.number(arguments)
	t.notOk IS.number(IS)
	t.notOk IS.number(null)
	t.notOk IS.number(undefined)
	t.notOk IS.number('1')
	t.notOk IS.number(false)
	t.end()


test "IS.numberLoose", (t)->
	t.ok IS.numberLoose(1)
	t.ok IS.numberLoose(Infinity)
	t.ok IS.numberLoose('1')
	t.notOk IS.numberLoose('15px')
	t.notOk IS.numberLoose('e1a')
	t.notOk IS.numberLoose(false)
	t.notOk IS.numberLoose(true)
	t.notOk IS.numberLoose(NaN)
	t.notOk IS.numberLoose(->)
	t.notOk IS.numberLoose({})
	t.notOk IS.numberLoose([])
	t.notOk IS.numberLoose(arguments)
	t.notOk IS.numberLoose(IS)
	t.notOk IS.numberLoose(null)
	t.notOk IS.numberLoose(undefined)
	t.end()





