
const checkResults = ()=>{
    let leftOperand = $("#txtLeftOperand").val();
    let rightOperand = $("#txtRigthOperand").val();
    let result = $("#txtResults").val();
    let lblStatus = $("#lblStatusResults");
    
    if (leftOperand == "" || rightOperand == ""){
        lblStatus.text("Must Enter Valid Operands!");
        lblStatus.css("color", "red");
        return false;   
    }
    
    if (!$.isNumeric(leftOperand) || !$.isNumeric(rightOperand) || !$.isNumeric(result)){
        lblStatus.text("Must Enter Valid Values!");
        lblStatus.css("color", "red");
        return false; 
    }
    let x = parseFloat(leftOperand);
    let y = parseFloat(rightOperand);
    let sum = parseFloat(result);
    let actualSum = x + y;
    if (sum == actualSum){
        lblStatus.text(`Correct ! ==> ${x} + ${y} = ${actualSum}`);
        lblStatus.css("color", "green");     
    }
    else{
        lblStatus.text(`Wrong ! ==> ${x} + ${y} != ${actualSum}`);
        lblStatus.css("color", "red");
    }
    return false;

}