  // laver et array
  let myArray = ["Datsun", "Mercedes", "Volvo", "BMW", "Fiat", "Toyota", "Citroen", "Tesla", "Opel"]

  //konventere til en string
  myArrayString = myArray.toString()
  console.log("mit array efter det er konventeret : " + myArrayString)

  //Fjerne Sidste Element i arrayet
  myArray.pop()
  console.log("mit array efter pop : " + myArray)

  //Tilføjer et element til arrayet
  myArray.push("Mazda")
  console.log("mit array efter push : " + myArray)

  //Fjerner først element fra arrayet
  myArray.shift()
  console.log("mit array efter shift : " + myArray)

  //Tilføjer et element til starten af arrayet
  myArray.unshift("Nissan")
  console.log("mit array efter unshift : " + myArray)

  //Tilføjer flere elementer til arrayet
  myArraySplice = myArray.splice(5,0,"Kia","Seat","Peugeot")
  console.log("mit array efter splice : " + myArray)

  //Fjerner elementet Fiat 
  myArraySlice = myArray.slice(4, 5)
  console.log(myArraySlice.toString())
  
  //fjern alt efter Peuqeot
  myArraySliceTwo = myArray.splice(8,12)
  console.log(myArray.toString())