class Cars{
    constructor(carName,carColor,carPrice){
        this.cName=carName;
        this.cColor=carColor;
        this.cPrice=carPrice;
    };
    static carOwner(){    // This is a static method & can be only access by the name of class
        return "Kunal is owner of all the cars";
    }
    static carSpeed= "300kmph";  // This is a static property & can be only access by the name of class

   get carInfo(){
        return `${this.cName} is in ${this.cColor} color and it's price is ${this.cPrice}`;
    };
    set CARinfo(cInfo){
      const[cName,cColor,cPrice] = cInfo.split(" ");
      this.cName=cName;
      this.cColor=cColor;
      this.cPrice=cPrice;
    }
}
const car1= new Cars("Rolls-Royals","Black","$300k") //While accessing the properties of an object we have to create a instance of the class and then only we are able to access the property.
//But we can access the properties or methods just by the name of class by using 'static' keyword
console.log(Cars.carOwner());
console.log(Cars.carSpeed);
console.log(car1.carInfo);
car1.CARinfo="Lamborgini red $200k";
console.log(car1.carInfo);
console.log(car1);