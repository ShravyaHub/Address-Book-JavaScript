const FIRST_NAME_REGEX = new RegExp("^[A-Z][a-z]{2,}$");
const LAST_NAME_REGEX = /^[A-Z][a-z]{2,}$/;
const ADDRESS_REGEX = /^[A-Z][a-z]{3,}$/;
const CITY_REGEX = /^[A-Z][a-z]{3,}$/;
const STATE_REGEX = /^[A-Z][a-z]{3,}$/;
const ZIP_REGEX = /^[0-9]{6}$/;
const PHONE_NUMBER_REGEX = /^[9][1][ ][6-9][0-9]{9}$/;
const EMAIL_REGEX = /^([a-z0-9]+[-._+]?[a-z0-9]+)+@[a-z0-9-]+.[a-z]{2,3}.[a-z]{2,3}$/;

class Person{

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

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

    toString() {
        return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email; 
    }

}

let firstName = "Shravya", lastName = "Kotha", address = "Bangalore", city = "Bangalore", state = "Karnataka", zip = 560065, phoneNumber = "91 9591244433", email = "shravya@gmail.com";

if(FIRST_NAME_REGEX.test(firstName) && LAST_NAME_REGEX.test(lastName) && ADDRESS_REGEX.test(address) && CITY_REGEX.test(city) && STATE_REGEX.test(state) && ZIP_REGEX.test(zip) && PHONE_NUMBER_REGEX.test(phoneNumber) && EMAIL_REGEX.test(email)) {
    person = new Person(firstName, lastName, address, city, state, zip, phoneNumber, email);
    console.log(person.toString());
} else {
    if(!FIRST_NAME_REGEX.test(firstName)) {
        throw "Invalid first name"
    }
    if(!LAST_NAME_REGEX.test(lastName)) {
        throw "Invalid last name"
    }
    if(!ADDRESS_REGEX.test(address)) {
        throw "Invalid address"
    }
    if(!CITY_REGEX.test(city)) {
        throw "Invalid city"
    }
    if(!STATE_REGEX.test(state)) {
        throw "Invalid state"
    }
    if(!ZIP_REGEX.test(zip)) {
        throw "Invalid zip"
    }
    if(!PHONE_NUMBER_REGEX.test(phoneNumber)) {
        throw "Invalid phone number"
    }
    if(!EMAIL_REGEX.test(email)) {
        throw "Invalid email"
    }
}
    
