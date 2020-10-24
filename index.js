var b = document.getElementById("bin");
var d = document.getElementById("dec");
var o = document.getElementById("oct");
var h = document.getElementById("hex");
var a = document.getElementById("asc");

function Reset()
{
    b.value="";
    d.value = "";
    o.value = "";
    h.value = "";
    a.value = "";
}
function Bin(n) {
    
    d.value = parseInt(n, 2).toString(10);
    o.value = parseInt(n, 2).toString(8);
    if (n==""){
        h.value="";
        a.value="";}
    else{
    h.value = parseInt(n, 2).toString(16).toUpperCase();
    a.value = String.fromCharCode(Number(parseInt(n, 2).toString(10)));}
}
function Dec(n) {
    b.value = parseInt(n, 10).toString(2);
    o.value = parseInt(n, 10).toString(8);
    if (n==""){
        h.value="";
        a.value="";}
    else{
    h.value = parseInt(n, 10).toString(16).toUpperCase();
    a.value = String.fromCharCode(n);}
}
function Oct(n) {
    b.value = parseInt(n, 8).toString(2);
    d.value = parseInt(n, 8).toString(10);
    if (n==""){
        h.value="";
        a.value="";}
    else{
    h.value = parseInt(n, 8).toString(16).toUpperCase();
    a.value = String.fromCharCode(Number(parseInt(n, 8).toString(10)));}
}
function Hex(n) {
    b.value = parseInt(n, 16).toString(2);
    d.value = parseInt(n, 16).toString(10);
    o.value = parseInt(n, 16).toString(8);
    if (n==""){
        a.value="";}
    else{
    a.value = String.fromCharCode(Number(parseInt(n, 16).toString(10)));
    }
}
function Ascii(n){
    b.value = parseInt(n.charCodeAt(0),10).toString(2);
    d.value = n.charCodeAt(0);
    o.value = parseInt(n.charCodeAt(0),10).toString(8);
    if (n==""){
        h.value="";}
    else{
        h.value = parseInt(n.charCodeAt(0),10).toString(16);}
    
}