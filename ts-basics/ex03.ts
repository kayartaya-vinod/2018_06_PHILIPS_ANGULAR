export class Person {
    private id: number;
    private name: string;
    private city?: string;

    constructor(id:number, name:string, city:string='Bangalore') {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    print() {
        console.log('Id = %s', this.id);
        console.log('Name = %s', this.name);
        console.log('City = %s', this.city);
    }
}

// let p1 = new Person(1, 'Vinod');
// p1.print();