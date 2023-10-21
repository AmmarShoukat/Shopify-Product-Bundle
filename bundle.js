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


// if u want to uncheck all the boxes by default and also disable the button by default and send only checked product to cart then this code will work for u

function frequently_bundle() {
    const data = {
      items: [],
    };

    // Loop through each checkbox
    $("input[id^='product']").each(function() {
      const checkbox = $(this);
      const productId = checkbox.attr('id');
      const isChecked = checkbox.is(":checked");

      if (isChecked) {
        addItemToCart(data, productId);
      }
    });

    sendToCart(data);

    $(".atc_btn .btn--add-to-cart .btn__text").text('Adding to cart');
    setTimeout(function () {
      $(".atc_btn .btn--add-to-cart .btn__text").text('Add to cart');
    }, 1000);
  }

  function addItemToCart(data, productId) {
    const p_id = productId.replace("product", "");
    const p_price = parseFloat($("#v" + p_id).attr('data-price'));
    data.items.push({
      quantity: 1,
      id: p_id,
      price: p_price,
    });
  }

  function sendToCart(data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/cart/add.js', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(data));
  }

  function enableCartButton() {
    $(".atc_btn .btn--add-to-cart").prop('disabled', false);
  }

  function disableCartButton() {
    $(".atc_btn .btn--add-to-cart").prop('disabled', true);
  }

  // Add click event for nws-bundle-text div
  $(".nws-bundle-text").click(function () {
    const checkbox = $(this).find("input:checkbox");
    checkbox.prop('checked', !checkbox.prop('checked'));

    handleCheckboxClick(checkbox);
  });

  function handleCheckboxClick(checkbox) {
    const checked = $("input:checkbox:checked").length;
    if (checked > 0) {
      enableCartButton();
    } else {
      disableCartButton();
    }
  }

  function handleProductChange(productId, dataId, priceElementId) {
    $("#" + productId).change(function () {
      const p_id = $(this).val();
      const p_price = $("#v" + p_id).attr('data-price');
      $(dataId).attr('data-price', p_price);

      const p_v1 = $("#p_v1").attr('data-price');
      const p_v2 = $("#p_v2").attr('data-price');
      const p_v3 = $("#p_v3").attr('data-price');

      const t_price = Number(p_v1) + Number(p_v2) + Number(p_v3);
      $("#t_price span").text(t_price.toFixed(2));
    });
  }

  // Initialize by disabling the "Add to cart" button.
  disableCartButton();

  // Attach event handlers
  handleProductChange("product1_id", "#p_v1", "p_v1");
  handleProductChange("product2_id", "#p_v2", "p_v2");
  handleProductChange("product3_id", "#p_v3", "p_v3");

  // Initial state: Uncheck all checkboxes
  $("input[id^='product']").prop('checked', false);

  $(document).ready(function () {
    $(".atc_btn .btn.btn--add-to-cart").click(function () {
      setTimeout(function () {
        location.reload();
      }, 1000);
    });
  });



//for dynamic products for large number of products

function frequently_bundle() {
  const data = {
    items: []
  };

  for (let i = 1; i <= 15; i++) {
    const checkboxId = `product${i}_chk`;
    if ($(`#${checkboxId}`).is(":checked")) {
      addItemToCart(data, `product${i}_id`, checkboxId);
    }
  }

  sendToCart(data);

  $(".atc_btn .btn--add-to-cart .btn__text").text('Adding to cart');
  setTimeout(function() {
    $(".atc_btn .btn--add-to-cart .btn__text").text('Add to cart');
  }, 1000);
}

function addItemToCart(data, productId, checkboxId) {
  const p_id = parseInt($(`#${productId}`).val());
  const p_price = parseFloat($(`#v${p_id}`).attr('data-price'));
  data.items.push({
    quantity: 1,
    id: p_id,
    price: p_price
  });
}

function sendToCart(data) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/cart/add.js', true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.send(JSON.stringify(data));
}

function disableAddToCartButton() {
  $(".atc_btn .btn--add-to-cart").prop('disabled', true);
}

function enableAddToCartButton() {
  $(".atc_btn .btn--add-to-cart").prop('disabled', false);
}

function handleCheckboxClick(checkboxId) {
  $(`#${checkboxId}`).click(function() {
    const checked = $(`input[id='${checkboxId}']:checked`).length;
    if (checked > 0) {
      enableAddToCartButton();
    } else {
      disableAddToCartButton();
    }
  });
}

function handleProductChange(productId, dataId, priceElementId) {
  $(`#${productId}`).change(function() {
    const p_id = $(this).val();
    const p_price = $(`#v${p_id}`).attr('data-price');
    $(dataId).attr('data-price', p_price);

    let t_price = 0;
    for (let i = 1; i <= 15; i++) {
      t_price += parseFloat($(`#p_v${i}`).attr('data-price'));
    }
    $("#t_price span").text(t_price.toFixed(2));
  });
}

// Initialize by disabling the "Add to cart" button.
disableAddToCartButton();

// Attach event handlers and set initial states
for (let i = 1; i <= 15; i++) {
  const checkboxId = `product${i}_chk`;
  const productId = `product${i}_id`;
  handleCheckboxClick(checkboxId);
  handleProductChange(productId, `#p_v${i}`, `p_v${i}`);
  $(`#${checkboxId}`).prop('checked', false);
}
