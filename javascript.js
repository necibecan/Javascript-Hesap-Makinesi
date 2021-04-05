function yaz(sayi)
{
    $("#yazi").val($("#yazi").val()+sayi);
}
$(document).ready(function () {
    $("#hesapla").click(function (e) { 
        var islem = $("#yazi").val();
        if (islem) {
            $("#yazi").val(eval(islem));
        }
    });
    $("#temizle").click(function (e) { 
        $("#yazi").val("");        
    });
    $("#sil").click(function (e) { 
        var islem = $("#yazi").val();
        $("#yazi").val(islem.substring(0,islem.length-1));
    });
});

