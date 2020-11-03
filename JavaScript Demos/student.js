var studentList=[

{
    name:'Raju',
    city:'Bangalore',
    hobbies:['music','sports'],
    mobile:9999

},

{

    name:'Roh',
    city:'Bangal',
    hobbies:['music','sports'],
    mobile:9999



},

{
name:'Venkat',

city:'Chennai',

hobbies:['dance','sports'],
mobile:98454


}


]

studentList.forEach(student=>{


    for(const prop in student){

        var stud=student[prop];
    
        if(stud instanceof Array){

            for(const i in stud){

                console.log('hobby:'+stud[i]);

            }
        }
            else{
                console.log(stud);

            }

        }
        });

