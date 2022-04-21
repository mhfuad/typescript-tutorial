


class Tool {
    name: string;
    constructor(name: string){
        this.name = name
    }

    price(){
        console.log("$ 200");
    }
    
    @PrintDecorator()
    print(){
        console.log("Printing tool")
    }
}

function PrintDecorator(){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}