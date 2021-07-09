$(function () {
       var INDEX = 0;
       $("#chat-submit").click(function (e) {
              e.preventDefault();
              var msg = $("#chat-input").val();
              if (msg.trim() == "") {
                     return false;
              }
              generateMessageUser(msg, "user");
              var buttons = [
                     {
                            name: "Existing User",
                            value: "existing",
                     },
                     {
                            name: "New User",
                            value: "new",
                     },
              ];
              setTimeout(function () {
                     generateMessageBot(msg, "bot");
              }, 1000);
       });

       function generateMessageUser(msg, type) {
              INDEX++;
              var str = "";
              str = `
              <div>
                     <p class="cm-msg-text-user">
                                   ${msg}
                     </p>
              </div>
         `;

              $(".chat-logs").append(str);
              $("#cm-msg-" + INDEX)
                     .hide()
                     .fadeIn(300);
              if (type == "bot") {
                     $("#chat-input").val("");
              }
              $(".chat-logs")
                     .stop()
                     .animate(
                            { scrollTop: $(".chat-logs")[0].scrollHeight },
                            1000
                     );
       }

       function generateMessageBot(msg, type) {
              INDEX++;
              var str = "";
              str = `
              <div>
                     <p class="cm-msg-text-bot">
                                   ${msg}
                     </p>
              </div>
         `;

              $(".chat-logs").append(str);
              $("#cm-msg-" + INDEX)
                     .hide()
                     .fadeIn(300);
              if (type == "bot") {
                     $("#chat-input").val("");
              }
              $(".chat-logs")
                     .stop()
                     .animate(
                            { scrollTop: $(".chat-logs")[0].scrollHeight },
                            1000
                     );
       }

       $(document).delegate(".chat-btn", "click", function () {
              var value = $(this).attr("chat-value");
              var name = $(this).html();
              $("#chat-input").attr("disabled", false);
              generate_message(name, "self");
       });

       $("#chat-circle").click(function () {
              $("#chat-circle").toggle("scale");
              $(".chat-box").toggle("scale");
       });

       $(".chat-box-toggle").click(function () {
              $("#chat-circle").toggle("scale");
              $(".chat-box").toggle("scale");
       });
});
