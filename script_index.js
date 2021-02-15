var form_pro = document.getElementById("form_pro");
var form_P1_trips = document.getElementById("form_P1_trips");
var form_P1_escamas = document.getElementById("form_P1_escamas");
var form_P1_moscas = document.getElementById("form_P1_moscas");
var form_P1_arañita_roja = document.getElementById("form_P1_arañita_roja");
//var de la planta 2
var form_P2_trips = document.getElementById("form_P2_trips");
var form_P2_escamas = document.getElementById("form_P2_escamas");
var form_P2_moscas = document.getElementById("form_P2_moscas");
var form_P2_arañita_roja = document.getElementById("form_P2_arañita_roja");
//var de la planta 3
var form_P3_trips = document.getElementById("form_P3_trips");
var form_P3_escamas = document.getElementById("form_P3_escamas");
var form_P3_moscas = document.getElementById("form_P3_moscas");
var form_P3_arañita_roja = document.getElementById("form_P3_arañita_roja");
//var de la planta 4
var form_P4_trips = document.getElementById("form_P4_trips");
var form_P4_escamas = document.getElementById("form_P4_escamas");
var form_P4_moscas = document.getElementById("form_P4_moscas");
var form_P4_arañita_roja = document.getElementById("form_P4_arañita_roja");
//var de la planta 5
var form_P5_trips = document.getElementById("form_P5_trips");
var form_P5_escamas = document.getElementById("form_P5_escamas");
var form_P5_moscas = document.getElementById("form_P5_moscas");
var form_P5_arañita_roja = document.getElementById("form_P5_arañita_roja");




//var de los botones de la planta 1
var siguiente_prod = document.getElementById("siguiente-prod");
var atras_p1t = document.getElementById("atras-p1t");
var siguiente_p1t = document.getElementById("siguiente-p1t");
var atras_p1e = document.getElementById("atras-p1e");
var siguiente_p1e = document.getElementById("siguiente-p1e");
var atras_p1m = document.getElementById("atras-p1m");
var siguiente_p1m = document.getElementById("siguiente-p1m");
var atras_p1ar = document.getElementById("atras-p1ar");
var siguiente_p1ar = document.getElementById("siguiente-p1ar");
var siguiente_p1 = document.getElementById("siguiente-p1");
var siguiente_p11 = document.getElementById("siguiente-p11");
var siguiente_p12 = document.getElementById("siguiente-p12");
var siguiente_p13 = document.getElementById("siguiente-p13");
var siguiente_p14 = document.getElementById("siguiente-p14");
// var de los botones de la planta 2 
var atras_p2t = document.getElementById("atras-p2t");
var siguiente_p2t = document.getElementById("siguiente-p2t");
var atras_p2e = document.getElementById("atras-p2e");
var siguiente_p2e = document.getElementById("siguiente-p2e");
var atras_p2m = document.getElementById("atras-p2m");
var siguiente_p2m = document.getElementById("siguiente-p2m");
var atras_p2ar = document.getElementById("atras-p2ar");
var siguiente_p2ar = document.getElementById("siguiente-p2ar");
var siguiente_p21 = document.getElementById("siguiente-p21");
var siguiente_p22 = document.getElementById("siguiente-p22");
var siguiente_p23 = document.getElementById("siguiente-p23");
var siguiente_p24 = document.getElementById("siguiente-p24");
var atras_p21 = document.getElementById("atras-p21");
var atras_p22 = document.getElementById("atras-p22");
var atras_p23 = document.getElementById("atras-p23");
var atras_p24 = document.getElementById("atras-p24");
// var de los botones de la planta 3
var atras_p3t = document.getElementById("atras-p3t");
var siguiente_p3t = document.getElementById("siguiente-p3t");
var atras_p3e = document.getElementById("atras-p3e");
var siguiente_p3e = document.getElementById("siguiente-p3e");
var atras_p3m = document.getElementById("atras-p3m");
var siguiente_p3m = document.getElementById("siguiente-p3m");
var atras_p3ar = document.getElementById("atras-p3ar");
var siguiente_p3ar = document.getElementById("siguiente-p3ar");
var siguiente_p31 = document.getElementById("siguiente-p31");
var siguiente_p32 = document.getElementById("siguiente-p32");
var siguiente_p33 = document.getElementById("siguiente-p33");
var siguiente_p34 = document.getElementById("siguiente-p34");
var atras_p31 = document.getElementById("atras-p31");
var atras_p32 = document.getElementById("atras-p32");
var atras_p33 = document.getElementById("atras-p33");
var atras_p34 = document.getElementById("atras-p34");
// var de los botones de la planta 4
var atras_p4t = document.getElementById("atras-p4t");
var siguiente_p4t = document.getElementById("siguiente-p4t");
var atras_p4e = document.getElementById("atras-p4e");
var siguiente_p4e = document.getElementById("siguiente-p4e");
var atras_p4m = document.getElementById("atras-p4m");
var siguiente_p4m = document.getElementById("siguiente-p4m");
var atras_p4ar = document.getElementById("atras-p4ar");
var siguiente_p4ar = document.getElementById("siguiente-p4ar");
var siguiente_p41 = document.getElementById("siguiente-p41");
var siguiente_p42 = document.getElementById("siguiente-p42");
var siguiente_p43 = document.getElementById("siguiente-p43");
var siguiente_p44 = document.getElementById("siguiente-p44");
var atras_p41 = document.getElementById("atras-p41");
var atras_p42 = document.getElementById("atras-p42");
var atras_p43 = document.getElementById("atras-p43");
var atras_p44 = document.getElementById("atras-p44");
// var de los botones de la planta 5
var atras_p5t = document.getElementById("atras-p5t");
var siguiente_p5t = document.getElementById("siguiente-p5t");
var atras_p5e = document.getElementById("atras-p5e");
var siguiente_p5e = document.getElementById("siguiente-p5e");
var atras_p5m = document.getElementById("atras-p5m");
var siguiente_p5m = document.getElementById("siguiente-p5m");
var atras_p5ar = document.getElementById("atras-p5ar");
var siguiente_p5ar = document.getElementById("siguiente-p5ar");
var siguiente_p51 = document.getElementById("siguiente-p51");
var siguiente_p52 = document.getElementById("siguiente-p52");
var siguiente_p53 = document.getElementById("siguiente-p53");
var siguiente_p54 = document.getElementById("siguiente-p54");
var atras_p51 = document.getElementById("atras-p51");
var atras_p52 = document.getElementById("atras-p52");
var atras_p53 = document.getElementById("atras-p53");
var atras_p54 = document.getElementById("atras-p54");









// Funciones de la planta 1

siguiente_prod.onclick = function(){
    form_pro.style.left = "-450px";
    form_P1_trips.style.left = "40px";
}

atras_p1t.onclick = function(){
    form_pro.style.left = "40px";
    form_P1_trips.style.left = "450px";
}

siguiente_p1t.onclick = function(){
    form_P1_trips.style.left = "-450px";
    form_P1_escamas.style.left = "40px"
}

atras_p1e.onclick = function(){
    form_P1_escamas.style.left = "450px"
    form_P1_trips.style.left = "40px";
}

siguiente_p1e.onclick = function(){
    form_P1_escamas.style.left = "-450px"
    form_P1_moscas.style.left = "40px";
}

atras_p1m.onclick = function(){
    form_P1_escamas.style.left = "40px"
    form_P1_moscas.style.left = "450px";
}

siguiente_p1m.onclick = function(){
    form_P1_arañita_roja.style.left = "40px"
    form_P1_moscas.style.left = "-450px";
}

atras_p1ar.onclick = function(){
    form_P1_arañita_roja.style.left = "450px"
    form_P1_moscas.style.left = "40px";
}

siguiente_p1ar.onclick = function(){
    form_P2_trips.style.left = "40px"
    form_P1_arañita_roja.style.left = "-450px";
}

siguiente_p11.onclick = function(){
    form_P2_trips.style.left = "40px"
    form_P1_arañita_roja.style.left = "-450px";
    form_P1_moscas.style.left = "-450px";
    form_P1_escamas.style.left = "-450px";
    form_P1_trips.style.left = "-450px";
}

siguiente_p12.onclick = function(){
    form_P2_trips.style.left = "40px"
    form_P1_arañita_roja.style.left = "-450px";
    form_P1_moscas.style.left = "-450px";
    form_P1_escamas.style.left = "-450px";
    form_P1_trips.style.left = "-450px";
}

siguiente_p13.onclick = function(){
    form_P2_trips.style.left = "40px"
    form_P1_arañita_roja.style.left = "-450px";
    form_P1_moscas.style.left = "-450px";
    form_P1_escamas.style.left = "-450px";
    form_P1_trips.style.left = "-450px";
}

siguiente_p14.onclick = function(){
    form_P2_trips.style.left = "40px"
    form_P1_arañita_roja.style.left = "-450px";
    form_P1_moscas.style.left = "-450px";
    form_P1_escamas.style.left = "-450px";
    form_P1_trips.style.left = "-450px";
}

//funciones de los botones de la planta 2
//############################################################################################

atras_p2t.onclick = function(){
    form_P1_arañita_roja.style.left = "40px";
    form_P2_trips.style.left = "450px";
}

siguiente_p2t.onclick = function(){
    form_P2_trips.style.left = "-450px";
    form_P2_escamas.style.left = "40px"
}

atras_p2e.onclick = function(){
    form_P2_escamas.style.left = "450px"
    form_P2_trips.style.left = "40px";
}

siguiente_p2e.onclick = function(){
    form_P2_escamas.style.left = "-450px"
    form_P2_moscas.style.left = "40px";
}

atras_p2m.onclick = function(){
    form_P2_escamas.style.left = "40px"
    form_P2_moscas.style.left = "450px";
}

siguiente_p2m.onclick = function(){
    form_P2_arañita_roja.style.left = "40px"
    form_P2_moscas.style.left = "-450px";
}

atras_p2ar.onclick = function(){
    form_P2_arañita_roja.style.left = "450px"
    form_P2_moscas.style.left = "40px";
}

siguiente_p2ar.onclick = function(){
    form_P3_trips.style.left = "40px"
    form_P2_arañita_roja.style.left = "-450px";
}

siguiente_p21.onclick = function(){
    form_P3_trips.style.left = "40px"
    form_P2_arañita_roja.style.left = "-450px";
    form_P2_moscas.style.left = "-450px";
    form_P2_escamas.style.left = "-450px";
    form_P2_trips.style.left = "-450px";
}

siguiente_p22.onclick = function(){
    form_P3_trips.style.left = "40px"
    form_P2_arañita_roja.style.left = "-450px";
    form_P2_moscas.style.left = "-450px";
    form_P2_escamas.style.left = "-450px";
    form_P2_trips.style.left = "-450px";
}
siguiente_p23.onclick = function(){
    form_P3_trips.style.left = "40px"
    form_P2_arañita_roja.style.left = "-450px";
    form_P2_moscas.style.left = "-450px";
    form_P2_escamas.style.left = "-450px";
    form_P2_trips.style.left = "-450px";
}
siguiente_p24.onclick = function(){
    form_P3_trips.style.left = "40px"
    form_P2_arañita_roja.style.left = "-450px";
    form_P2_moscas.style.left = "-450px";
    form_P2_escamas.style.left = "-450px";
    form_P2_trips.style.left = "-450px";
}
atras_p21.onclick = function(){
    form_P1_trips.style.left = "40px"
    form_P2_arañita_roja.style.left = "450px";
    form_P2_moscas.style.left = "450px";
    form_P2_escamas.style.left = "450px";
    form_P2_trips.style.left = "450px";
}
atras_p22.onclick = function(){
    form_P1_trips.style.left = "40px"
    form_P2_arañita_roja.style.left = "450px";
    form_P2_moscas.style.left = "450px";
    form_P2_escamas.style.left = "450px";
    form_P2_trips.style.left = "450px";
}
atras_p23.onclick = function(){
    form_P1_trips.style.left = "40px"
    form_P2_arañita_roja.style.left = "450px";
    form_P2_moscas.style.left = "450px";
    form_P2_escamas.style.left = "450px";
    form_P2_trips.style.left = "450px";
}
atras_p24.onclick = function(){
    form_P1_trips.style.left = "40px";
    form_P2_arañita_roja.style.left = "450px";
    form_P2_moscas.style.left = "450px";
    form_P2_escamas.style.left = "450px";
    form_P2_trips.style.left = "450px";
}

//funciones de los botones de la planta 3
//############################################################################################

atras_p3t.onclick = function(){
    form_P2_arañita_roja.style.left = "40px";
    form_P3_trips.style.left = "450px";
}

siguiente_p3t.onclick = function(){
    form_P3_trips.style.left = "-450px";
    form_P3_escamas.style.left = "40px";
}

atras_p3e.onclick = function(){
    form_P3_escamas.style.left = "450px";
    form_P3_trips.style.left = "40px";
}

siguiente_p3e.onclick = function(){
    form_P3_escamas.style.left = "-450px"
    form_P3_moscas.style.left = "40px";
}

atras_p3m.onclick = function(){
    form_P3_escamas.style.left = "40px"
    form_P3_moscas.style.left = "450px";
}

siguiente_p3m.onclick = function(){
    form_P3_arañita_roja.style.left = "40px"
    form_P3_moscas.style.left = "-450px";
}

atras_p3ar.onclick = function(){
    form_P3_arañita_roja.style.left = "450px";
    form_P3_moscas.style.left = "40px";
}

siguiente_p3ar.onclick = function(){
    form_P4_trips.style.left = "40px"
    form_P3_arañita_roja.style.left = "-450px";
}

siguiente_p31.onclick = function(){
    form_P4_trips.style.left = "40px"
    form_P3_arañita_roja.style.left = "-450px";
    form_P3_moscas.style.left = "-450px";
    form_P3_escamas.style.left = "-450px";
    form_P3_trips.style.left = "-450px";
}

siguiente_p32.onclick = function(){
    form_P4_trips.style.left = "40px"
    form_P3_arañita_roja.style.left = "-450px";
    form_P3_moscas.style.left = "-450px";
    form_P3_escamas.style.left = "-450px";
    form_P3_trips.style.left = "-450px";
}
siguiente_p33.onclick = function(){
    form_P4_trips.style.left = "40px"
    form_P3_arañita_roja.style.left = "-450px";
    form_P3_moscas.style.left = "-450px";
    form_P3_escamas.style.left = "-450px";
    form_P3_trips.style.left = "-450px";
}
siguiente_p34.onclick = function(){
    form_P4_trips.style.left = "40px"
    form_P3_arañita_roja.style.left = "-450px";
    form_P3_moscas.style.left = "-450px";
    form_P3_escamas.style.left = "-450px";
    form_P3_trips.style.left = "-450px";
}
atras_p31.onclick = function(){
    form_P2_trips.style.left = "40px"
    form_P3_arañita_roja.style.left = "450px";
    form_P3_moscas.style.left = "450px";
    form_P3_escamas.style.left = "450px";
    form_P3_trips.style.left = "450px";
}
atras_p32.onclick = function(){
    form_P2_trips.style.left = "40px"
    form_P3_arañita_roja.style.left = "450px";
    form_P3_moscas.style.left = "450px";
    form_P3_escamas.style.left = "450px";
    form_P3_trips.style.left = "450px";
}
atras_p33.onclick = function(){
    form_P2_trips.style.left = "40px"
    form_P3_arañita_roja.style.left = "450px";
    form_P3_moscas.style.left = "450px";
    form_P3_escamas.style.left = "450px";
    form_P3_trips.style.left = "450px";
}
atras_p34.onclick = function(){
    form_P2_trips.style.left = "40px"
    form_P3_arañita_roja.style.left = "450px";
    form_P3_moscas.style.left = "450px";
    form_P3_escamas.style.left = "450px";
    form_P3_trips.style.left = "450px";
}


//funciones de los botones de la planta 4
//############################################################################################

atras_p4t.onclick = function(){
    form_P3_arañita_roja.style.left = "40px";
    form_P4_trips.style.left = "450px";
}

siguiente_p4t.onclick = function(){
    form_P4_trips.style.left = "-450px";
    form_P4_escamas.style.left = "40px";
}

atras_p4e.onclick = function(){
    form_P4_escamas.style.left = "450px";
    form_P4_trips.style.left = "40px";
}

siguiente_p4e.onclick = function(){
    form_P4_escamas.style.left = "-450px"
    form_P4_moscas.style.left = "40px";
}

atras_p4m.onclick = function(){
    form_P4_escamas.style.left = "40px"
    form_P4_moscas.style.left = "450px";
}

siguiente_p4m.onclick = function(){
    form_P4_arañita_roja.style.left = "40px"
    form_P4_moscas.style.left = "-450px";
}

atras_p4ar.onclick = function(){
    form_P4_arañita_roja.style.left = "450px";
    form_P4_moscas.style.left = "40px";
}

siguiente_p4ar.onclick = function(){
    form_P5_trips.style.left = "40px"
    form_P4_arañita_roja.style.left = "-450px";
}

siguiente_p41.onclick = function(){
    form_P5_trips.style.left = "40px"
    form_P4_arañita_roja.style.left = "-450px";
    form_P4_moscas.style.left = "-450px";
    form_P4_escamas.style.left = "-450px";
    form_P4_trips.style.left = "-450px";
}

siguiente_p42.onclick = function(){
    form_P5_trips.style.left = "40px"
    form_P4_arañita_roja.style.left = "-450px";
    form_P4_moscas.style.left = "-450px";
    form_P4_escamas.style.left = "-450px";
    form_P4_trips.style.left = "-450px";
}
siguiente_p43.onclick = function(){
    form_P5_trips.style.left = "40px"
    form_P4_arañita_roja.style.left = "-450px";
    form_P4_moscas.style.left = "-450px";
    form_P4_escamas.style.left = "-450px";
    form_P4_trips.style.left = "-450px";
}
siguiente_p44.onclick = function(){
    form_P5_trips.style.left = "40px"
    form_P4_arañita_roja.style.left = "-450px";
    form_P4_moscas.style.left = "-450px";
    form_P4_escamas.style.left = "-450px";
    form_P4_trips.style.left = "-450px";
}
atras_p41.onclick = function(){
    form_P3_trips.style.left = "40px"
    form_P4_arañita_roja.style.left = "450px";
    form_P4_moscas.style.left = "450px";
    form_P4_escamas.style.left = "450px";
    form_P4_trips.style.left = "450px";
}
atras_p42.onclick = function(){
    form_P3_trips.style.left = "40px"
    form_P4_arañita_roja.style.left = "450px";
    form_P4_moscas.style.left = "450px";
    form_P4_escamas.style.left = "450px";
    form_P4_trips.style.left = "450px";
}
atras_p43.onclick = function(){
    form_P3_trips.style.left = "40px"
    form_P4_arañita_roja.style.left = "450px";
    form_P4_moscas.style.left = "450px";
    form_P4_escamas.style.left = "450px";
    form_P4_trips.style.left = "450px";
}
atras_p44.onclick = function(){
    form_P3_trips.style.left = "40px"
    form_P4_arañita_roja.style.left = "450px";
    form_P4_moscas.style.left = "450px";
    form_P4_escamas.style.left = "450px";
    form_P4_trips.style.left = "450px";
}

//funciones de los botones de la planta 5
//############################################################################################

atras_p5t.onclick = function(){
    form_P4_arañita_roja.style.left = "40px";
    form_P5_trips.style.left = "450px";
}

siguiente_p5t.onclick = function(){
    form_P5_trips.style.left = "-450px";
    form_P5_escamas.style.left = "40px";
}

atras_p5e.onclick = function(){
    form_P5_escamas.style.left = "450px";
    form_P5_trips.style.left = "40px";
}

siguiente_p5e.onclick = function(){
    form_p5_escamas.style.left = "-450px";
    form_P5_moscas.style.left = "40px";
}

atras_p5m.onclick = function(){
    form_P5_escamas.style.left = "40px"
    form_P5_moscas.style.left = "450px";
}

siguiente_p5m.onclick = function(){
    form_P5_arañita_roja.style.left = "40px"
    form_P5_moscas.style.left = "-450px";
}

atras_p5ar.onclick = function(){
    form_P5_arañita_roja.style.left = "450px";
    form_P5_moscas.style.left = "40px";
}

siguiente_p5ar.onclick = function(){
    form_P5_trips.style.left = "40px"
    form_P5_arañita_roja.style.left = "-450px";
}

siguiente_p51.onclick = function(){
    form_P6_trips.style.left = "40px"
    form_P5_arañita_roja.style.left = "-450px";
    form_P5_moscas.style.left = "-450px";
    form_P5_escamas.style.left = "-450px";
    form_P5_trips.style.left = "-450px";
}

siguiente_p52.onclick = function(){
    form_P6_trips.style.left = "40px"
    form_P5_arañita_roja.style.left = "-450px";
    form_P5_moscas.style.left = "-450px";
    form_P5_escamas.style.left = "-450px";
    form_P5_trips.style.left = "-450px";
}
siguiente_p53.onclick = function(){
    form_P6_trips.style.left = "40px"
    form_P5_arañita_roja.style.left = "-450px";
    form_P5_moscas.style.left = "-450px";
    form_P5_escamas.style.left = "-450px";
    form_P5_trips.style.left = "-450px";
}
siguiente_p54.onclick = function(){
    form_P6_trips.style.left = "40px"
    form_P5_arañita_roja.style.left = "-450px";
    form_P5_moscas.style.left = "-450px";
    form_P5_escamas.style.left = "-450px";
    form_P5_trips.style.left = "-450px";
}
atras_p51.onclick = function(){
    form_P4_trips.style.left = "40px"
    form_P5_arañita_roja.style.left = "450px";
    form_P5_moscas.style.left = "450px";
    form_P5_escamas.style.left = "450px";
    form_P5_trips.style.left = "450px";
}
atras_p52.onclick = function(){
    form_P4_trips.style.left = "40px"
    form_P5_arañita_roja.style.left = "450px";
    form_P5_moscas.style.left = "450px";
    form_P5_escamas.style.left = "450px";
    form_P5_trips.style.left = "450px";
}
atras_p53.onclick = function(){
    form_P4_trips.style.left = "40px"
    form_P5_arañita_roja.style.left = "450px";
    form_P5_moscas.style.left = "450px";
    form_P5_escamas.style.left = "450px";
    form_P5_trips.style.left = "450px";
}
atras_p54.onclick = function(){
    form_P4_trips.style.left = "40px"
    form_P5_arañita_roja.style.left = "450px";
    form_P5_moscas.style.left = "450px";
    form_P5_escamas.style.left = "450px";
    form_P5_trips.style.left = "450px";
}
















