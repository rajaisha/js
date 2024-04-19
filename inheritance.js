class grandparents{
    constructor(){
        this.name=prompt("enter name :");
        this.profession=prompt("enter profession :")
    }
    getdetail(){
        console.log(this.name);
        console.log(this.profession);
    }
}
class parents extends grandparents{

}
class child extends parents{
    
}
let p1=new PerformanceObserverEntryList();
p1.getdetail()
