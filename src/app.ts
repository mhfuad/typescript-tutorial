interface Isperson {
    name: string,
    age: number,
    speak(a: string ): void;
    spend(a: number): number;
}

const me: Isperson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number{
        console.log('I spent', amount)
        return amount
    }
}

const greetPerson = (person: Isperson) => {
    console.log(`hello ${person.name}`)
}

greetPerson(me);