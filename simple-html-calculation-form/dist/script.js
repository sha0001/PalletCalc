function calculateTotal()
{  let calculation={}
  
  calculation.LPP = Math.round(($("#volume").val() * $("#UPP").val()/1000 ))
  $("#LPP").val(calculation.LPP);  
  
  calculation.AnnPall = Math.round(($("#AnnualUnits").val() / $("#UPP").val() ))
  $("#AnnPall").val(calculation.AnnPall); 
  
  calculation.AnnShipCost = Math.round(($("#AnnPall").val() * $("#SPP").val()))
  $("#AnnShipCost").val(calculation.AnnShipCost); 
  
  calculation.POH = Math.round(($("#SOH").val() / $("#UPP").val()))
  $("#POH").val(calculation.POH); 
  
  calculation.SCequiv = Math.round(($("#POH").val() / $("#SCPallets").val()))
  $("#SCequiv").val(calculation.SCequiv); 
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})