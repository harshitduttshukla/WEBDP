// ager a object ko dusara ki merthod ko used karna hai then you are done by call appllay bid

const person1 = {
    firstName : 'harshit',
    lastName : 'Doe',

}
const person2 = {
    fullName : function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

person2.fullName.call(person1)
