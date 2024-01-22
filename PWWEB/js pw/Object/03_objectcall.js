// ager a object ko dusara ki merthod ko used karna hai then you are done by call apply bind

const person1 = {
    firstName : 'harshit',
    lastName : 'Doe',

}
const person2 = {
    fullName : function(city,country){
        console.log(`${this.firstName} ${this.lastName} lives in ${city},${country}`)
    }
}

// person2.fullName.call(person1,'NEW Delhi','india') //call marthod
// person2.fullName.apply(person1,['NEW Delhi','india']) //apply marthod

const bound = person2.fullName.bind(person1);
bound('new delhi','india')