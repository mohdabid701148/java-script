(function chai(){
    console.log("DB Connecte")
})();   //there is a semicolne ; to end the invoke


( (name) => {
    console.log(`DB Connect Two ${name}`);
} )("Abid");