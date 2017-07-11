module.exports = exports =
	defined: (subject)-> subject isnt undefined
	
	array: (subject)-> subject instanceof Array
	
	object: (subject)-> typeof subject is 'object' and subject # 2nd check is to test against 'null' values

	objectPlain: (subject)-> exports.object(subject) and Object::toString.call(subject) is '[object Object]' and subject.constructor is Object

	string: (subject)-> typeof subject is 'string'
	
	number: (subject)-> typeof subject is 'number' and not isNaN(subject)

	numberLoose: (subject)-> exports.number(subject) or exports.string(subject) and exports.number(Number subject)
	
	function: (subject)-> typeof subject is 'function'

	iterable: (subject)-> exports.object(subject) and exports.number(subject.length)