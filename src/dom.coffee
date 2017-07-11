module.exports = exports = 
	domDoc: (subject)-> subject and subject.nodeType is 9

	domEl: (subject)-> subject and subject.nodeType is 1

	domText: (subject)-> subject and subject.nodeType is 3

	domNode: (subject)-> exports.domEl(subject) or exports.domText(subject)

	domTextarea: (subject)-> subject and subject.nodeName is 'TEXTAREA'
	
	domInput: (subject)-> subject and subject.nodeName is 'INPUT'
	
	domSelect: (subject)-> subject and subject.nodeName is 'SELECT'
	
	domField: (subject)-> exports.domInput(subject) or exports.domTextarea(subject) or exports.domSelect(subject)