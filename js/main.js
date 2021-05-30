const btnOpenA = document.getElementById('phone-a');
const btnOpenF = document.getElementById('phone-f');
const btnClose = document.getElementById('modal__close');
const modal = document.getElementById('wrapper-modal');
const overlay = document.getElementById('overlay');


btnOpenA.addEventListener('click', () => {   
    modal.classList.add('active');
});
btnOpenF.addEventListener('click', () => {
    modal.classList.add('active');
});

const closeModal = () => {
    modal.classList.remove('active');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);




$(document).ready(function(){
    $('.offer__sliders').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true
    });
});

$(document).ready(function(){
    $.autoScroll({
        scrollDuration: 2000,
        showDuration: 400,
        hideDuration: 300
    });
});


$('a[href*="#"]').click(function(){ });
var $page = $('html, body');
var $page = $('html, body');
$('a[href*="#"]').click(function() {
$page.animate({ scrollTop: $($.attr(this, 'href')).offset().top }, 800);
return false; 
});







  function mail(){
      var name = $("#name").val();
      var phone = $("#phone").val();
      var email = $("#email").val();
      $.ajax({
        url: 'send.php',         /* Куда пойдет запрос */
        method: 'POST',             /* Метод передачи (post или get) */
        data: {name: name, phone: phone, email: email},     /* Параметры передаваемые в запросе. */
        success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
              $("#wrapper-modal").removeClass();
            $("#wrapper-modal-two").addClass("active");
            $("#btn-close").click(function(){
                $("#wrapper-modal-two").toggleClass("active");
            });
            overlay.addEventListener('click', closeModal);
            $("#overlay-two").click(function(e) {
                e.preventDefault();
                $("#wrapper-modal-two").removeClass('active')
            })

            $("#modal__close-two").click(function(e) {
                e.preventDefault();
                $("#wrapper-modal-two").removeClass('active')
            });
            $("#btn-close-two").click(function(e) {
                e.preventDefault();
                $("#wrapper-modal-two").removeClass('active')
            });
        }
    });
  }
