function Person(name,email,mobile){       //Konstruktor för en person
this.name = name;
this.email = email;
this.mobile = mobile;
this.adress = {
 gatuadress: "",
 postnummer: "",
 ort:""
}
this.print = function(){
  console.log(this.name + "\n\n" +this.adress.gatuadress + "\n" + this.adress.postnummer + " " + this.adress.ort + "\n");  
}

}

let tobias = new Person("Tobias", "tobias.rosenlind@hotmail.com","070727322");  //Skapar ny person
tobias.adress.gatuadress = "Bjursätragatan 8";
tobias.adress.postnummer ="12462";
tobias.adress.ort ="Stockholm";
tobias.print();

let mahmud = new Person("Mahmud Al Hakim", "mahmud@gmail.com", "07025542432"); //Skapar ny person
mahmud.adress.gatuadress = "Hemfridsvägen 17";
mahmud.adress.postnummer ="192 67";
mahmud.adress.ort = "Sollentuna";
mahmud.print();