class car{
    constructor(name,model)
    {
        this.name=name;
        this.model=model;
    }
};
const mycar=new car("honda" ,2016);
console.log(mycar);
// inheritance 


class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is${this.username}`)
    }
};
class teacher extends user{
    constructor(username,password,email){
       super(username)
       this.password=password
       this.email=email
    }
    addcourse(){
        console.log(`course will be added by ${this.username}`)
    }
}

const myclass=new teacher("iftikhar","iffi123","iftikharrj2001@gmail.com");
 myclass.addcourse();
  console.log(myclass);