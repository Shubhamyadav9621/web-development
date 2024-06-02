function Product (n,p,r){
    this.name  = n;
    this.price = p;
    this.rating = r;

}

const p = new Product("macbook",1500000,5);
console.log(p);

let x = {
    p: Product
};

x.p("airpods",20000,5);
console.log(x);

/**
 * 1. this keyword in js is diff than other languages
 * 2. this keyword refers to the context from where we called
 * 
 * in this function constructor also
 * - if you return primitive it is ignored and we return the object referred by this
 * - if you return a custom obj, then the custom obj is returned
 * - if you return a custom obj, then the custom obj is returned
 * - if you  dont return anything , then object referred by this is returned
 */