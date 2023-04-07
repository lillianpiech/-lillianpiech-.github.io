    <!--adapted from a demo Indianna.edu--> 

function tempConversion(form) {
    var Fi = form.fahr.value;
    var Ci = form.cels.value;
    var C2, F2, C, F;

    if (Ci != "" && Fi != "") {
    alert("You must clear the entries before attempting another conversion");
    return;

    } else if (Ci == "" && Fi == "") {
    alert("You have not input a temperature");
        return;

    } else if (Ci == "") {
    F = parseFloat(Fi);
    C = (5/9) * (F - 32);

        if (C < 0.01 && C > -0.01) {
        form.cels.value = 0;

    } else {
    
        if (C < 0) {
            C2 = parseInt((C * 100) - 0.5);
        
        } else if (C > 0) {
            C2 = parseInt((C * 100) + 0.5);
        }

        C2 /= 100;
            form.cels.value = C2;   
    }

   } else if (Fi == "") {
    C = parseFloat(Ci);
    F = (9/5 * C) + 32;

    if (F < 0.01 && F > -0.01) {
            form.fahr.value = 0;

    } else {
    
        if (F < 0) {
            F2 = parseInt((F * 100) - 0.5);
        
        } else if (F > 0) {
            F2 = parseInt((F * 100) + 0.5);
        }

        F2 /= 100;
        form.fahr.value= F2;    
    }
    }
}

function wipe(form) {
    form.fahr.value = ""    
    form.cels.value = ""    
}