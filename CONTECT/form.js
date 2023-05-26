
document.getElementById("form").addEventListener("submit",function (e) {
                e.preventDefault()
                const name =document.getElementById('name').value;
                const email =document.getElementById('email').value;
                const number =document.getElementById('number').value;
                const password =document.getElementById('password').value;
                const designation =document.getElementById('designation').value;
                const salary =document.getElementById('salary').value;
                const gender =document.getElementById('gender').value;

                 const data= {
                                name: name,
                                email:email,
                                number:number,
                                password:password,
                                designation:designation,
                                salary:salary,
                                gender:gender
                         }
                      //  document.getElementById("ans").innerHTML=""   
         console.log(data)
         let nam=document.createElement("h2")
         nam.innerHTML=`name : ${data.name}`
         let em=document.createElement("h2")
         em.innerHTML=`email: : ${data.email}`
         let numb=document.createElement("h2")
         numb.innerHTML=`name : ${data.number}`
         let pass=document.createElement("h2")
         pass.innerHTML=`password : ${data.password}`
         let des=document.createElement("h2")
         des.innerHTML=`designation: ${data.designation}`
         let sal=document.createElement("h2")
         sal.innerHTML=`salary : ${data.salary}`
         let gen=document.createElement("h2")
         gen.innerHTML=`gender: ${data.gender}`

     document.getElementById("ans").append(nam,em,numb,pass,des,sal,gen);
                 
})

        
         
         
         


