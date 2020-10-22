/* let person = ['Nam', 19, 'Hanoi', 25, false]; */
/* console.log(person); */

/* let person = { */
/*    name: 'Nam' */
   
/* }; */
/* console.log(person); */

let person = {
   name: 'Nam',
   age: 19,
   favs: ['Netflix', 'Café', 'Code'],
};

/* console.log(person); */
/* console.log(person.age); */

/* let prop = 'name'; */
/* /1* console.log(person.prop); *1/ */
/* console.log(person['name']); */

/* console.log(person.name); */
/* person.name = 'Bruce Wayne'; */
/* console.log(person.name); */

/* console.log(person); */

/* console.log(person['age']); */
/* person['age'] = 20; */
/* console.log(person['age']); */

/* console.log(person); */

/* person.age++; */
/* person['age']++; */
/* console.log(person); */

/* console.log(person); */
/* person.location = 'Hanoi'; */
/* console.log(person); */

/* console.log(person); */
/* person['status'] = 'Single'; */
/* console.log(person); */

/* console.log(person); */
/* delete person.age; */
/* console.log(person); */

/* let person2 = { */
/*    name: 'Alfred', */
/*    age: 72, */
/* }; */

/* let personArr = []; */

/* console.log(personArr); */
/* personArr.push(person); */
/* personArr.push(person2); */
/* console.log(personArr); */

/* console.log(personArr[0]); */
/* let p = personArr[0]; */
/* console.log(p); */
/* console.log(p.name); */

/* console.log(personArr[0].name); */
/* let n =personArr[0].name; */
/* console.log(n); */

/* for (let i=0; i< personArr.length; i++) { */
/*   let p =personArr[i]; */
/*    console.log(p); */
/*    console.log(p.age); */
/* } */

/* console.log(person.favs[1]); */
let favs = person.favs;
console.log(favs);
for(let i = 0; i < favs.length; i++){
   console.log(favs[i]);
}
favs.push('Headphones');
console.log(favs);
console.log(person);

