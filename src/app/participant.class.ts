
export const GenderStrings: Object = {
    male: "M",
    female: "F",
    trans: "T",
    unidentified: "U"
};

export class Participant {
    firstName: String = "";
    lastName: String = "";
    rank: String = "";
    Age: Number = 0;
    Category: String = "";
    Gender: String = "";
    constructor(initialFirstName : String, initialLastName){
        this.firstName = initialFirstName;
        this.lastName = initialLastName;
    }
}