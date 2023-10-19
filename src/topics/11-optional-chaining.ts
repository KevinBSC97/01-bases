export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Kevin",
}

const passenger2: Passenger = {
    name: "Victoria",
    children: ['Natalia', 'Elizabeth'],
}

const returnChildrenNumber = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);
}

returnChildrenNumber(passenger1);