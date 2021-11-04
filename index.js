class Formatter {
  //add static methods here
	
	static capitalize(string){
		return (string[0].toUpperCase() + string.slice(1) )
	}

	static sanitize(string){
		return ( string.replace(/[!@#$({$%%^&^&*_+=]+/gi, "" ) )
	}

	static titleize(string){
		const array = string.split(" ");
		let newArray = [];
		let ignoreWords = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]

		newArray.push(this.capitalize(array[0]))

		for (let i = 1; i < array.length; i++) {
			
			if (ignoreWords.includes(array[i])) { //add here

				newArray.push(array[i])
			} else {
				newArray.push(this.capitalize(array[i]))
			}
		}

		return( newArray.join(" ") )
	}
}


