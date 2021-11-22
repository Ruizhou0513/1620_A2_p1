 
const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]
var item=0


function cleanUpIndex(){
    let dom1=document.querySelector("#indexmain")
   dom1.innerHTML=''
}
 
function renderIndex(contactList){
    let conta1=document.querySelector("#indexmain");
    let innerHtml1=''
   for (let i = 0; i < contactList.length; i++) {
       innerHtml1+=`<a href="page3.html"><div class="contact"><p>${contactList[i].name}</p></div></a>` 
   }
   conta1.innerHTML=innerHtml1
}  


function cleanUpView(){
    let contactinfo=document.querySelector('.contactinfo')
    contactinfo.innerHTML=''
} 
function renderView(data){
     let conta=document.querySelector(".contactinfo");
    
      let  innerHtml1=` <div class="contactname">
        Raquel Ervin
        <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
    </div>
    <div class="contactemail">email:${data.email}</div>
    <div class="contactphone">cell: +${data.phone}</div>
    <div class="contactaddress">address:${data.address}</div>
    <div class="buttons">
        <button class="buttoncleanUpCreat edit"   value="Edit">Edit</button>
        <button class="button close"   value="Close">Close</button>
    </div>` 
   
    conta.innerHTML=innerHtml1
    
} 
  
function createSingleIndex(){
    var m_div=document.createElement("div");  
   m_div.id="indexmain";
   m_div.className="main";
   document.body.appendChild(m_div);  
}
 
function cleanUpCreate (){
    document.querySelector('.main').remove()
}
 
function renderCreate(data){
    let conta1=document.querySelector("#indexmain");
    let   innerHtml1=`<a href="page3.html"><div class="contact"><p>${data.name}</p></div></a>` 
   
   conta1.innerHTML=innerHtml1
}
 