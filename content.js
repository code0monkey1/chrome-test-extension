console.log("Chrome Extension GO!!")


window.addEventListener("load", function(){
  console.log("loaded")
  const elements=document.getElementsByTagName('h1')

for ( const element of elements) {
  element.style['background-color'] ='pink'
  console.log(element.innerHTML)
}

});
