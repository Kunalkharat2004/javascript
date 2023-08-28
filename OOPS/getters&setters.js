class Circle{
    constructor(radius,name){
        this.Radius=radius;
        this.Name=name;
    };
set name(n){
    this.Name=n;
};
//A getter is a method that is used to retrieve the value of a specific property of an object. 
//You can access the methods as property. 
    get radius(){
        return `Radius is: ${this.Radius}`;
    };
    //A setter is a method that is used to modify the value of a specific property of an object.
// It allows you to define custom behavior when assigning a new value to a property. 
    set radius(newRadius){
        if(newRadius>0){
            this.Radius= newRadius;
        }
    }
    get area(){
        return `Area of circle when radius is ${this.radius} is ${Math.PI*this.Radius**2}`
    };
}
const rad1= new Circle(5,"kunal");
console.log(rad1.radius);    //When you access circle.radius, the getter is automatically invoked and returns the value of Radius
console.log(rad1.area);
rad1.radius=3;               //Modified the value of radius to 3 using setter
console.log(rad1.radius);
console.log(rad1.area);

console.log(rad1.Name);
rad1.name="Aaradhya";
console.log(rad1.Name);