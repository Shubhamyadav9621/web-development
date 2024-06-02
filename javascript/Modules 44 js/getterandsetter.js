
class Product {

    // properties -> variables -> data member
   // name;
    // price;
    // rating;
    #rating;
    constructor(n,p,r){
        console.log("calling the constructor");
        this.name = n;
        this.price = p;
        this.rating = r;

        // return 10; if you're returning primitive then it will be avoided in constructor

       
       //  return {x: 0,y:20} // if you return non primitive then it will be returned

    }

    static custom (){
        console.log("calling a static method")
    }

    getRating(){
        console.log("calling a static method");
    }
    setRating(r){
        if(r<0) return;
        this.#rating = r;
    }

    // behaviours-> functions -> member function

    display(){
        console.log("this refers to",this.name , this.price,this.rating);
        console.log("displaying the current product");
    }
}

const p = new Product("iphone",10000,5); // new -> creats an empty plain object
// -> in the above piece of code we are calling the constructor method


console.log(p);
p.setRating(10);
p.getRating()
p.display();
Product.custom()