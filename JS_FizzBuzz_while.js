let i = 0;
while (i < 100) {
	i++;
	switch (i) {
		case (((i%3) === 0) && ((i%5) === 0)):
			console.log("FizzBuzz");
			break;
		case (((i%5) === 0) && ((i%3) !== 0)):
			console.log("Buzz");
			break;
		case (((i%3) === 0) && ((i%5) !== 0)):
			console.log("Fizz");
		default:
			console.log(i);
	}
}

// NE FONCTIONNE PAS