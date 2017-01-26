IS = module.exports =
	defined: (subject)-> subject isnt undefined
	
	array: (subject)-> subject instanceof Array
	
	object: (subject)-> typeof subject is 'object' and subject # 2nd check is to test against 'null' values

	objectPlain: (subject)-> IS.object(subject) and Object::toString.call(subject) is '[object Object]'

	string: (subject)-> typeof subject is 'string'
	
	number: (subject)-> typeof subject is 'number'
	
	function: (subject)-> typeof subject is 'function'

	iterable: (subject)-> IS.object(subject) and IS.number(subject.length)