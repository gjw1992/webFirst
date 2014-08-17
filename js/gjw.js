/**
 * Created by Gary on 09/08/2014.
 */

( function(){
    console.log('Hi Gary! Still here.');

    var dte = new Date(2014,11,1,10,01);
    console.log( dte );
    var dte2 = new Date( Date.parse('2014-08-02'));
    console.log( dte2 );
    console.log( dte2.toDateString() );

    console.log('Hi Gary! Just to prove yet again...');
    var person = new Person('Walker','Gary',57);
    person.Hello();
    var uperson = new Person('Douglas','Christine',59);
    uperson.Hello();

    var operson = ObjPerson;
    operson.myFunct(91,'Jeremiah')
    console.log("Can I see:" + operson.aName + ' who is ' + operson.anObject );
    console.log("Can I see:" + ObjPerson.aName + ' who is ' + ObjPerson.anObject );

    var ocreate = Object.create( ObjPerson);
    ocreate.myFunct( 23,'Bohemoth');
    console.log("Just to confirm not changed this one - Can I see:" + ObjPerson.aName + ' who is ' + ObjPerson.anObject );
    console.log("And I can see:" + ocreate.aName + ' who is ' + ocreate.anObject );

})();
