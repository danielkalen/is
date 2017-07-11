availSets = 
	natives: import './natives'
	dom: import './dom'

class Checks
	create: ()->
		args = Array::slice.call(arguments) if arguments.length
		new Checks(args)
	

	constructor: (sets)->
		sets ?= ['natives']
		
		for set in sets
			@load(availSets[set]) if availSets[set]


	load: (set)->
		set = availSets[set] if availSets.natives.string(set)
		return if not availSets.natives.objectPlain(set)
		
		for key,value of set
			@[key] = value
		
		return
	
	
module.exports = Checks::create()