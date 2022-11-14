// JavaScript Document
function isPrime(num) //function to return the number if it was a prime number.
		{
			  //checks if the number's factors are prime numbers.
			  if(num === 2) return true;
			  if(num % 2 === 0) return false;
			  for(let i = 3; i <= Math.sqrt(num); i += 2)
			  {
				if(num % i === 0) return false;
			  }
			  return num > 1;
		}
		function PrimeFactors() //function to let the user enter a number and then print their prime factors.
		{
			let message = "Enter an integer: "; //nessage.
			let integer
			
			do{ //Use the do-while loop to allow the user to enter values until they are correct. 
				integer = parseInt(prompt(message)); //Let the user enter the number.
				
				if (!(integer > 1)) //An error message appears when the user enters an invalid input.
					message = "Error: Primes integers must be greater than 1. "
				
			  }while(!(integer > 1))
			
			document.write("Enter an integer: " + integer + "<br />"); //display the number the user enters.
			document.write("Prime factors: <br />")
			
			for(let i=2; i<= integer; i++)
			{
				//If the number is a prime factor of the entered value, print it on the screen.
				while(integer % i === 0 && isPrime(i))
				{
						document.write(i + "<br />"); //print all prime factors on screen.
						integer /= i;
				}
			}
			
		}