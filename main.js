const perKm = 0.21;
let chilometri = prompt("Quanti chilometri vuoi percorrere?");
let età = prompt("Quanti anni hai?");
let prezzo = perKm * chilometri;
if(età<18){
    prezzo*=0.8;
}else if(età>65){
    prezzo*=0.6;
}
console.log(`Le sarà addebitato ${prezzo.toFixed(2)}€`);
document.writeln(`Le sarà addebitato ${prezzo.toFixed(2)}€`);