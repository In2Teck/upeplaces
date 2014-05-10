$(document).on('ready', init);

function emailShow(){
  $("#actions").fadeOut('slow', function(){  
    $("#capture").fadeIn('slow');
    $("#registrar").on('click', registrar);
  });
}

function emailValido(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function registrar(){
  if ($("#email").val().length > 0) {
    if(emailValido($("#email").val())){
      $.ajax({
        type: "POST",
        url: "/emails",
        data: {"email[email]": $("#email").val()},
        success: function(data, textStatus, jqXHR) {
          $("#capture").fadeOut('slow', function(){ 
            $("#registro_exitoso").fadeIn('slow');
          });
        },
        error: function(){
          alert("Error con la conexión, por favor intenta de nuevo.");
        }
      });
    } else {
      alert("Por favor ingresa un email válido.");
    } 
  } else {
    alert("Por favor ingresa tu correo.");
  }


}

function init(){

  $(".image_action").on('click', emailShow);
  $("#capture").hide();
  $("#registro_exitoso").hide();

  var options = {
    $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
    $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
      $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
      $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
      $AutoCenter: 0,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
      $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
    },
    $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
      $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
      $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
      $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
      $AutoCenter: 0,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
      $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
      $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
      $SpacingX: 0,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
      $SpacingY: 0,                                   //[Optional] Vertical space between each item in pixel, default value is 0
      $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
    }
  };

  var jssor_slider1 = new $JssorSlider$("slider1_container", options);
}
