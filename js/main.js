
function anAlert(msge) {
    alert("But can I change it? again?  This is a message: " + msge);

}

var Person = function(lastname,firstname,age) {
    anObj : "99" ;
    var lastname = lastname;
    var firstname =firstname;
    var age=age;
    var that = this ;

    this.Hello = function(){
        console.log('Hello, ' + firstname + ' ' + lastname );
        that.age = 21;
        console.log('Hello, are you sure you are only ' + that.age + '?' );
    };
};


var ObjPerson = {
    anObject : 23,
    aName : 'Ruddolph',

    myFunct : function(ao, an) {
        this.anObject = ao;
        this.aName = an ;
    }

};


window.onload = (function(){ alert('loaded'); document.getElementById('buttonx').onclick= function(){ alert('done it');}}) ;