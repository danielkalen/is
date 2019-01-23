export domDoc =(subject)-> subject and subject.nodeType is 9

export domEl =(subject)-> subject and subject.nodeType is 1

export domText =(subject)-> subject and subject.nodeType is 3

export domNode =(subject)-> domEl(subject) or domText(subject)

export domTextarea =(subject)-> subject and subject.nodeName is 'TEXTAREA'
	
export domInput =(subject)-> subject and subject.nodeName is 'INPUT'
	
export domSelect =(subject)-> subject and subject.nodeName is 'SELECT'
	
export domField =(subject)-> domInput(subject) or domTextarea(subject) or domSelect(subject)