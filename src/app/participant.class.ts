
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
    age: Number = 0;
    category: String = "";
    gender: String = "";
    constructor(initialFirstName : String, initialLastName){
        this.firstName = initialFirstName;
        this.lastName = initialLastName;
    }
}
export class DojoRep{
    constructor(
        public dojoName: string,public firstName : string, public lastName: string,
        public number : string, public email: string){            
    }
}