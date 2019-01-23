export defined = (subject)-> subject isnt undefined

export array = (subject)-> subject instanceof Array

export object = (subject)-> typeof subject is 'object' and subject # 2nd check is to test against 'null' values

export objectPlain = (subject)-> object(subject) and Object::toString.call(subject) is '[object Object]' and subject.constructor is Object

export string = (subject)-> typeof subject is 'string'

export number = (subject)-> typeof subject is 'number' and not isNaN(subject)

export numberLoose = (subject)-> number(subject) or string(subject) and number(Number subject)

export iterable = (subject)-> object(subject) and number(subject.length)

export function_ = (subject)-> typeof subject is 'function'