// use jquery cdn 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
       
     function frequently_bundle(){

              var p_v1 = parseInt($("#p_v1").attr('data-id'));
              var p_v2 = parseInt($("#p_v2").attr('data-id'));
              var p_v3 = parseInt($("#p_v3").attr('data-id'));

              var qty1 = parseInt($("#p_v1").attr('data-qty'));
              var qty2 = parseInt($("#p_v2").attr('data-qty'));
              var qty3 = parseInt($("#p_v3").attr('data-qty'));

              const data = {
                items:[]
              };

              // console.log(p_v1,p_v2,p_v3);

              if(isNaN(p_v1) == false)
              {
              	data.items.push({ quantity: qty1, id: p_v1 });
              }
              if(isNaN(p_v2) == false)
              {
              	data.items.push({ quantity: qty2, id: p_v2 });
              }
              if(isNaN(p_v3) == false)
              {
              	data.items.push({ quantity: qty3, id: p_v3 });
              }

              //data['items'] = "";

              // const data = {
              //    items: [
              //       { quantity: 1, id: 41243029962931 }
              //    ]
              // };

              // $.ajax({
              //   type: 'POST',
              //   url: '/cart/add.js',
              //   data: JSON.stringify(data),
              //   dataType: 'json',
              //   success: function (data) {
              //     console.log(data.quantity);
              //    }
              //  });

              const xhr = new XMLHttpRequest();
              xhr.open('POST', '/cart/add.js', true);
              xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
              xhr.send(JSON.stringify(data));



              $(".atc_btn .btn--add-to-cart .btn__text").text('Adding to cart');
              setTimeout(function() {   $(".atc_btn .btn--add-to-cart .btn__text").text('Add to cart');  }, 1000);
             }

            $("#product1_chk").prop('checked', true);
            $("#product2_chk").prop('checked', true);
            $("#product3_chk").prop('checked', true);

            $("#product1_id").change(function(){
            	 var p_id = $(this).val();
               var p_price = $("#v"+p_id).attr('data-price');
               $("#p_v1").attr('data-price',p_price);
               $("#p_v1").attr('data-id',p_id);

                var p_v1 = $("#p_v1").attr('data-price');
                var p_v2 = $("#p_v2").attr('data-price');
                var p_v3 = $("#p_v3").attr('data-price');

               var t_price = Number(p_v1)+ Number(p_v2)+ Number(p_v3);
               $("#t_price span").text(t_price.toFixed(2));
            });

            $("#product2_id").change(function(){
            	 var p_id = $(this).val();
               var p_price = $("#v"+p_id).attr('data-price');
               $("#p_v2").attr('data-price',p_price);
               $("#p_v2").attr('data-id',p_id);

                var p_v1 = $("#p_v1").attr('data-price');
                var p_v2 = $("#p_v2").attr('data-price');
                var p_v3 = $("#p_v3").attr('data-price');

               var t_price = Number(p_v1)+ Number(p_v2)+ Number(p_v3);
               $("#t_price span").text(t_price.toFixed(2));
            });

            $("#product3_id").change(function(){
            	 var p_id = $(this).val();
               var p_price = $("#v"+p_id).attr('data-price');
               $("#p_v3").attr('data-price',p_price);
               $("#p_v3").attr('data-id',p_id);

                var p_v1 = $("#p_v1").attr('data-price');
                var p_v2 = $("#p_v2").attr('data-price');
                var p_v3 = $("#p_v3").attr('data-price');

               var t_price = Number(p_v1)+ Number(p_v2)+ Number(p_v3);
               $("#t_price span").text(t_price.toFixed(2));
            });


            $("#product1_chk").click(function(){
            	 var checked = $("input[id='product1_chk']:checked").length;
                  if (checked == 0) {

                    $("#p_v1").attr('data-price','0');
                    $("#p_v1").attr('data-qty','0');
                    $(".product1_op").addClass('disabled');

                  }else{

                    var p_id = $("#product1_id").val();
                    var p_price = $("#v"+p_id).attr('data-price');
                    $("#p_v1").attr('data-price',p_price);
                    $("#p_v1").attr('data-qty','1');
                    $(".product1_op").removeClass('disabled');

                }
                  var p_v1 = $("#p_v1").attr('data-price');
                  var p_v2 = $("#p_v2").attr('data-price');
                  var p_v3 = $("#p_v3").attr('data-price');

                  var t_price = Number(p_v1)+ Number(p_v2)+ Number(p_v3);
                  $("#t_price span").text(t_price.toFixed(2));
            });

            $("#product2_chk").click(function(){
            	 var checked = $("input[id='product2_chk']:checked").length;
                  if (checked == 0) {

                    $("#p_v2").attr('data-price','0');
                    $("#p_v2").attr('data-qty','0');
                    $(".product2_op").addClass('disabled');

                  }else{

                    var p_id = $("#product2_id").val();
                    var p_price = $("#v"+p_id).attr('data-price');
                    $("#p_v2").attr('data-price',p_price);
                    $("#p_v2").attr('data-qty','1');
                    $(".product2_op").removeClass('disabled');

                }
                  var p_v1 = $("#p_v1").attr('data-price');
                  var p_v2 = $("#p_v2").attr('data-price');
                  var p_v3 = $("#p_v3").attr('data-price');

                  var t_price = Number(p_v1)+ Number(p_v2)+ Number(p_v3);
                  $("#t_price span").text(t_price.toFixed(2));
            });

            $("#product3_chk").click(function(){
            	 var checked = $("input[id='product3_chk']:checked").length;
                  if (checked == 0) {

                    $("#p_v3").attr('data-price','0');
                    $("#p_v3").attr('data-qty','0');
                    $(".product3_op").addClass('disabled');

                  }else{

                    var p_id = $("#product3_id").val();
                    var p_price = $("#v"+p_id).attr('data-price');
                    $("#p_v3").attr('data-price',p_price);
                    $("#p_v3").attr('data-qty','1');
                    $(".product3_op").removeClass('disabled');

                }
                  var p_v1 = $("#p_v1").attr('data-price');
                  var p_v2 = $("#p_v2").attr('data-price');
                  var p_v3 = $("#p_v3").attr('data-price');

                  var t_price = Number(p_v1)+ Number(p_v2)+ Number(p_v3);
                  $("#t_price span").text(t_price.toFixed(2));
            });
            $(document).ready(function () {
          $(".atc_btn .btn.btn--add-to-cart").click(function () {
              setTimeout(function () {
                  location.reload();
              }, 1000);
          });
      });
