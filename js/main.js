const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


 

  function init() {
    let map = new ymaps.Map('map', {
        center: [55.721855816906015,37.57365503630026],
        zoom: 9

    });
  }

  ymaps.ready(init);


  