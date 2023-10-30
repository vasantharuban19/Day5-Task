// 1st Question.

// for
const myself = [{
    "name" : "Vasanth",
    "age" : 23,
    "gender" : "Male",
    "city" : "Neyveli"
},
{
    "name" : "Pk",
    "age" : 25,
    "gender" : "Male",
    "city" : "Madurai"
},
{
    "name" : "Prince",
    "age" : 25,
    "gender" : "Male",
    "city" : "Chennai"
}
];
for(var i=0;i<myself.length;i++){
    console.log(myself[i].name +"  "+ myself[i].age+" "+myself[i].gender+" "+myself[i].city)
}

// for in
const obj = {
    "name" : "sasee",
    "age" : 21,
    "gender" : "Male",
    "country" : "Russia"
}
for(var key in obj){
    console.log(key + ":"+obj[key]);
}

// for of
const obj2 =  [{
    "name" : "Ritz",
    "age" : 25,
    "gender" : "Male",
    "city" : "Madurai"
},
{
    "name" : "Wolf",
    "age" : 25,
    "gender" : "Male",
    "city" : "Chennai"
}
];
for(var item of obj2){
    console.log(item.name+":"+item.city);
}

// 2nd Question
const Resume = {
    "contact" : {
        "name" : "Vasantharuban S",
        "email" : "vas123@gmail.com",
        "phone" : "+91-9876543210",
        "summary" : "To obtain a creative and challenging position in an organization",
    },
    "education" : [{
        "institution": "Hindustan College of Engineering",
        "degree": "BE-Cse",
        "percentage": "70%",
    },
        {
            "institution" :"Vidhya vikas boys Higher Sec School",
            "degree" : "HSC",
            "percentage" :"60",
        },
        {
            "institution" : "Jawahar Matric HR Sec School",
            "degree" : "SSLC",
            "percentage" : "60",
        }],
    "soft skills" :["Creativity","communication","Well disciplined","Teamwork","Time Management","fast Learner"],
    "hard skills" :[{
        "title" : "JavaScript",
        "level" : "Intermediate"
    },
    {
        "title" : "Python",
        "level" : "Intermediate"
    },
    {
        "title" : "HTML",
        "level" : "Beginer"
    },
    {
        "title" : "CSS",
        "level" : "Beginer"
    }],
    "projects" : [{
        "projecttitle" : "Explore a face detection project through python"
    },
    {
        "projecttitle" : "Student Result Management System"
    },
    {
        "projecttitle" : "Detecting regions at risk for spreading COVID-19"
    }],
    "hobbies":["Playing chess","Solving cubes","listening to music"]
}
console.log(Resume);
for(var items in Resume){
    console.log(items)
}
