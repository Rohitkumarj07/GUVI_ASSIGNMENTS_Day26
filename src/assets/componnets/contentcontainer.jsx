import { useLayoutEffect, useState } from "react";
import ContentCard from "./contentcard";
import { useParams } from "react-router-dom";






 
 
export default  function Contentcontainer(){

const {catogery} = useParams();
console.log(catogery);

    var [languaguedatas , setLanguageDatas] = useState([]);
var datas =
{
  "details": [
    {
      "name": "Python",
      "index": 1,
      "Catogery": "FSD",
      "image": "https://tse4.mm.bing.net/th?id=OIP.QkSSprAmEIPRhirfLO8L3QHaEK&pid=Api&P=0&h=220",
      "description": "Python is a high-level programming language known for its simplicity and readability. It is widely used in web development, data science."
    },
    {
      "name": "JavaScript",
      "index": 2,
      "Catogery": "Frontend",
      "image": "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo-2048x1280.png",
      "description": "JavaScript is a versatile scripting language used primarily for web development. It enables interactive web pages and is commonly used alongside HTML and CSS."
    },
    {
      "name": "Java",
      "index": 3,
      "Catogery": "FSD",
      "image": "https://tse1.mm.bing.net/th?id=OIP.5SWe47uPmqZTi4XDnchpSwHaHa&pid=Api&P=0&h=220",
      "description": "Java is a robust, object-oriented programming language commonly used for building enterprise-scale applications. It is known for its platform independence."
    },
    {
      "name": "C++",
      "index": 4,
      "Catogery": "FSD",
      "image": "https://tse1.mm.bing.net/th?id=OIP.bDyvLakYD-NkL7axrsgfKQHaDe&pid=Api&P=0&h=220",
      "description": "C++ is a powerful programming language often used for system/application software, game development, and performance-critical applications due to its efficiency."
    },
    {
      "name": "HTML",
      "index": 5,
      "Catogery": "Frontend",
      "image": "https://tse3.mm.bing.net/th?id=OIP.HGGPj09X7f4XHoR6DLLmEQHaEH&pid=Api&P=0&h=220",
      "description": "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages"
    },
    {
      "name": "SQL",
      "index": 6,
      "Catogery": "DataAnalytic",
      "image": "data:image/jpeg;base64,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",
      "description": "SQL is used to communicate with a database. According to ANSI (American National Standards Institute)"
    },
  ]
};

  
useLayoutEffect(() => {
  var maindatas = datas.details;
if(catogery ==='All'){
  
  setLanguageDatas(maindatas);
}


else if (catogery ==='FSD'){

  var datafsd = maindatas.filter((data)=> data.Catogery.includes("FSD"));
  setLanguageDatas(datafsd);
}
else if (catogery ==='Frontend'){

  var datafe = maindatas.filter((data)=> data.Catogery.includes("Frontend"));
  setLanguageDatas(datafe);
}
else if (catogery ==='DataAnalytic'){

  var dataanalytic = maindatas.filter((data)=> data.Catogery.includes("DataAnalytic"));
  setLanguageDatas(dataanalytic);
}
  // Do something with maindata
}, [catogery]);



 
  return (
    <>
        <div className="container-fluid">
            <div className="row" id="rows">
              
                {

                  languaguedatas.map((data,index) =>(

<ContentCard

key={index} data ={data}


/>


                  ))
                  
                
                  
                  
                
                }
            </div>
        </div>
    </>
)


}