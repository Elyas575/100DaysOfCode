
  let index = 0;
  const names = ['Shire','Mordor','Rohan', 'Rivendell'];
  const temptures = ['18c','47c','23c','21c']
  const images = ['./Images/1.avif', "./Images/Mordor.jpg",'./Images/Edoras.webp','./Images/Rivendell2.jpg']

console.log(names.length)

function myFunction() {
 if(index < names.length){
  document.getElementById("region-name").innerHTML = names[index];
  document.getElementById("region-tempture").innerHTML = temptures[index];
 }
}

function changeImage(){
  if(index < images.length){
    const firstImage = document.getElementById('firstImage')

    firstImage.setAttribute('src', images[index])
   
  }
  index++;
  if(index > names.length){
    index = 0;
  }
}

function callAll(){
  myFunction();
  changeImage();


}

if(index<names.length){
  setInterval(callAll,150000)
}


