// // // // function PORTADDRESS() {
// // // //   const PORT: number=5000;console.log(PORT);
// // // //   for(var i:number=0;i<=10;i++){
// // // //   console.log(`Value of i at position ${i} is ${i}`);
// // // //   }
// // // //   console.log(i)
// // // //   for(let i1:number=0;i1<=10;i1++){
// // // //   console.log(`Value of i1 at position ${i1} is ${i1}`);
// // // //   console.log(i1);
// // // //   }
// // // //   let i1=undefined;
// // // //   console.log(i1);
// // // //   //understand
// // // //   //typeerror,referenceError-> not defined
// // // //   const userName:string="aniketdattadotstudy";
// // // //   // userName="aniketdotlearn"; //cannot assign to userName because this is a constant
// // // //   console.log(userName);
// // // // }
// // // // PORTADDRESS();
// // // // function add(parameterOne:number,parameterTwo:number):number{
// // // //   // process.stdout.write("hello World!");
// // // // //   process.stdout.read(a);  
// // // // return parameterOne+parameterTwo;

// // // // //first return statement is executed

// // // // }
// // // // console.log(add(2,1));

// // // // class SumOfTwoNumbers {
// // // //     static sum(a:number, b:number) {
// // // //         return a + b;
// // // //     }
// // // // }
// // // // SumOfTwoNumbers.sum(1, 2); //3 
// // // // console.log(`Sum of 1 + 2 = ${SumOfTwoNumbers.sum(1, 2)}`); // 3

// // // // /*# Static Functions in JavaScript Classes

// // // // A static function (also called a static method) is a method that belongs to the class itself rather than to instances of the class. Let's examine how static methods work using your `SumOfTwoNumbers` example:

// // // // ```javascript
// // // // class SumOfTwoNumbers {
// // // //     static sum(a, b) {
// // // //         return a + b;
// // // //     }
// // // // }
// // // // ```

// // // // ## Key Characteristics of Static Methods

// // // // 1. **Called on the Class, Not Instances**: Static methods are called directly on the class itself, not on instances of the class:
// // // //    ```javascript
// // // //    // Correct usage
// // // //    SumOfTwoNumbers.sum(1, 2);
   
// // // //    // Incorrect usage
// // // //    const calculator = new SumOfTwoNumbers();
// // // //    calculator.sum(1, 2); // This would cause an error
// // // //    ```

// // // // 2. **Cannot Access Instance Properties/Methods**: Static methods cannot access instance properties or methods using `this` because they are not called on an instance:
// // // //    ```javascript
// // // //    class Example {
// // // //      constructor() {
// // // //        this.value = 10;
// // // //      }
     
// // // //      static doSomething() {
// // // //        // Cannot access this.value here
// // // //        // "this" refers to the class, not an instance
// // // //        return "Static method";
// // // //      }
// // // //    }
// // // //    ```

// // // // 3. **Can Access Other Static Methods/Properties**: Static methods can access other static methods and properties of the same class:
// // // //    ```javascript
// // // //    class Calculator {
// // // //      static PI = 3.14159;
     
// // // //      static calculateArea(radius) {
// // // //        return Calculator.PI * radius * radius;
// // // //      }
// // // //    }
// // // //    ```

// // // // ## Use Cases for Static Methods

// // // // Static methods are ideal for:

// // // // 1. **Utility Functions**: Operations that don't require instance state
// // // // 2. **Factory Methods**: Methods that create and return instances of the class
// // // // 3. **Helper Functions**: Functionality related to the class but not to a specific instance
// // // // 4. **Pure Functions**: Functions where the output depends only on the input parameters

// // // // ## Your Example Explained

// // // // In your code:
// // // // ```javascript
// // // // class SumOfTwoNumbers {
// // // //     static sum(a, b) {
// // // //         return a + b;
// // // //     }
// // // // }
// // // // SumOfTwoNumbers.sum(1, 2); // Returns 3 
// // // // console.log(`Sum of 1 + 2 = ${SumOfTwoNumbers.sum(1, 2)}`); // Outputs: Sum of 1 + 2 = 3
// // // // ```

// // // // 1. The `sum` method is defined as `static`, meaning it belongs to the `SumOfTwoNumbers` class itself
// // // // 2. You call it directly on the class with `SumOfTwoNumbers.sum(1, 2)`
// // // // 3. No instance of the class needs to be created

// // // // This approach makes sense for a simple arithmetic operation like addition, as it doesn't require any instance-specific state or behavior. It's essentially a stateless utility function organized within a class.

// // // // Key Characteristics of Static Methods
// // // // Called on the Class, Not Instances: Static methods are called directly on the class itself, not on instances of the class:
// // // // // Correct usage
// // // // SumOfTwoNumbers.sum(1, 2);

// // // // // Incorrect usage
// // // // const calculator = new SumOfTwoNumbers();
// // // // calculator.sum(1, 2); // This would cause an error
// // // // // class Example {
// // // //   constructor() {
// // // //     this.value = 10;
// // // //   }
  
// // // //   static doSomething() {
// // // //     // Cannot access this.value here
// // // //     // "this" refers to the class, not an instance
// // // //     return "Static method";
// // // //   }
// // // // }
// // // //   Can Access Other Static Methods/Properties: Static methods can access other static methods and properties of the same class:

// // // // class Calculator {
// // // //   static PI = 3.14159;
  
// // // //   static calculateArea(radius) {
// // // //     return Calculator.PI * radius * radius;
// // // //   }
// // // // }
// // // //   Use Cases for Static Methods
// // // // Static methods are ideal for:

// // // // Utility Functions: Operations that don't require instance state
// // // // Factory Methods: Methods that create and return instances of the class
// // // // Helper Functions: Functionality related to the class but not to a specific instance
// // // // Pure Functions: Functions where the output depends only on the input parameters
// // // // Your Example Explained
// // // // In your code:

// // // // The sum method is defined as static, meaning it belongs to the SumOfTwoNumbers class itself
// // // // You call it directly on the class with SumOfTwoNumbers.sum(1, 2)
// // // // No instance of the class needs to be created
// // // // This approach makes sense for a simple arithmetic operation like addition, as it doesn't require any instance-specific state or behavior. It's essentially a stateless utility function organized within a class.Use Cases for Static Methods
// // // // Static methods are ideal for:

// // // // Utility Functions: Operations that don't require instance state
// // // // Factory Methods: Methods that create and return instances of the class
// // // // Helper Functions: Functionality related to the class but not to a specific instance
// // // // Pure Functions: Functions where the output depends only on the input parameters
// // // // Your Example Explained
// // // // In your code:
// // // // class SumOfTwoNumbers {
// // // //     static sum(a, b) {
// // // //         return a + b;
// // // //     }
// // // // }
// // // // SumOfTwoNumbers.sum(1, 2); // Returns 3 
// // // // console.log(`Sum of 1 + 2 = ${SumOfTwoNumbers.sum(1, 2)}`); // Outputs: Sum of 1 + 2 = 3
// // // // The sum method is defined as static, meaning it belongs to the SumOfTwoNumbers class itself
// // // // You call it directly on the class with SumOfTwoNumbers.sum(1, 2)
// // // // No instance of the class needs to be created
// // // // This approach makes sense for a simple arithmetic operation like addition, as it doesn't require any instance-specific state or behavior. It's essentially a stateless utility function organized within a class.*/
// // // // // Data Type: Primitive (Most simple or basic) Data Types-> null , Number -> Integer, Number -> Float, String, Boolean, BigInt, Symbol
// // // // //Non-Primitive Data Type: Object, Array, Function.
// // // // // Primitive Data Types are immutable (unchangeable) and Non-Primitive Data Types are mutable (changeable).
// // // // // Shallow copy: /*# Shallow Copy in JavaScript

// // // // // A shallow copy creates a new object or array, but doesn't copy nested objects/arrays. Instead, it copies references to those nested objects/arrays.

// // // // // ## Key Characteristics of Shallow Copy

// // // // // 1. **First-level properties** are copied as new values
// // // // // 2. **Nested objects/arrays** are copied as references to the original objects/arrays
// // // // // 3. **Changes to nested objects** in the copy will affect the original (and vice versa)

// // // // // ## Methods to Create Shallow Copies

// // // // // ### For Objects

// // // // // ```javascript
// // // // // // Using Object.assign()
// // // // // const original = { name: "John", address: { city: "New York" } };
// // // // // const copy = Object.assign({}, original);

// // // // // // Using spread syntax (...)
// // // // // const copy2 = { ...original };
// // // // // ```

// // // // // ### For Arrays

// // // // // ```javascript
// // // // // // Using slice()
// // // // // const originalArray = [1, 2, [3, 4]];
// // // // // const copyArray = originalArray.slice();

// // // // // // Using spread syntax (...)
// // // // // const copyArray2 = [...originalArray];

// // // // // // Using Array.from()
// // // // // const copyArray3 = Array.from(originalArray);
// // // // // ```

// // // // // ## Example Demonstrating Shallow Copy Behavior

// // // // // ```javascript
// // // // // // Create an original object with nested object
// // // // // const user = {
// // // // //   name: "Alice",
// // // // //   contact: {
// // // // //     email: "alice@example.com",
// // // // //     phone: "123-456-7890"
// // // // //   }
// // // // // };

// // // // // // Create a shallow copy
// // // // // const userCopy = { ...user };

// // // // // // Modify a top-level property (creates a new value)
// // // // // userCopy.name = "Bob";
// // // // // console.log(user.name);      // "Alice" (original unchanged)
// // // // // console.log(userCopy.name);  // "Bob" (copy changed)

// // // // // // Modify a nested object property (modifies shared reference)
// // // // // userCopy.contact.email = "bob@example.com";
// // // // // console.log(user.contact.email);      // "bob@example.com" (original changed!)
// // // // // console.log(userCopy.contact.email);  // "bob@example.com" (copy changed)
// // // // // ```

// // // // // ## Contrast with Deep Copy

// // // // // A deep copy creates entirely new copies of nested objects/arrays, ensuring that modifications to any level of the copy don't affect the original.

// // // // // To create a deep copy:

// // // // // ```javascript
// // // // // // Simple but limited to JSON-serializable data
// // // // // const deepCopy = JSON.parse(JSON.stringify(original));

// // // // // // Or using libraries like lodash
// // // // // // const deepCopy = _.cloneDeep(original);
// // // // // ```
// // // // /**# Deep Copy in JavaScript

// // // // A deep copy creates completely independent copies of nested objects or arrays, ensuring modifications to any level of the copied structure don't affect the original.

// // // // ## Key Characteristics of Deep Copy

// // // // 1. **All levels of properties** are copied as new values
// // // // 2. **Nested objects/arrays** are copied completely, not just references
// // // // 3. **Changes at any level** in the copy won't affect the original (and vice versa)

// // // // ## Methods to Create Deep Copies

// // // // ### Using JSON Methods (Simple Approach)

// // // // ```javascript
// // // // // Using JSON.parse and JSON.stringify
// // // // const original = { 
// // // //   name: "John", 
// // // //   address: { city: "New York" },
// // // //   hobbies: ["reading", "swimming"]
// // // // };
// // // // const deepCopy = JSON.parse(JSON.stringify(original));
// // // // ```

// // // // **Limitations:**
// // // // - Cannot copy functions, undefined values, symbols, or circular references
// // // // - Loses date objects (converts to strings)
// // // // - May have performance issues with large objects

// // // // ### Using Structured Clone API (Modern Browsers)

// // // // ```javascript
// // // // // Modern approach available in newer browsers
// // // // const deepCopy = structuredClone(original);
// // // // ```

// // // // **Benefits:**
// // // // - Handles circular references
// // // // - Preserves most built-in types (Maps, Sets, Dates, etc.)
// // // // - Usually better performance than JSON approach

// // // // ### Using Libraries

// // // // ```javascript
// // // // // Using lodash
// // // // const deepCopy = _.cloneDeep(original);

// // // // // Using Ramda
// // // // const deepCopy = R.clone(original);
// // // // ```

// // // // ## Example Demonstrating Deep Copy Behavior

// // // //   */
// // // // // ## Implications for Your Code

// // // // // In your `Profile` class, if you create a shallow copy of a profile instance, changes to nested objects like `personalInfo.contact` would affect both the copy and the original. This is important to consider when manipulating complex data structures like your profile objects.*/
// // // // //

// // // // // Data Structure
// // // // // Data Processing -> Conditional Statements, Loops 
// // // // // Data Validation
// // // // // Data Manipulation

// // // // /**
// // // // //  * @typedef {Object} ProfileData
// // // // //  * @property {string} name - Person's full name
// // // // //  * @property {number} age - Person's age
// // // // //  * @property {string} city - City of residence
// // // // //  * @property {string} country - Country of residence
// // // // //  * @property {string} dob - Date of birth (YYYY-MM-DD)
// // // // //  * @property {string} email - Contact email address
// // // // //  * @property {string} phone - Contact phone number
// // // // //  * @property {string} clg - College/University name
// // // // //  * @property {string} degree - Degree name
// // // // //  * @property {number} passout - Graduation year
// // // // //  * @property {string} company - Current company name
// // // // //  * @property {string} designation - Current job title
// // // // //  * @property {number} exp - Years of experience
// // // // //  * @property {boolean} isPaid - Payment status
// // // // //  * @property {string} favoriteClass - Preferred subject
// // // // //  * @property {string[]} skills - Technical skills
// // // // //  */

// // // // // // Available skills
// // // // // const SKILLS = ["HTML", "CSS", "JS"];
// // // // // let minage = 18;
// // // // // /**
// // // // //  * Profile class for managing personal, educational and professional information
// // // // //  */
// // // // // class Profile {
// // // // //     /**
// // // // //      * Creates a new profile
// // // // //      * @param {string} name - Person's name
// // // // //      * @param {number} age - Person's age
// // // // //      * @param {string} city - City of residence
// // // // //      * @param {string} country - Country of residence
// // // // //      * @param {string} dob - Date of birth
// // // // //      * @param {string} email - Contact email
// // // // //      * @param {string} phone - Contact phone
// // // // //      * @param {string} clg - College name
// // // // //      * @param {string} degree - Degree type
// // // // //      * @param {number} passout - Graduation year
// // // // //      * @param {string} company - Company name
// // // // //      * @param {string} designation - Job title
// // // // //      * @param {number} exp - Years of experience
// // // // //      * @param {boolean} isPaid - Payment status
// // // // //      * @param {string} favoriteClass - Favorite subject
// // // // //      * @param {string[]} skills - Technical skills
// // // // //      */
// // // // //     constructor(name, age, city, country, dob, email, phone, clg, degree, passout, company, designation, exp, isPaid, favoriteClass, skills) {
// // // // //         this.name = name;
// // // // //         this.age = age;
// // // // //         this.city = city;
// // // // //         this.country = country;
// // // // //         this.dob = dob;
// // // // //         this.email = email;
// // // // //         this.phone = phone;
// // // // //         this.clg = clg;
// // // // //         this.degree = degree;
// // // // //         this.passout = passout;
// // // // //         this.company = company;
// // // // //         this.designation = designation;
// // // // //         this.exp = exp;
// // // // //         this.isPaid = isPaid;
// // // // //         this.favoriteClass = favoriteClass;
// // // // //         this.skills = skills;
// // // // //     }

// // // // //     /**
// // // // //      * Generates a structured object representation of the profile
// // // // //      * @returns {Object} Organized profile information
// // // // //      */
// // // // //     profileIndividual = () => {
// // // // //         return {
// // // // //             personalInfo: {
// // // // //                 name: this.name,
// // // // //                 age: this.age,
// // // // //                 isPaid: this.isPaid,
// // // // //                 dateOfBirth: this.dob,
// // // // //                 contact: {
// // // // //                     email: this.email,
// // // // //                     phone: this.phone
// // // // //                 },
// // // // //                 location: {
// // // // //                     city: this.city,
// // // // //                     country: this.country
// // // // //                 }
// // // // //             },
// // // // //             education: {
// // // // //                 college: this.clg,
// // // // //                 degree: this.degree,
// // // // //                 graduationYear: this.passout,
// // // // //                 favoriteClass: this.favoriteClass
// // // // //             },
// // // // //             professional: {
// // // // //                 currentCompany: this.company,
// // // // //                 designation: this.designation,
// // // // //                 yearsOfExperience: this.exp,
// // // // //                 skills: this.skills,
// // // // //             }
// // // // //         };
// // // // //     }
// // // // // }

// // // // // // Create a new profile instance
// // // // // //person is a reference to the object in memory
// // // // // const person = new Profile(
// // // // //     "Rohit", // String - "",'',``
// // // // //     20, // Number - Integer
// // // // //     "Kolkata", // String - "",'',``
// // // // //     "India", // String - "",'',``
// // // // //     "2004-07-15", // String - "",'',``
// // // // //     "rohit@example.com", // String - "",'',`` Special Characters Included
// // // // //     "9123456789", // String - "",'',``
// // // // //     "Maulana Abul Kalam Azad University of Technology", // String - "",'',``
// // // // //     "Computer Science with AIML", // String - "",'',``
// // // // //     2026, // Number
// // // // //     "TCS", // String - "",'',``
// // // // //     "Software Development Practitioner", // String - "",'',``
// // // // //     2.5, // Number - Float
// // // // //     true, // Boolean - true/false
// // // // //     "backend", // String - "",'',`` - Note the comma was missing here
// // // // //     ["HTML", "CSS", "JS"] // Array
// // // // // );

// // // // // console.log(person.profileIndividual());
// // // // // console.log(typeof(person.favoriteClass));
// // // // // person.favoriteClass = undefined;
// // // // // console.log(person.profileIndividual());
// // // // // console.log(typeof(person.favoriteClass));
// // // // // console.log(typeof(person.isPaid));
// // // // // console.log(typeof(person.skills));
// // // // // in object , if key is not present then it will be undefined , key: value pairs in memory
// // // // //in array , the first key is - , second is 1, third is 2 and so on
// // // // /**
// // // //  * Weather Outfit Recommendation System
// // // //  * This application provides outfit recommendations based on weather conditions.
// // // //  * Implemented using SOLID principles and object-oriented design patterns.
// // // //  */

// // // // // Weather types enumeration
// // // // const WeatherType = {
// // // //     SUNNY: 'sunny',
// // // //     RAINY: 'rainy',
// // // //     CLOUDY: 'cloudy',
// // // //     SNOWY: 'snowy',
// // // //     WINDY: 'windy',
// // // //     STORMY: 'stormy',
// // // //     UNKNOWN: 'unknown'
// // // //   };
  
// // // //   /**
// // // //    * Strategy Pattern: Outfit recommendation strategies for different weather types
// // // //    */
// // // //   class OutfitRecommendationStrategy {
// // // //     getRecommendation() {
// // // //       throw new Error('Method not implemented');
// // // //     }
// // // //   }
  
// // // //   class SunnyWeatherStrategy extends OutfitRecommendationStrategy {
// // // //     getRecommendation() {
// // // //       return {
// // // //         headwear: 'hat and sunglasses',
// // // //         topwear: 'light t-shirt',
// // // //         bottomwear: 'shorts or light pants',
// // // //         footwear: 'sandals or sneakers',
// // // //         accessories: 'sunscreen, water bottle',
// // // //         message: 'Wear a hat and sunglasses, light clothing, and apply sunscreen to protect from UV rays.'
// // // //       };
// // // //     }
// // // //   }
  
// // // //   class RainyWeatherStrategy extends OutfitRecommendationStrategy {
// // // //     getRecommendation() {
// // // //       return {
// // // //         headwear: 'rain hat or hood',
// // // //         topwear: 'waterproof jacket',
// // // //         bottomwear: 'water-resistant pants',
// // // //         footwear: 'rain boots',
// // // //         accessories: 'umbrella',
// // // //         message: 'Bring an umbrella and wear boots with waterproof clothing.'
// // // //       };
// // // //     }
// // // //   }
  
// // // //   class CloudyWeatherStrategy extends OutfitRecommendationStrategy {
// // // //     getRecommendation() {
// // // //       return {
// // // //         headwear: 'none or light cap',
// // // //         topwear: 'light jacket or sweater',
// // // //         bottomwear: 'jeans or casual pants',
// // // //         footwear: 'sneakers or casual shoes',
// // // //         accessories: 'none',
// // // //         message: 'Wear a light jacket and comfortable clothing as temperature may vary.'
// // // //       };
// // // //     }
// // // //   }
  
// // // //   class SnowyWeatherStrategy extends OutfitRecommendationStrategy {
// // // //     getRecommendation() {
// // // //       return {
// // // //         headwear: 'beanie or winter hat',
// // // //         topwear: 'heavy winter coat',
// // // //         bottomwear: 'thermal pants',
// // // //         footwear: 'insulated snow boots',
// // // //         accessories: 'gloves, scarf',
// // // //         message: 'Bundle up with warm layers, insulated boots, and don\'t forget gloves and a hat.'
// // // //       };
// // // //     }
// // // //   }
  
// // // //   class WindyWeatherStrategy extends OutfitRecommendationStrategy {
// // // //     getRecommendation() {
// // // //       return {
// // // //         headwear: 'secure hat or cap',
// // // //         topwear: 'windbreaker jacket',
// // // //         bottomwear: 'fitted pants',
// // // //         footwear: 'closed shoes',
// // // //         accessories: 'none',
// // // //         message: 'Wear windproof clothing and avoid loose items that may blow away.'
// // // //       };
// // // //     }
// // // //   }
  
// // // //   class DefaultWeatherStrategy extends OutfitRecommendationStrategy {
// // // //     getRecommendation() {
// // // //       return {
// // // //         headwear: 'optional',
// // // //         topwear: 'comfortable shirt',
// // // //         bottomwear: 'comfortable pants',
// // // //         footwear: 'comfortable shoes',
// // // //         accessories: 'none',
// // // //         message: 'Wear what you have on - dress comfortably for the day.'
// // // //       };
// // // //     }
// // // //   }
  
// // // //   /**
// // // //    * Factory for creating appropriate weather strategy
// // // //    */
// // // //   class WeatherStrategyFactory {
// // // //     static createStrategy(weatherType) {
// // // //       switch (weatherType.toLowerCase()) {
// // // //         case WeatherType.SUNNY:
// // // //           return new SunnyWeatherStrategy();
// // // //         case WeatherType.RAINY:
// // // //           return new RainyWeatherStrategy();
// // // //         case WeatherType.CLOUDY:
// // // //           return new CloudyWeatherStrategy();
// // // //         case WeatherType.SNOWY:
// // // //           return new SnowyWeatherStrategy();
// // // //         case WeatherType.WINDY:
// // // //           return new WindyWeatherStrategy();
// // // //         default:
// // // //           return new DefaultWeatherStrategy();
// // // //       }
// // // //     }
// // // //   }
  
// // // //   /**
// // // //    * Weather Service for fetching current weather data
// // // //    */
// // // //   class WeatherService {
// // // //     constructor(apiKey = null) {
// // // //       this.apiKey = apiKey;
// // // //     }
  
// // // //     /**
// // // //      * Gets the current weather for a location
// // // //      * @param {string} location - The location to get weather for
// // // //      * @returns {Promise<string>} A promise that resolves to the weather type
// // // //      */
// // // //     async getCurrentWeather(location) {
// // // //       try {
// // // //         if (this.apiKey) {
// // // //           // In a real app, this would make an actual API call
// // // //           // return await fetch(`https://api.weatherservice.com/current?location=${encodeURIComponent(location)}&apiKey=${this.apiKey}`)
// // // //           //   .then(response => response.json())
// // // //           //   .then(data => data.weatherType);
// // // //         }
        
// // // //         // For demonstration, return a mock result
// // // //         // In a real application, this would come from the API
// // // //         const mockWeatherTypes = [
// // // //           WeatherType.SUNNY,
// // // //           WeatherType.RAINY,
// // // //           WeatherType.CLOUDY,
// // // //           WeatherType.SNOWY,
// // // //           WeatherType.WINDY
// // // //         ];
// // // //         return Promise.resolve(mockWeatherTypes[Math.floor(Math.random() * mockWeatherTypes.length)]);
// // // //       } catch (error) {
// // // //         console.error('Error fetching weather data:', error);
// // // //         return Promise.resolve(WeatherType.UNKNOWN);
// // // //       }
// // // //     }
// // // //   }
  
// // // //   /**
// // // //    * Outfit Recommender class - Core application functionality
// // // //    */
// // // //   class OutfitRecommender {
// // // //     constructor(weatherService) {
// // // //       this.weatherService = weatherService;
// // // //     }
  
// // // //     /**
// // // //      * Gets outfit recommendations for the given location
// // // //      * @param {string} location - The location to get recommendations for
// // // //      * @returns {Promise<object>} The outfit recommendations
// // // //      */
// // // //     async getRecommendationForLocation(location) {
// // // //       try {
// // // //         const weatherType = await this.weatherService.getCurrentWeather(location);
// // // //         return this.getRecommendationForWeather(weatherType);
// // // //       } catch (error) {
// // // //         console.error('Error getting recommendation:', error);
// // // //         return new DefaultWeatherStrategy().getRecommendation();
// // // //       }
// // // //     }
  
// // // //     /**
// // // //      * Gets outfit recommendations for the given weather type
// // // //      * @param {string} weatherType - The weather type
// // // //      * @returns {object} The outfit recommendations
// // // //      */
// // // //     getRecommendationForWeather(weatherType) {
// // // //       const strategy = WeatherStrategyFactory.createStrategy(weatherType);
// // // //       const recommendation = strategy.getRecommendation();
// // // //       recommendation.weatherType = weatherType;
// // // //       return recommendation;
// // // //     }
// // // //   }
  
// // // //   /**
// // // //    * User Interface for the application
// // // //    */
// // // //   class OutfitRecommendationUI {
// // // //     constructor(recommender) {
// // // //       this.recommender = recommender;
// // // //     }
  
// // // //     /**
// // // //      * Displays outfit recommendation in the console
// // // //      * @param {object} recommendation - The recommendation to display
// // // //      */
// // // //     displayRecommendation(recommendation) {
// // // //       console.log(`\n=== OUTFIT RECOMMENDATION FOR ${recommendation.weatherType.toUpperCase()} WEATHER ===`);
// // // //       console.log(`Headwear: ${recommendation.headwear}`);
// // // //       console.log(`Top: ${recommendation.topwear}`);
// // // //       console.log(`Bottom: ${recommendation.bottomwear}`);
// // // //       console.log(`Footwear: ${recommendation.footwear}`);
// // // //       console.log(`Accessories: ${recommendation.accessories}`);
// // // //       console.log(`\nSuggestion: ${recommendation.message}\n`);
// // // //     }
  
// // // //     /**
// // // //      * Gets and displays recommendation for a location
// // // //      * @param {string} location - The location to get recommendation for
// // // //      */
// // // //     async showRecommendationForLocation(location) {
// // // //       try {
// // // //         console.log(`Fetching weather data for ${location}...`);
// // // //         const recommendation = await this.recommender.getRecommendationForLocation(location);
// // // //         this.displayRecommendation(recommendation);
// // // //       } catch (error) {
// // // //         console.error('Failed to show recommendation:', error);
// // // //       }
// // // //     }
  
// // // //     /**
// // // //      * Shows recommendation for a specific weather type
// // // //      * @param {string} weatherType - The weather type
// // // //      */
// // // //     showRecommendationForWeather(weatherType) {
// // // //       try {
// // // //         console.log(`Getting outfit recommendation for ${weatherType} weather...`);
// // // //         const recommendation = this.recommender.getRecommendationForWeather(weatherType);
// // // //         this.displayRecommendation(recommendation);
// // // //       } catch (error) {
// // // //         console.error('Failed to show recommendation:', error);
// // // //       }
// // // //     }
// // // //   }
  
// // // //   // Application startup and usage
// // // //   (async function main() {
// // // //     // Initialize services and components
// // // //     const weatherService = new WeatherService('your-api-key-here');
// // // //     const outfitRecommender = new OutfitRecommender(weatherService);
// // // //     const ui = new OutfitRecommendationUI(outfitRecommender);
    
// // // //     // Example of using specific weather
// // // //     // Similar to the original code but using the OOP structure
// // // //     const currentWeather = "sunny"; // This could come from user input or API
// // // //     ui.showRecommendationForWeather(currentWeather);
    
// // // //     // Example of location-based recommendation (async)
// // // //     await ui.showRecommendationForLocation("New York, NY");
// // // //   })();
// // // /**
// // //  * @fileoverview Pizza Ordering System
// // //  * A complete pizza ordering system with order tracking, inventory management,
// // //  * and analytics capabilities following industry standards.
// // //  * @author Generated by GitHub Copilot
// // //  * @version 1.0.0
// // //  */

// // // /**
// // //  * Enumeration of pizza sizes
// // //  * @readonly
// // //  * @enum {string}
// // //  */
// // // const PizzaSize = {
// // //     SMALL: 'small',
// // //     MEDIUM: 'medium',
// // //     LARGE: 'large',
// // //     EXTRA_LARGE: 'extra-large'
// // //   };
  
// // //   /**
// // //    * Enumeration of order statuses
// // //    * @readonly
// // //    * @enum {string}
// // //    */
// // //   const OrderStatus = {
// // //     RECEIVED: 'received',
// // //     PREPARING: 'preparing',
// // //     BAKING: 'baking',
// // //     READY: 'ready',
// // //     DELIVERED: 'delivered',
// // //     CANCELLED: 'cancelled'
// // //   };
  
// // //   /**
// // //    * Class representing a pizza
// // //    */
// // //   class Pizza {
// // //     /**
// // //      * Create a pizza
// // //      * @param {string} name - The name of the pizza
// // //      * @param {PizzaSize} size - The size of the pizza
// // //      * @param {Array<string>} toppings - Toppings for the pizza
// // //      * @param {boolean} isVegetarian - Whether the pizza is vegetarian
// // //      */
// // //     constructor(name, size, toppings = [], isVegetarian = false) {
// // //       this.id = Math.random().toString(36).substr(2, 9);
// // //       this.name = name;
// // //       this.size = size;
// // //       this.toppings = [...toppings];
// // //       this.isVegetarian = isVegetarian;
// // //       this.basePrice = this.calculateBasePrice();
// // //     }
  
// // //     /**
// // //      * Calculate the base price of the pizza
// // //      * @returns {number} - The base price
// // //      * @private
// // //      */
// // //     calculateBasePrice() {
// // //       const basePrices = {
// // //         [PizzaSize.SMALL]: 8.99,
// // //         [PizzaSize.MEDIUM]: 10.99,
// // //         [PizzaSize.LARGE]: 12.99,
// // //         [PizzaSize.EXTRA_LARGE]: 14.99,
// // //       };
  
// // //       return basePrices[this.size] || basePrices[PizzaSize.MEDIUM];
// // //     }
  
// // //     /**
// // //      * Calculate the total price of the pizza including toppings
// // //      * @returns {number} - Total price
// // //      */
// // //     calculateTotalPrice() {
// // //       // Each topping costs $1.50
// // //       const toppingPrice = 1.50;
// // //       const toppingsTotal = this.toppings.length * toppingPrice;
      
// // //       return this.basePrice + toppingsTotal;
// // //     }
  
// // //     /**
// // //      * Get a description of the pizza
// // //      * @returns {string} - Description
// // //      */
// // //     getDescription() {
// // //       return `${this.name} (${this.size}) with ${this.toppings.join(', ') || 'no extra toppings'}`;
// // //     }
// // //   }
  
// // //   /**
// // //    * Class representing a customer
// // //    */
// // //   class Customer {
// // //     /**
// // //      * Create a customer
// // //      * @param {string} name - Customer name
// // //      * @param {string} phone - Customer phone number
// // //      * @param {string} address - Customer address
// // //      */
// // //     constructor(name, phone, address) {
// // //       this.id = Math.random().toString(36).substr(2, 9);
// // //       this.name = name;
// // //       this.phone = phone;
// // //       this.address = address;
// // //       this.orderHistory = [];
// // //     }
  
// // //     /**
// // //      * Add an order to customer history
// // //      * @param {string} orderId - ID of the order
// // //      */
// // //     addOrderToHistory(orderId) {
// // //       this.orderHistory.push(orderId);
// // //     }
// // //   }
  
// // //   /**
// // //    * Class representing a single order
// // //    */
// // //   class Order {
// // //     /**
// // //      * Create an order
// // //      * @param {Customer} customer - Customer who placed the order
// // //      * @param {Array<Pizza>} pizzas - Pizzas in the order
// // //      */
// // //     constructor(customer, pizzas = []) {
// // //       this.id = Math.random().toString(36).substr(2, 9);
// // //       this.customer = customer;
// // //       this.pizzas = [...pizzas];
// // //       this.status = OrderStatus.RECEIVED;
// // //       this.timestamp = new Date();
// // //       this.lastUpdated = new Date();
// // //       this.totalAmount = 0;
// // //       this.calculateTotal();
// // //     }
  
// // //     /**
// // //      * Add a pizza to the order
// // //      * @param {Pizza} pizza - Pizza to add
// // //      */
// // //     addPizza(pizza) {
// // //       this.pizzas.push(pizza);
// // //       this.calculateTotal();
// // //       this.lastUpdated = new Date();
// // //     }
  
// // //     /**
// // //      * Remove a pizza from the order
// // //      * @param {string} pizzaId - ID of pizza to remove
// // //      * @returns {boolean} - Whether removal was successful
// // //      */
// // //     removePizza(pizzaId) {
// // //       const initialLength = this.pizzas.length;
// // //       this.pizzas = this.pizzas.filter(pizza => pizza.id !== pizzaId);
      
// // //       if (initialLength !== this.pizzas.length) {
// // //         this.calculateTotal();
// // //         this.lastUpdated = new Date();
// // //         return true;
// // //       }
      
// // //       return false;
// // //     }
  
// // //     /**
// // //      * Update the order status
// // //      * @param {OrderStatus} status - New status
// // //      */
// // //     updateStatus(status) {
// // //       if (!Object.values(OrderStatus).includes(status)) {
// // //         throw new Error(`Invalid status: ${status}`);
// // //       }
      
// // //       this.status = status;
// // //       this.lastUpdated = new Date();
// // //     }
  
// // //     /**
// // //      * Calculate the total amount for the order
// // //      */
// // //     calculateTotal() {
// // //       this.totalAmount = this.pizzas.reduce(
// // //         (sum, pizza) => sum + pizza.calculateTotalPrice(), 
// // //         0
// // //       );
      
// // //       // Apply tax (8.5%)
// // //       this.totalAmount = parseFloat((this.totalAmount * 1.085).toFixed(2));
// // //     }
  
// // //     /**
// // //      * Get order summary
// // //      * @returns {Object} - Order summary
// // //      */
// // //     getSummary() {
// // //       return {
// // //         id: this.id,
// // //         customer: this.customer.name,
// // //         pizzas: this.pizzas.map(pizza => pizza.getDescription()),
// // //         status: this.status,
// // //         timestamp: this.timestamp,
// // //         totalAmount: this.totalAmount,
// // //       };
// // //     }
// // //   }
  
// // //   /**
// // //    * Class for managing pizza orders
// // //    */
// // //   class PizzaOrderManager {
// // //     constructor() {
// // //       this.orders = new Map();
// // //       this.customers = new Map();
// // //       this.statistics = {
// // //         totalOrders: 0,
// // //         totalRevenue: 0,
// // //         popularToppings: {},
// // //         popularSizes: {},
// // //       };
// // //     }
  
// // //     /**
// // //      * Create a new customer
// // //      * @param {string} name - Customer name
// // //      * @param {string} phone - Customer phone
// // //      * @param {string} address - Customer address
// // //      * @returns {Customer} - New customer
// // //      */
// // //     createCustomer(name, phone, address) {
// // //       const customer = new Customer(name, phone, address);
// // //       this.customers.set(customer.id, customer);
// // //       return customer;
// // //     }
  
// // //     /**
// // //      * Get a customer by ID
// // //      * @param {string} id - Customer ID
// // //      * @returns {Customer|null} - Customer or null if not found
// // //      */
// // //     getCustomer(id) {
// // //       return this.customers.get(id) || null;
// // //     }
  
// // //     /**
// // //      * Create a new order
// // //      * @param {Customer} customer - Customer
// // //      * @param {Array<Pizza>} pizzas - Pizzas to order
// // //      * @returns {Order} - New order
// // //      */
// // //     createOrder(customer, pizzas = []) {
// // //       if (!this.customers.has(customer.id)) {
// // //         this.customers.set(customer.id, customer);
// // //       }
      
// // //       const order = new Order(customer, pizzas);
// // //       this.orders.set(order.id, order);
      
// // //       // Update statistics
// // //       this.statistics.totalOrders++;
// // //       this.statistics.totalRevenue += order.totalAmount;
      
// // //       // Update pizza size statistics
// // //       pizzas.forEach(pizza => {
// // //         this.statistics.popularSizes[pizza.size] = (this.statistics.popularSizes[pizza.size] || 0) + 1;
        
// // //         // Update topping statistics
// // //         pizza.toppings.forEach(topping => {
// // //           this.statistics.popularToppings[topping] = (this.statistics.popularToppings[topping] || 0) + 1;
// // //         });
// // //       });
      
// // //       customer.addOrderToHistory(order.id);
      
// // //       return order;
// // //     }
  
// // //     /**
// // //      * Get an order by ID
// // //      * @param {string} id - Order ID
// // //      * @returns {Order|null} - Order or null if not found
// // //      */
// // //     getOrder(id) {
// // //       return this.orders.get(id) || null;
// // //     }
  
// // //     /**
// // //      * Update order status
// // //      * @param {string} orderId - Order ID
// // //      * @param {OrderStatus} status - New status
// // //      * @returns {boolean} - Whether update was successful
// // //      */
// // //     updateOrderStatus(orderId, status) {
// // //       const order = this.orders.get(orderId);
      
// // //       if (order) {
// // //         order.updateStatus(status);
// // //         return true;
// // //       }
      
// // //       return false;
// // //     }
  
// // //     /**
// // //      * Get all orders
// // //      * @param {string} [status] - Filter by status
// // //      * @returns {Array<Order>} - Orders
// // //      */
// // //     getAllOrders(status = null) {
// // //       let orders = Array.from(this.orders.values());
      
// // //       if (status) {
// // //         orders = orders.filter(order => order.status === status);
// // //       }
      
// // //       return orders;
// // //     }
  
// // //     /**
// // //      * Get order statistics
// // //      * @returns {Object} - Statistics
// // //      */
// // //     getStatistics() {
// // //       return {
// // //         ...this.statistics,
// // //         averageOrderValue: this.statistics.totalOrders > 0 
// // //           ? (this.statistics.totalRevenue / this.statistics.totalOrders).toFixed(2) 
// // //           : 0,
// // //         mostPopularTopping: this.getMostPopular(this.statistics.popularToppings),
// // //         mostPopularSize: this.getMostPopular(this.statistics.popularSizes)
// // //       };
// // //     }
  
// // //     /**
// // //      * Get the most popular item from a counting object
// // //      * @param {Object} countObj - Object with counts
// // //      * @returns {string|null} - Most popular item
// // //      * @private
// // //      */
// // //     getMostPopular(countObj) {
// // //       if (Object.keys(countObj).length === 0) return null;
      
// // //       return Object.entries(countObj)
// // //         .sort((a, b) => b[1] - a[1])
// // //         [0][0];
// // //     }
// // //   }
  
// // //   // Export classes for use in other modules
// // //   module.exports = {
// // //     PizzaSize,
// // //     OrderStatus,
// // //     Pizza,
// // //     Customer,
// // //     Order,
// // //     PizzaOrderManager
// // //   };
  
// // //   // Example usage:
// // //   function demoOrderSystem() {
// // //     // Create the order manager
// // //     const orderManager = new PizzaOrderManager();
    
// // //     // Create a customer
// // //     const customer = orderManager.createCustomer(
// // //       "John Doe", 
// // //       "555-123-4567", 
// // //       "123 Main St, Anytown, USA"
// // //     );
    
// // //     // Create pizzas
// // //     const margherita = new Pizza(
// // //       "Margherita", 
// // //       PizzaSize.MEDIUM, 
// // //       ["extra cheese", "basil"], 
// // //       true
// // //     );
    
// // //     const pepperoni = new Pizza(
// // //       "Pepperoni", 
// // //       PizzaSize.LARGE, 
// // //       ["pepperoni", "extra cheese"]
// // //     );
    
// // //     // Create an order
// // //     const order = orderManager.createOrder(customer, [margherita, pepperoni]);
// // //     console.log("Order created:", order.getSummary());
    
// // //     // Update order status
// // //     orderManager.updateOrderStatus(order.id, OrderStatus.PREPARING);
// // //     console.log("Updated status:", orderManager.getOrder(order.id).status);
    
// // //     // Add another pizza to the order
// // //     const hawaiian = new Pizza(
// // //       "Hawaiian", 
// // //       PizzaSize.SMALL, 
// // //       ["ham", "pineapple"]
// // //     );
    
// // //     order.addPizza(hawaiian);
// // //     console.log("Updated order:", order.getSummary());
    
// // //     // Get statistics
// // //     console.log("Order Statistics:", orderManager.getStatistics());
// // //   }
  
// // //   // Run the demo if this file is executed directly
// // //   // if (require.main === module) {
// // //   //   demoOrderSystem();
// // //   // }

// class Factorial {
//     get(n: number): number {
//         let fact: number = 1;
//         for (let i: number = 1; i <= n; i++) {
//             fact *= i;
//         }
//         return fact;
//     }
// }

// class FactorialSum {
//     private factorial: Factorial; // TS: private — can only be accessed within this class

//     constructor() {
//         this.factorial = new Factorial();
//     }

//     sum(n: number): number {
//         let sum: number = 0;
//         for (let i: number = 1; i <= n; i++) {
//             sum += this.factorial.get(i);
//         }
//         return sum;
//     }
// }

// let factorialSum: FactorialSum = new FactorialSum();
// console.log(factorialSum.sum(5)); // 153
// console.log(factorialSum.sum(6)); // 873
// console.log(factorialSum.sum(7)); // 5913
// console.log(factorialSum.sum(8)); // 46233
// console.log(factorialSum.sum(9)); // 409113

// /**
//  * Weather Outfit Recommendation System
//  * This application provides outfit recommendations based on weather conditions.
//  * Implemented using SOLID principles and object-oriented design patterns.
//  */

// // TS: `enum` replaces the plain JS object const — gives you type safety, autocomplete,
// // and prevents passing arbitrary strings where a WeatherType is expected
// enum WeatherType {
//     SUNNY   = 'sunny',
//     RAINY   = 'rainy',
//     CLOUDY  = 'cloudy',
//     SNOWY   = 'snowy',
//     WINDY   = 'windy',
//     STORMY  = 'stormy',
//     UNKNOWN = 'unknown'
// }

// // TS: Interface defines the exact shape of every recommendation object.
// // Any strategy that returns a recommendation MUST include all these fields.
// interface OutfitRecommendation {
//     headwear    : string;
//     topwear     : string;
//     bottomwear  : string;
//     footwear    : string;
//     accessories : string;
//     message     : string;
//     weatherType?: WeatherType | string; // optional — added later by OutfitRecommender
// }

// /**
//  * Strategy Pattern: Abstract base class for outfit recommendation strategies.
//  * TS: `abstract` keyword enforces that this class can never be instantiated directly.
//  * Every subclass MUST implement `getRecommendation()` or the compiler throws an error.
//  */
// abstract class OutfitRecommendationStrategy {
//     abstract getRecommendation(): OutfitRecommendation;
// }

// // TS: Each strategy class extends the abstract base and provides a concrete implementation.
// // Return type `OutfitRecommendation` is enforced — wrong shape = compile error.

// class SunnyWeatherStrategy extends OutfitRecommendationStrategy {
//     getRecommendation(): OutfitRecommendation {
//         return {
//             headwear   : 'hat and sunglasses',
//             topwear    : 'light t-shirt',
//             bottomwear : 'shorts or light pants',
//             footwear   : 'sandals or sneakers',
//             accessories: 'sunscreen, water bottle',
//             message    : 'Wear a hat and sunglasses, light clothing, and apply sunscreen to protect from UV rays.'
//         };
//     }
// }

// class RainyWeatherStrategy extends OutfitRecommendationStrategy {
//     getRecommendation(): OutfitRecommendation {
//         return {
//             headwear   : 'rain hat or hood',
//             topwear    : 'waterproof jacket',
//             bottomwear : 'water-resistant pants',
//             footwear   : 'rain boots',
//             accessories: 'umbrella',
//             message    : 'Bring an umbrella and wear boots with waterproof clothing.'
//         };
//     }
// }

// class CloudyWeatherStrategy extends OutfitRecommendationStrategy {
//     getRecommendation(): OutfitRecommendation {
//         return {
//             headwear   : 'none or light cap',
//             topwear    : 'light jacket or sweater',
//             bottomwear : 'jeans or casual pants',
//             footwear   : 'sneakers or casual shoes',
//             accessories: 'none',
//             message    : 'Wear a light jacket and comfortable clothing as temperature may vary.'
//         };
//     }
// }

// class SnowyWeatherStrategy extends OutfitRecommendationStrategy {
//     getRecommendation(): OutfitRecommendation {
//         return {
//             headwear   : 'beanie or winter hat',
//             topwear    : 'heavy winter coat',
//             bottomwear : 'thermal pants',
//             footwear   : 'insulated snow boots',
//             accessories: 'gloves, scarf',
//             message    : "Bundle up with warm layers, insulated boots, and don't forget gloves and a hat."
//         };
//     }
// }

// class WindyWeatherStrategy extends OutfitRecommendationStrategy {
//     getRecommendation(): OutfitRecommendation {
//         return {
//             headwear   : 'secure hat or cap',
//             topwear    : 'windbreaker jacket',
//             bottomwear : 'fitted pants',
//             footwear   : 'closed shoes',
//             accessories: 'none',
//             message    : 'Wear windproof clothing and avoid loose items that may blow away.'
//         };
//     }
// }

// class DefaultWeatherStrategy extends OutfitRecommendationStrategy {
//     getRecommendation(): OutfitRecommendation {
//         return {
//             headwear   : 'optional',
//             topwear    : 'comfortable shirt',
//             bottomwear : 'comfortable pants',
//             footwear   : 'comfortable shoes',
//             accessories: 'none',
//             message    : 'Wear what you have on - dress comfortably for the day.'
//         };
//     }
// }

// /**
//  * Factory for creating the appropriate weather strategy.
//  * TS: `static` method typed to always return `OutfitRecommendationStrategy`.
//  * The parameter is typed as `string` (not WeatherType) to handle unknown/raw API input gracefully.
//  */
// class WeatherStrategyFactory {
//     static createStrategy(weatherType: string): OutfitRecommendationStrategy {
//         switch (weatherType.toLowerCase()) {
//             case WeatherType.SUNNY  : return new SunnyWeatherStrategy();
//             case WeatherType.RAINY  : return new RainyWeatherStrategy();
//             case WeatherType.CLOUDY : return new CloudyWeatherStrategy();
//             case WeatherType.SNOWY  : return new SnowyWeatherStrategy();
//             case WeatherType.WINDY  : return new WindyWeatherStrategy();
//             default                 : return new DefaultWeatherStrategy();
//         }
//     }
// }

// /**
//  * Weather Service for fetching current weather data.
//  * TS: `apiKey` is typed as `string | null` — explicitly models the case where no key is provided.
//  */
// class WeatherService {
//     private apiKey: string | null; // private — external code should never read/set this directly

//     constructor(apiKey: string | null = null) {
//         this.apiKey = apiKey;
//     }

//     /**
//      * Gets the current weather for a location.
//      * @param location - The location to get weather for
//      * @returns A promise that resolves to the weather type string
//      * TS: Return type is `Promise<string>` — async functions must always declare their resolved type
//      */
//     async getCurrentWeather(location: string): Promise<string> {
//         try {
//             if (this.apiKey) {
//                 // In a real app, this would make an actual API call:
//                 // return await fetch(`https://api.weatherservice.com/current?location=${encodeURIComponent(location)}&apiKey=${this.apiKey}`)
//                 //   .then(response => response.json())
//                 //   .then(data => data.weatherType);
//             }

//             // For demonstration, return a mock result.
//             // In a real application, this would come from the API.
//             const mockWeatherTypes: WeatherType[] = [
//                 WeatherType.SUNNY,
//                 WeatherType.RAINY,
//                 WeatherType.CLOUDY,
//                 WeatherType.SNOWY,
//                 WeatherType.WINDY
//             ];
//             return Promise.resolve(
//                 mockWeatherTypes[Math.floor(Math.random() * mockWeatherTypes.length)]
//             );
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//             return Promise.resolve(WeatherType.UNKNOWN);
//         }
//     }
// }

// /**
//  * Outfit Recommender — Core application functionality.
//  * TS: Constructor parameter typed as `WeatherService` — enforces dependency injection correctly.
//  */
// class OutfitRecommender {
//     private weatherService: WeatherService;

//     constructor(weatherService: WeatherService) {
//         this.weatherService = weatherService;
//     }

//     /**
//      * Gets outfit recommendations for the given location.
//      * @param location - The location to get recommendations for
//      * @returns Promise resolving to an OutfitRecommendation object
//      */
//     async getRecommendationForLocation(location: string): Promise<OutfitRecommendation> {
//         try {
//             const weatherType: string = await this.weatherService.getCurrentWeather(location);
//             return this.getRecommendationForWeather(weatherType);
//         } catch (error) {
//             console.error('Error getting recommendation:', error);
//             return new DefaultWeatherStrategy().getRecommendation();
//         }
//     }

//     /**
//      * Gets outfit recommendations for the given weather type.
//      * @param weatherType - The weather type string
//      * @returns An OutfitRecommendation object with weatherType field attached
//      */
//     getRecommendationForWeather(weatherType: string): OutfitRecommendation {
//         const strategy: OutfitRecommendationStrategy = WeatherStrategyFactory.createStrategy(weatherType);
//         const recommendation: OutfitRecommendation   = strategy.getRecommendation();
//         recommendation.weatherType = weatherType; // attach weatherType for display use
//         return recommendation;
//     }
// }

// /**
//  * User Interface for the application.
//  * TS: Constructor typed to accept only `OutfitRecommender` — ensures correct wiring at compile time.
//  */
// class OutfitRecommendationUI {
//     private recommender: OutfitRecommender;

//     constructor(recommender: OutfitRecommender) {
//         this.recommender = recommender;
//     }

//     /**
//      * Displays outfit recommendation in the console.
//      * @param recommendation - The OutfitRecommendation object to display
//      * TS: Parameter is strongly typed — passing wrong shape = compile error
//      */
//     displayRecommendation(recommendation: OutfitRecommendation): void { // void = no return value
//         console.log(`\n=== OUTFIT RECOMMENDATION FOR ${recommendation.weatherType?.toUpperCase()} WEATHER ===`);
//         console.log(`Headwear   : ${recommendation.headwear}`);
//         console.log(`Top        : ${recommendation.topwear}`);
//         console.log(`Bottom     : ${recommendation.bottomwear}`);
//         console.log(`Footwear   : ${recommendation.footwear}`);
//         console.log(`Accessories: ${recommendation.accessories}`);
//         console.log(`\nSuggestion : ${recommendation.message}\n`);
//     }

//     /**
//      * Gets and displays recommendation for a location.
//      * @param location - The location to get recommendation for
//      * TS: `async` method returns `Promise<void>` — async but produces no meaningful resolved value
//      */
//     async showRecommendationForLocation(location: string): Promise<void> {
//         try {
//             console.log(`Fetching weather data for ${location}...`);
//             const recommendation: OutfitRecommendation = await this.recommender.getRecommendationForLocation(location);
//             this.displayRecommendation(recommendation);
//         } catch (error) {
//             console.error('Failed to show recommendation:', error);
//         }
//     }

//     /**
//      * Shows recommendation for a specific weather type.
//      * @param weatherType - The weather type string
//      */
//     showRecommendationForWeather(weatherType: string): void {
//         try {
//             console.log(`Getting outfit recommendation for ${weatherType} weather...`);
//             const recommendation: OutfitRecommendation = this.recommender.getRecommendationForWeather(weatherType);
//             this.displayRecommendation(recommendation);
//         } catch (error) {
//             console.error('Failed to show recommendation:', error);
//         }
//     }
// }

// // Application startup and usage
// // TS: IIFE typed as `async` returning `Promise<void>` — the outer function produces nothing
// (async function main(): Promise<void> {
//     // Initialize services and components
//     const weatherService   : WeatherService          = new WeatherService('your-api-key-here');
//     const outfitRecommender: OutfitRecommender        = new OutfitRecommender(weatherService);
//     const ui               : OutfitRecommendationUI   = new OutfitRecommendationUI(outfitRecommender);

//     // Example of using a specific weather type
//     const currentWeather: string = "sunny"; // Could come from user input or API
//     ui.showRecommendationForWeather(currentWeather);

//     // Example of location-based recommendation (async)
//     await ui.showRecommendationForLocation("New York, NY");
// })();
// Data Type: Primitive (Most simple or basic) Data Types-> null , Number -> Integer, Number -> Float, String, Boolean, BigInt, Symbol
//Non-Primitive Data Type: Object, Array, Function.
// Primitive Data Types are immutable (unchangeable) and Non-Primitive Data Types are mutable (changeable).
// Shallow copy: /*# Shallow Copy in JavaScript

// A shallow copy creates a new object or array, but doesn't copy nested objects/arrays. Instead, it copies references to those nested objects/arrays.

// ## Key Characteristics of Shallow Copy

// 1. **First-level properties** are copied as new values
// 2. **Nested objects/arrays** are copied as references to the original objects/arrays
// 3. **Changes to nested objects** in the copy will affect the original (and vice versa)

// ## Methods to Create Shallow Copies

// ### For Objects

// ```javascript
// // Using Object.assign()
// const original = { name: "John", address: { city: "New York" } };
// const copy = Object.assign({}, original);

// // Using spread syntax (...)
// const copy2 = { ...original };
// ```

// ### For Arrays

// ```javascript
// // Using slice()
// const originalArray = [1, 2, [3, 4]];
// const copyArray = originalArray.slice();

// // Using spread syntax (...)
// const copyArray2 = [...originalArray];

// // Using Array.from()
// const copyArray3 = Array.from(originalArray);
// ```

// ## Example Demonstrating Shallow Copy Behavior

// ```javascript
// // Create an original object with nested object
// const user = {
//   name: "Alice",
//   contact: {
//     email: "alice@example.com",
//     phone: "123-456-7890"
//   }
// };

// // Create a shallow copy
// const userCopy = { ...user };

// // Modify a top-level property (creates a new value)
// userCopy.name = "Bob";
// console.log(user.name);      // "Alice" (original unchanged)
// console.log(userCopy.name);  // "Bob" (copy changed)

// // Modify a nested object property (modifies shared reference)
// userCopy.contact.email = "bob@example.com";
// console.log(user.contact.email);      // "bob@example.com" (original changed!)
// console.log(userCopy.contact.email);  // "bob@example.com" (copy changed)
// ```

// ## Contrast with Deep Copy

// A deep copy creates entirely new copies of nested objects/arrays, ensuring that modifications to any level of the copy don't affect the original.

// To create a deep copy:

// ```javascript
// // Simple but limited to JSON-serializable data
// const deepCopy = JSON.parse(JSON.stringify(original));

// // Or using libraries like lodash
// // const deepCopy = _.cloneDeep(original);
// ```
/**# Deep Copy in JavaScript

A deep copy creates completely independent copies of nested objects or arrays, ensuring modifications to any level of the copied structure don't affect the original.

## Key Characteristics of Deep Copy

1. **All levels of properties** are copied as new values
2. **Nested objects/arrays** are copied completely, not just references
3. **Changes at any level** in the copy won't affect the original (and vice versa)

## Methods to Create Deep Copies

### Using JSON Methods (Simple Approach)

```javascript
// Using JSON.parse and JSON.stringify
const original = { 
  name: "John", 
  address: { city: "New York" },
  hobbies: ["reading", "swimming"]
};
const deepCopy = JSON.parse(JSON.stringify(original));
```

**Limitations:**
- Cannot copy functions, undefined values, symbols, or circular references
- Loses date objects (converts to strings)
- May have performance issues with large objects

### Using Structured Clone API (Modern Browsers)

```javascript
// Modern approach available in newer browsers
const deepCopy = structuredClone(original);
```

**Benefits:**
- Handles circular references
- Preserves most built-in types (Maps, Sets, Dates, etc.)
- Usually better performance than JSON approach

### Using Libraries

```javascript
// Using lodash
const deepCopy = _.cloneDeep(original);

// Using Ramda
const deepCopy = R.clone(original);
```

## Example Demonstrating Deep Copy Behavior

  */
// ## Implications for Your Code

// In your `Profile` class, if you create a shallow copy of a profile instance, changes to nested objects like `personalInfo.contact` would affect both the copy and the original. This is important to consider when manipulating complex data structures like your profile objects.*/
//

// Data Structure
// Data Processing -> Conditional Statements, Loops 
// Data Validation
// Data Manipulation

/**
 * @typedef {Object} ProfileData
 * @property {string} name - Person's full name
 * @property {number} age - Person's age
 * @property {string} city - City of residence
 * @property {string} country - Country of residence
 * @property {string} dob - Date of birth (YYYY-MM-DD)
 * @property {string} email - Contact email address
 * @property {string} phone - Contact phone number
 * @property {string} clg - College/University name
 * @property {string} degree - Degree name
 * @property {number} passout - Graduation year
 * @property {string} company - Current company name
 * @property {string} designation - Current job title
 * @property {number} exp - Years of experience
 * @property {boolean} isPaid - Payment status
 * @property {string} favoriteClass - Preferred subject
 * @property {string[]} skills - Technical skills
 */

// Available skills
const SKILLS: string[] = ["HTML", "CSS", "JS"]; // TS: string[] — array of strings
let minage: number = 18;                         // TS: number

/**
 * Profile class for managing personal, educational and professional information
 */
class Profile {

    // TS: All instance fields declared with types at the top of the class.
    // This is required in TS — without declarations, `this.name` etc. in the
    // constructor would cause "Property does not exist on type" errors.
    name        : string;
    age         : number;
    city        : string;
    country     : string;
    dob         : string;
    email       : string;
    phone       : string;
    clg         : string;
    degree      : string;
    passout     : number;
    company     : string;
    designation : string;
    exp         : number;
    isPaid      : boolean;
    favoriteClass: string | undefined; // TS: `undefined` union — because person.favoriteClass = undefined is done below
    skills      : string[];            // TS: string[] — array of strings

    /**
     * Creates a new profile
     * @param name - Person's name
     * @param age - Person's age
     * @param city - City of residence
     * @param country - Country of residence
     * @param dob - Date of birth
     * @param email - Contact email
     * @param phone - Contact phone
     * @param clg - College name
     * @param degree - Degree type
     * @param passout - Graduation year
     * @param company - Company name
     * @param designation - Job title
     * @param exp - Years of experience
     * @param isPaid - Payment status
     * @param favoriteClass - Favorite subject
     * @param skills - Technical skills
     */
    constructor(
        name        : string,
        age         : number,
        city        : string,
        country     : string,
        dob         : string,
        email       : string,
        phone       : string,
        clg         : string,
        degree      : string,
        passout     : number,
        company     : string,
        designation : string,
        exp         : number,
        isPaid      : boolean,
        favoriteClass: string,
        skills      : string[]  // TS: string[] — array of strings
    ) {
        this.name         = name;
        this.age          = age;
        this.city         = city;
        this.country      = country;
        this.dob          = dob;
        this.email        = email;
        this.phone        = phone;
        this.clg          = clg;
        this.degree       = degree;
        this.passout      = passout;
        this.company      = company;
        this.designation  = designation;
        this.exp          = exp;
        this.isPaid       = isPaid;
        this.favoriteClass = favoriteClass;
        this.skills       = skills;
    }

    /**
     * Generates a structured object representation of the profile
     * @returns Organized profile information as a nested object
     * TS: Return type is an inline object type describing the exact nested shape
     */
    profileIndividual = (): {
        personalInfo: {
            name       : string;
            age        : number;
            isPaid     : boolean;
            dateOfBirth: string;
            contact    : { email: string; phone: string };
            location   : { city: string; country: string };
        };
        education: {
            college        : string;
            degree         : string;
            graduationYear : number;
            favoriteClass  : string | undefined; // TS: can be undefined after assignment below
        };
        professional: {
            currentCompany    : string;
            designation       : string;
            yearsOfExperience : number;
            skills            : string[];
        };
    } => {
        return {
            personalInfo: {
                name       : this.name,
                age        : this.age,
                isPaid     : this.isPaid,
                dateOfBirth: this.dob,
                contact    : {
                    email: this.email,
                    phone: this.phone
                },
                location   : {
                    city   : this.city,
                    country: this.country
                }
            },
            education: {
                college       : this.clg,
                degree        : this.degree,
                graduationYear: this.passout,
                favoriteClass : this.favoriteClass
            },
            professional: {
                currentCompany   : this.company,
                designation      : this.designation,
                yearsOfExperience: this.exp,
                skills           : this.skills,
            }
        };
    }
}

// Create a new profile instance
// person is a reference to the object in memory
const person: Profile = new Profile( // TS: typed as Profile — the class itself is the type
    "Rohit",                                          // String - "",'',``
    20,                                               // Number - Integer
    "Kolkata",                                        // String - "",'',``
    "India",                                          // String - "",'',``
    "2004-07-15",                                     // String - "",'',``
    "rohit@example.com",                              // String - "",'',`` Special Characters Included
    "9123456789",                                     // String - "",'',``
    "Maulana Abul Kalam Azad University of Technology", // String - "",'',``
    "Computer Science with AIML",                     // String - "",'',``
    2026,                                             // Number
    "TCS",                                            // String - "",'',``
    "Software Development Practitioner",              // String - "",'',``
    2.5,                                              // Number - Float
    true,                                             // Boolean - true/false
    "backend",                                        // String - "",'',``
    ["HTML", "CSS", "JS"]                             // Array
);

console.log(person.profileIndividual());
console.log(typeof(person.favoriteClass));
person.favoriteClass = undefined; // TS: valid because favoriteClass is typed as `string | undefined`
console.log(person.profileIndividual());
console.log(typeof(person.favoriteClass));
console.log(typeof(person.isPaid));
console.log(typeof(person.skills));
// in object , if key is not present then it will be undefined , key: value pairs in memory
// in array , the first key is 0, second is 1, third is 2 and so on