document.addEventListener("DOMContentLoaded", function () {
  !(function (o) {
    "use strict";
    o("body")
      .on("input propertychange", ".floating-label-form-group", function (i) {
        o(this).toggleClass("floating-label-form-group-with-value", !!o(i.target).val());
      })
      .on("focus", ".floating-label-form-group", function () {
        o(this).addClass("floating-label-form-group-with-focus");
      })
      .on("blur", ".floating-label-form-group", function () {
        o(this).removeClass("floating-label-form-group-with-focus");
      });
    if (992 < o(window).width()) {
      var s = o("#mainNav").height();
      o(window).on(
        "scroll",
        {
          previousTop: 0,
        },
        function () {
          var i = o(window).scrollTop();
          i < this.previousTop
            ? 0 < i && o("#mainNav").hasClass("is-fixed")
              ? o("#mainNav").addClass("is-visible")
              : o("#mainNav").removeClass("is-visible is-fixed")
            : i > this.previousTop &&
              (o("#mainNav").removeClass("is-visible"),
              s < i && !o("#mainNav").hasClass("is-fixed") && o("#mainNav").addClass("is-fixed")),
            (this.previousTop = i);
        }
      );
    }
  })(jQuery);

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});

/*****************************************************************************************/
/************************************** CUSTOM *******************************************/
/*****************************************************************************************/

var rotatorLeaderboard = new adRotator(
  document.getElementById("leadboardAdContainer"),
  [
    { url: "https://niketpathak.com#1", img: "./assets/img/leaderboard/leaderboard-1.gif" },
    { url: "https://niketpathak.com#1", img: "./assets/img/leaderboard/leaderboard-2.jpeg" },
    { url: "https://niketpathak.com#1", img: "./assets/img/leaderboard/leaderboard-3.gif" },
    { url: "https://niketpathak.com#1", img: "./assets/img/leaderboard/leaderboard-4.gif" },
    { url: "https://niketpathak.com#1", img: "./assets/img/leaderboard/leaderboard-5.png" },
  ],
  {
    shape: "leaderboard",
    target: "desktop",
    debug: true, // optional
  }
);
rotatorLeaderboard.start(); // start the rotation

var rotatorMobile = new adRotator(
  document.querySelector(".mobileAdContainer"),
  [
    { url: "https://niketpathak.com#1", img: "./assets/img/leaderboard/leaderboard-1.gif" },
    { url: "https://niketpathak.com#1", img: "./assets/img/leaderboard/leaderboard-2.jpeg" },
    { url: "https://niketpathak.com#1", img: "./assets/img/leaderboard/leaderboard-3.gif" },
    { url: "https://niketpathak.com#1", img: "./assets/img/leaderboard/leaderboard-4.gif" },
    { url: "https://niketpathak.com#1", img: "./assets/img/leaderboard/leaderboard-5.png" },
  ],
  {
    shape: "mobile",
    sticky: { beforeEl: document.querySelector(".page-heading > h1"), offsetTop: 0 },
    debug: true, // optional
  }
);
rotatorMobile.start(); // start the rotation

var rotatorSidebar = new adRotator(
  document.querySelector(".sidebarAdContainer"),
  [
    { url: "https://niketpathak.com#1", img: "./assets/img/sidebar/sidebar-1.jpg" },
    { url: "https://niketpathak.com#1", img: "./assets/img/sidebar/sidebar-2.jpg" },
    { url: "https://niketpathak.com#1", img: "./assets/img/sidebar/sidebar-3.jpg" },
    { url: "https://niketpathak.com#1", img: "./assets/img/sidebar/sidebar-4.jpg" },
    { url: "https://niketpathak.com#1", img: "./assets/img/sidebar/sidebar-5.png" },
    { url: "https://niketpathak.com#1", img: "./assets/img/sidebar/sidebar-6.jpg" },
    { url: "https://niketpathak.com#1", img: "./assets/img/sidebar/sidebar-7.jpg" },
  ],
  {
    shape: "sidebar",
    sticky: {
      offsetTop: 55,
      offsetBottom: 50,
      beforeEl: document.querySelector(".sidebar .card"),
      afterEl: document.querySelector(".subscribe-area"),
    },
    debug: true, // optional
  }
);
rotatorSidebar.start(); // start the rotation
