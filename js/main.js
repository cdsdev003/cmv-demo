(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();
  new WOW().init();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });
  const yearFooter = document.getElementById("year");
  const date = new Date();
  yearFooter.innerText = date.getFullYear();
})(jQuery);
document.addEventListener("DOMContentLoaded", function () {
    splideInit();
    venoboxInit();
});

function sendEmail() {
  isFinishForm = !0;
  let e = getValueById("form-name"),
    t = getValueById("form-phone").replaceAll("-", ""),
    s = getValueById("form-email"),
    a = getValueById("form-message");
  a || (a = "-");
  let i = {
    Subject: "Swisslabs asia Contact Us",
    Receiver:
      "swislabs@gmail.com, thanwimol.mnp@cnxdevsoft.com, caroline@acquestresearch.com",
    HtmlContent:
      "<div><h3>Contact to book an appointment</h3><p>Name : " +
      e +
      " </p><p>Phone number  : " +
      t +
      " </p><p>Email : " +
      s +
      " </p><p>Message : " +
      a +
      " </p></div>",
  };
  displayElementById("message-loading", !0),
    fetch("https://api.cnxdevsoft.com/api/SmtpApi/send-email", {
      method: "POST",
      body: JSON.stringify(i),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((e) => e.json())
      .then(
        disabledElementById("btn-submit-sent-email", !0),
        disabledElementById("form-name", !0),
        disabledElementById("form-phone", !0),
        disabledElementById("form-email", !0),
        disabledElementById("form-message", !0)
      )
      .then(displayElementById("message-loading", !1))
      .then(displayElementById("message-success", !0))
      .then(resetDataForm("form-sent-email"))
      .then(
        disabledElementById("form-name", !1),
        disabledElementById("form-phone", !1),
        disabledElementById("form-email", !1),
        disabledElementById("form-message", !1)
      )
      .catch((e) => {});
}

const venoboxInit =()=>{
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
}
const splideInit = ()=>{
    let splide = new Splide(".splide.bloom", {
        perPage: 1,
        rewind: true,
        autoplay: true,
      });
      splide.mount();
      let splidePromotion = new Splide(".splide.promotion", {
        perPage: 3,
        rewind: true,
        autoplay: true,
      });
      splidePromotion.mount();
}