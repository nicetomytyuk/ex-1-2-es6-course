import { Person } from "./person.js";

export class Student extends Person {
    constructor(name, surname, age, favSubjects) {
        super(name, surname, age)
        this.favSubjects = favSubjects
    }
}