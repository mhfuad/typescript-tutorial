const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
  }
  
  let docsOne = addUID({name: 'yoshi', age: 40})
  //let docsTwo = addUID("fuad");
  //let docsTwo = addUID({name: "fuad"});
  console.log(docsOne.uid)
  
  //with interface
  interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T
  }
  
  const docsThree: Resource<object> = {
    uid: 1,
    resourceName: "person",
    data: {name: 'shaun'}
  }
  
  const docsFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
  }
  
  console.log(docsThree, docsFour)