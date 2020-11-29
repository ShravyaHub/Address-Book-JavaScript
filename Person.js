const FIRST_NAME_REGEX = /^[A-Z][a-z]{2,}$/;
const LAST_NAME_REGEX = /^[A-Z][a-z]{2,}$/;
const ADDRESS_REGEX = /[a-z]{4,}/;
const CITY_REGEX = /[a-z]{4,}/;
const STATE_REGEX = /[a-z]{4,}/;
const ZIP_REGEX = /^[0-9]{6}$/;
const PHONE_NUMBER_REGEX = /^[9][1][ ][6-9][0-9]{9}$/;
const EMAIL_REGEX = /^([a-z0-9]+[-._+]?[a-z0-9]+)+@[a-z0-9-]+.[a-z]{2,3}.[a-z]{2,3}$/;
let personArray = new Array();

class Person {

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    set firstName(firstName){
        if(FIRST_NAME_REGEX.test(firstName))
            this.personFirstName = firstName;
        else throw "Invalid first name ";
    }
    get firstName(){
        return this.personFirstName;
    }
    set lastName(lastName){
        if(LAST_NAME_REGEX.test(lastName))
            this.personLastName = lastName;
        else throw "Invalid last name";
    }
    get lastName(){
        return this.personLastName;
    }
    set address(address){
        if(ADDRESS_REGEX.test(address))
            this.personAddress = address;
        else throw "Invalid address";
    }
    get address(){
        return this.personAddress;
    }
    set city(city){
        if(CITY_REGEX.test(city))
            this.personCity = city;
        else throw "Invalid city name";
    }
    get city(){
        return this.personCity;
    }
    set state(state){
        if(STATE_REGEX.test(state))
            this.personState = state;
        else throw "Invalid state";
    }
    get state(){
        return this.personState;
    }
    set zip(zip){
        if(ZIP_REGEX.test(zip))
            this.personZip = zip;
        else throw "Invalid zip code";
    }
    get zip(){
        return this.personZip;
    }
    set phoneNumber(phoneNumber){
        if(PHONE_NUMBER_REGEX.test(phoneNumber))
            this.personPhoneNumber = phoneNumber;
        else throw "Invalid phone number";
    }
    get phoneNumber(){
        return this.personPhoneNumber;
    }
    set email(email){
        if(EMAIL_REGEX.test(email))
            this.personEmail = email;
        else throw "Invalid email";
    }
    get email(){
        return this.personEmail;
    }

    toString() {
        return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email; 
    }
    
}
let personFound;

function findPerson(firstName, lastName) {
    personArray.forEach(person => {
        if(person.firstName == firstName && person.lastName == lastName)
            personFound = person;
    });
    if(personFound != null)
        console.log("Person Found: " + personFound.firstName + " " + personFound.lastName);
    else
        throw "Contact does not exist"
}

function editPerson(firstName, lastName, field, newValue) {
    findPerson(firstName, lastName);
    let person = personFound.firstName;
    personArray.forEach(person => {
        if(person.firstName == firstName && person.lastName == lastName)
        switch(field) {
            case "address": 
                person.address = newValue;
                break;
            case "city": 
                person.city = newValue;
                break;
            case "state": 
                person.state = newValue;
                break;
            case "zip": 
                person.zip = newValue;
                break;
            case "phone number": 
                person.phoneNumber = newValue;
                break;
            case "email": 
                person.email = newValue;
                break;
            default: 
                throw "Invalid choice";
        }
        });
    console.log(personArray);
}

function deletePerson(firstName, lastName) {
    let index = personArray.findIndex(person => person.firstName == firstName && person.lastName == lastName);
    if (index != -1) {
        personArray.splice(index, 1);
        console.log(personArray);
    } else 
        throw "Person does not exist in address book"
}

function addPerson(person) {
    if(personArray == null) {
        personArray.push(person);
    }
    personArray.forEach(eachPerson => {
        if(eachPerson.firstName == person.firstName && eachPerson.lastName == person.lastName)
            personFound = eachPerson;
    });
    if(personFound == null)
        personArray.push(person);
    else 
        throw "Person exists";
}

function findPersonCityOrState(locationField, location){
    switch(locationField) {
        case "city":
            console.log(personArray.filter(person => person.city == location));
            console.log("Number of conatcts in " + location + " is = " + personArray.filter(person => person.city == location).reduce(count => count + 1, 0));
        case "state":
            console.log(personArray.filter(person => person.state == location));
            console.log("Number of conatcts in " + location + " is = " + personArray.filter(person => person.state == location).reduce(count => count + 1, 0));
    }
}

let person1 = new Person("Shravya", "Kotha", "Bangalore", "Bangalore", "Karnataka", 560076, "91 9594633355", "shravya@gmail.com");
let person2 = new Person("Radhika", "Mantri", "Bangalore", "Bangalore", "Karnataka", 561076, "91 9594636355", "radhika@gmail.com");
let person3 = new Person("Priya", "Thygraj", "Hyderabad", "Hyderabad", "Andhra", 564076, "91 9594633155", "priya@gmail.com");

addPerson(person1);
addPerson(person2);
addPerson(person3);
console.log(personArray);

findPerson("Shravya", "Kotha");
editPerson("Shravya", "Kotha", "address", "J P Nagar");
deletePerson("Radhika", "Mantri");
console.log("Number of People in the address book is " + personArray.reduce(count => count + 1, 0)); 
findPersonCityOrState("city", "Bangalore");

