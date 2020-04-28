$(function () {
  $("#faq-accordion").accordion({
    active: false,
  });
  $('.reviews--container').slick();
  $("#phone").mask("+7 (000) 000-00-00");
  $(".order--modal form").validate({
    errorClass: "invalid",
    validClass: "success",
    rules: {
      phone: {
        minlength: 18,
        required: true
      },
      name: {
        minlength: 2,
        required: true
      }
    },
    messages: {
      phone: {
        required: "Поле обязательно для заполнения",
        minlength: "Минимальная длина номера 10 цифр"
      },
      name: {
        required: "Поле обязательно для заполнения",
        minlength: "Минимальная длина имени 2 символа"
      }
    }
  });
  var data = {
    labels: ['Social bakers', 'Social bakers', 'Social bakers'],
      series: [
      [1000, 1000, 1000],
      [3000, 3000, 3000]
    ]
  };
  
  var options = {
    seriesBarDistance: 15
  };  
  new Chartist.Bar('.ct-chart', data, options);
});