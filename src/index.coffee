import * as natives from './natives'
import * as dom from './dom'
AVAIL_SETS = {natives, dom}

class Checks
	create: ()->
		args = Array::slice.call(arguments) if arguments.length
		new Checks(args)
	

	constructor: (sets)->
		sets ?= ['natives']
		
		for set in sets
			@load(AVAIL_SETS[set]) if AVAIL_SETS[set]


	load: (set)->
		set = AVAIL_SETS[set] if AVAIL_SETS.natives.string(set)
		return if not AVAIL_SETS.natives.objectPlain(set)
		
		for key,value of set
			key = 'function' if key is 'function_'
			@[key] = value
		
		return
	
	
export default Checks::create()