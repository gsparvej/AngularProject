import { Designation } from "./designation.model";

export class Department {

    id !: string;
    name !: string;
    designations: Designation[];
    
    constructor(id: string,name: string,designations: Designation[] = []){

        this.id = id;
        this.name = name;
        this.designations = designations;
    }
    
}
