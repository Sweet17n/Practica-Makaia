console.log("Tabla de verdad para NOT p AND q:");
console.log("p\tq\tNOT p\tNOT p AND q");
console.log(true + "\t" + true + "\t" + !true + "\t" + (!true && true));
console.log(true + "\t" + false + "\t" + !true + "\t" + (!true && false));
console.log(false + "\t" + true + "\t" + !false + "\t" + (!false && true));
console.log(false + "\t" + false + "\t" + !false + "\t" + (!false && false));


console.log("\nTabla de verdad para NOT p AND NOT q:");
console.log("p\tq\tNOT p\tNOT q\tNOT p AND NOT q");
console.log(true + "\t" + true + "\t" + !true + "\t" + !true + "\t" + (!true && !true));
console.log(true + "\t" + false + "\t" + !true + "\t" + !false + "\t" + (!true && !false));
console.log(false + "\t" + true + "\t" + !false + "\t" + !true + "\t" + (!false && !true));
console.log(false + "\t" + false + "\t" + !false + "\t" + !false + "\t" + (!false && !false));
