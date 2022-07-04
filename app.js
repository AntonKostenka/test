$(function () {
   //Fixed Header
   let header = $('#header') // Получаем доступ к єлементу HTML через id
   let intro = $('#intro')
   let introH = intro.innerHeight()//Получаем высоту елемента с помощью метода
   let scrollPos = $(window).scrollTop()//Получаем доступ к свойству позиции скрола окна
   let nav = $('#nav');//Навигация
   let navToggle = $('#navToggle');//button

   header.addClass('fixed')//Добавляем селектор класса елементу ДОМ
   
   $(window).on('scroll load resize', function () {//scroll - событи при котором будет выполнятся функция. load - событи при котором после перезагрузки будут проверятся параметры и выполнятся функция. resize - при изминение окна..
      introH = intro.innerHeight()//Перезаписываем размер интро при изминение экрана пользователя
      scrollPos = $(this).scrollTop()



      
      if (scrollPos > introH) {
         header.addClass('fixed')//Добавляем класс елементу 
      } else {
         header.removeClass('fixed')//Удаляем класс
      }
   });
   /*function checkScroll(scrollPos, introH) { отдельная функция для проверки параметров чтобы всегда отображался хедер если событи онлоуд не сработало
      if (scrollPos > introH) {
         header.addClass('fixed')//Добавляем класс елементу 
      } else {
         header.removeClass('fixed')//Удаляем класс
      }
   }*/


   // Smooth scroll
   $('[data-scroll]').on('click', function (event) {//Выборка елемента. Получаем елемент с атрибутом 'data-scroll' вешаем на него событие при котором будет выполнятся функция. Также для функции добавляем обработчик событий.
      event.preventDefault();//Отменяем стандартное поведение ссылки: перезагрузку страницы

      let elementId = $(this).data('scroll');//Получаем значение атрибута елемента на который мы нажали
      let elementOffset = $(elementId).offset().top;//Передаем значение переменной elementId чтобы получить значение отступа елемента от верха

      nav.removeClass('show')//При нажатие на ссылку убираем у нее класс

      $('html, body').animate({//Для елементов 'html, body делаем плавный скрол 
         scrollTop: elementOffset //Говорим что мы хотим анимировать(скролл) передаем свойству scrollTop значение на какое нужно проскролить страницу в низ
      }, 700)//Время прокрутки
   });

   // navToggle
  
   navToggle.on('click', function (event) {//Получем кнопку
      event.preventDefault()
      nav.toggleClass('show')//метод который добавляет либо удаляет каласс при нажатие на елемент
   })

   // Reviews: https://kenwheeler.github.io/slick/
   let slider = $('#reviewsSlider');

   slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true,
   });
	
});

