
    function calWeight()
    {
        var w = parseFloat(document.getElementById("wgt").value);

        mercury = Math.trunc(w*0.38);
        document.getElementById("mercury").innerHTML = mercury;

        venus = Math.trunc(w*0.91);
        document.getElementById("venus").innerHTML = venus;

        mars = Math.trunc(w*0.38);
        document.getElementById("mars").innerHTML = mars;

        jupiter = Math.trunc(w*2.34);
        document.getElementById("jupiter").innerHTML = jupiter;

        saturn = Math.trunc(w*1.06);
        document.getElementById("saturn").innerHTML = saturn;

        uranus=Math.trunc( w*0.92);
        document.getElementById("uranus").innerHTML = uranus;

        neptune =  Math.trunc(w*1.19);
        document.getElementById("neptune").innerHTML = neptune ;

        pluto = Math.trunc(w*0.06);
        document.getElementById("pluto").innerHTML = pluto;

        moon = Math.trunc(w*0.17);
        document.getElementById("moon").innerHTML =moon ;
    }
     
  