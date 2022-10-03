// Interfaces

// Similar to type, but is more commonly used to describe the ha

interface Person {
    name: string;
    age: number;
    speak(a: string): void
    spend(a: number): void
}

const me: Person = {
    name: "harley",
    age: 25,
    speak(text: string): void {
        console.log(text);
    },
    spend(a: number): number {
        console.log(`I spent ${a}`);
        return a;
    }
}

console.log(me);

// Using interface to ensure Dog class has an introduction method

interface hasIntroduction {
    introduction(): string;
}

// implements key word used to link the interface to the class

class Dog implements hasIntroduction {
    name: string
    age: number
    color: string
    gender: string
    isAggressive: boolean

    constructor(name: string, age: number, color: string , gender: string, isAgressive: boolean) {
        this.name = name,
        this.age = age,
        this.color = color,
        this.gender = gender,
        this.isAggressive = isAgressive
    }

    introduction() {
        return (`Hello, my name is ${this.name}, I am ${this.age} years old`);
    }
    
}

const megan = new Dog("megan", 14, "white", "male", false);

console.log(megan.introduction());


