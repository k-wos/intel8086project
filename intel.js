function reg(){
    let AH = document.getElementById("AH").value;
    let BH = document.getElementById("BH").value;
    let CH = document.getElementById("CH").value;
    let DH = document.getElementById("DH").value;

    let AL = document.getElementById("AL").value;
    let BL = document.getElementById("BL").value;
    let CL = document.getElementById("CL").value;
    let DL = document.getElementById("DL").value;

    AX = AH+AL;
    BX = BH+BL;
    CX = CH+CL;
    DX = DH+DL;
    document.getElementById("AX").value = AX;
    document.getElementById("BX").value = BX;
    document.getElementById("CX").value = CX;
    document.getElementById("DX").value = DX;

}

function walidacja(){
    var valid = new RegExp(/^[0-9A-F]{2}$/i);
    
    var AH = document.getElementById("AH").value;
    var BH = document.getElementById("BH").value;
    var CH = document.getElementById("CH").value;
    var DH = document.getElementById("DH").value;

    var AL = document.getElementById("AL").value;
    var BL = document.getElementById("BL").value;
    var CL = document.getElementById("CL").value;
    var DL = document.getElementById("DL").value;

    var tab = new Array(AH, BH, CH, DH, AL, BL, CL, DL);

    for(i=0;i<8;i++)
        if(valid.test(tab[i])==false)
            alert("Błędnie podany rejestr");
}

function mov(){
    let check1AX = document.getElementById("ch1AX").checked;
    let check1BX = document.getElementById("ch1BX").checked;
    let check1CX = document.getElementById("ch1CX").checked;
    let check1DX = document.getElementById("ch1DX").checked;

    let check2AX = document.getElementById("ch2AX").checked;
    let check2BX = document.getElementById("ch2BX").checked;
    let check2CX = document.getElementById("ch2CX").checked;
    let check2DX = document.getElementById("ch2DX").checked;

    var AX = document.getElementById("AX").value;
    var BX = document.getElementById("BX").value;
    var CX = document.getElementById("CX").value;
    var DX = document.getElementById("DX").value;

    walidacja();
    
    
    if(check1AX == true){
        if (check2BX == true){
            AX =BX;
        }      
        else if(check2CX == true){
            AX = CX;
        }
        else if(check2DX == true){
            AX = DX;
        }
    }
    else if (check1BX == true){
        if (check2AX == true){
            BX = AX;
        }
        else if (check2CX == true){
            BX = CX;
        }
        else if (check2DX == true){
            BX = DX;
        }
    }
    else if(check1CX == true){
        if(check2AX == true){
            CX = AX;
        }
        else if (check2BX == true){
            CX = BX;
        }
        else if (check2DX == true){
            CX = DX;
        }
    }
    else if (check1DX == true){
        if (check2AX == true){
            DX = AX;
        }
        else if (check2CX == true){
            DX = CX;
        }
        else if (check2BX == true){
            DX = BX;
        }
    }
         
   
    document.getElementById("movAX").value = AX;
    document.getElementById("movBX").value = BX;
    document.getElementById("movCX").value = CX;
    document.getElementById("movDX").value = DX;
   
    
}



function randoms(){
    var chars = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    document.getElementById("AH").value = chars[Math.round(Math.random()*15)] + chars[Math.round(Math.random()*15)];
    document.getElementById("BH").value = chars[Math.round(Math.random()*15)] + chars[Math.round(Math.random()*15)];
    document.getElementById("CH").value = chars[Math.round(Math.random()*15)] + chars[Math.round(Math.random()*15)];
    document.getElementById("DH").value = chars[Math.round(Math.random()*15)] + chars[Math.round(Math.random()*15)];

    document.getElementById("AL").value = chars[Math.round(Math.random()*15)] + chars[Math.round(Math.random()*15)];
    document.getElementById("BL").value = chars[Math.round(Math.random()*15)] + chars[Math.round(Math.random()*15)];
    document.getElementById("CL").value = chars[Math.round(Math.random()*15)] + chars[Math.round(Math.random()*15)];
    document.getElementById("DL").value = chars[Math.round(Math.random()*15)] + chars[Math.round(Math.random()*15)];


    document.getElementById("AX").value = document.getElementById("AH").value+document.getElementById("AL").value;
    document.getElementById("BX").value = document.getElementById("BH").value+document.getElementById("BL").value;
    document.getElementById("CX").value = document.getElementById("CH").value+document.getElementById("CL").value;
    document.getElementById("DX").value = document.getElementById("DH").value+document.getElementById("DL").value;
}

function reset(){
    document.getElementById("after").innerHTML = "Stan rejestrów po wykonaniu rozkazu: ";
}
