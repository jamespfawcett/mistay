
 console.log('linked');
//  if($('.accom-container').innerHTML = ''){
//   alert('asoudhalsd');
// }

// how to check if html div is empty

// const elem = document.querySelector(".accom-container")
// console.log(elem.childNodes.length)

// if(elem.childNodes.length == 0){
//   alert('why you do this');
// }

//  ================
//  TO DO LIST
//  ================

// add sorting options
// drop down for extra filters
// add hamburger menu
// Add properties to array
// Add pictures to gallery
// Style the search filters
// Styled error alerts
// YHA 1-1 nights error
// =================


//  Air BNB Link
//  https://www.airbnb.co.nz/rooms/17832389?check_in=2021-11-10&check_out=2021-11-11&translate_ugc=false&federated_search_id=860b253b-d202-4d34-9def-e7286f13cade&source_impression_id=p3_1635816061_fv1H%2B3xbg3Wy4v3i&guests=1&adults=1





// =====================
// GLOBAL VARIABLES
// =====================
let markers = [];

let script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap&libraries=places&v=weekly" async defer >';

// ======================
// ACCOM ARRAY
// ======================

let accom = [
  {
    id: 1,
    name: 'Cordis Auckland',
    location: 'Auckland City Centre',
    lat: -36.85736234403657,
    lng: 174.7637878992353,
    type: 'Hotel',
    minGuests: 1,
    maxGuests: 2,
    min: 1,
    max: 5,
    price: 157,
    img: './img/cordis-1.jpeg',
    img2: './img/cordis-2.jpeg',
    img3: './img/cordis-3.jpeg',
    description: 'At the heart of Auckland’s lively uptown area, Cordis, Auckland by Langham Hospitality Group puts the city’s fashionable boutiques, galleries and museums within easy reach, so you can make the most of your day. Whether you’re travelling for work, family or leisure, a stay at Cordis, Auckland by Langham Hospitality Group lets you embrace your Auckland adventure in style.',
    amenities: ["<div class='amenities-item'><i class='fas fa-wifi'></i><p>Wi-Fi</p></div> <div class='amenities-item'><i class='fas fa-swimmer'></i><p>Swimming Pool</p></div> <div class='amenities-item'><i class='fas fa-parking'></i><p>On-Site Parking</p></div> <div class='amenities-item'><i class='fas fa-concierge-bell'></i><p>Room Service</p></div>"],
    meals: ['Buffet Breakfast', 15],
    // meals: [
    //   {meal: "Continental Breakfast",
    //   mealCost: 15,},
    //   {meal: "Buffet Breakfast",
    //   mealCost: 20,},
    // ],
  },
  {
    id: 2,
    name: 'YHA Auckland International',
    location: 'Auckland City Centre',
    lat: -36.85555901481974,
    lng: 174.76364367377255,
    type: 'Hostel',
    minGuests: 1,
    maxGuests: 1,
    min: 1,
    max: 10,
    price: 30,
    img: './img/yhaauckland-1.jpeg',
    img2: './img/yhaauckland-2.jpeg',
    img3: './img/yhaauckland-3.jpeg',
    description: 'A great easy-going base in the heart of Auckland City. This secure, recently refurbished, well-equipped hostel keeps you in the midst of it all, just off Queen St. Our functional rooms and spacious communal areas cater for all travel types, and our guests love the pre-stay luggage storage, 5GB free WiFi per day, movie nights, and paid on-site car parking. Cook a meal in the fully-equipped kitchen, relax with a book in the basement level lounges, or borrow a board game. Our team are on hand to help with travel tips and a free activity booking service.',
    amenities: ["<div class='amenities-item'><i class='fas fa-wifi'></i><p>Wi-Fi</p></div> <div class='amenities-item'><i class='fas fa-swimmer'></i><p>Swimming Pool</p></div> <div class='amenities-item'><i class='fas fa-parking'></i><p>On-Site Parking</p></div> <div class='amenities-item'><i class='fas fa-concierge-bell'></i><p>Room Service</p></div>"],
    meals: ['Continental Breakfast', 7],
  },
  {
    id: 3,
    name: 'Greenlane Manor Motel',
    location: 'Greenlane, Auckland',
    lat: -36.89711098999624,
    lng: 174.8023028936407,
    type: 'Motel',
    minGuests: 2,
    maxGuests: 4,
    min: 3,
    max: 10,
    price: 90,
    img: './img/greenlanemanor-1.jpeg',
    img2: './img/greenlanemanor-2.jpeg',
    img3: './img/greenlanemanor-3.jpeg',
    description: 'Situated near Ellerslie, right in the heart of Auckland city, we can provide the perfect accommodation solution for you whether you are on holiday, here for a business trip or just visiting. 2 minutes from the motorway and a short drive to the CBD, One Tree Hill and Newmarket, you truly are placed right in the heart of the city. Whether you are looking for cheap accommodation or would rather have the luxuries of a fully equipped room, we will have the rental room you are looking for in our selection. From budget studio rooms to the Deluxe Twin Bed Room, we can accommodate for your every need. Book your room today!',
    amenities: ["<div class='amenities-item'><i class='fas fa-wifi'></i><p>Wi-Fi</p></div> <div class='amenities-item'><i class='fas fa-swimmer'></i><p>Swimming Pool</p></div> <div class='amenities-item'><i class='fas fa-parking'></i><p>On-Site Parking</p></div> <div class='amenities-item'><i class='fas fa-concierge-bell'></i><p>Room Service</p></div>"],
    meals: ['Continental Breakfast', 12],
  },
  {
    id: 4,
    name: 'Auckland Central Garden Cottage',
    location: 'Mount Eden, Auckland',
    lat: -36.887795,
    lng: 174.759048,
    type: 'House',
    minGuests: 1,
    maxGuests: 4,
    min: 2,
    max: 15,
    price: 250,
    img: './img/aucklandcentralgardencottage-1.jpeg',
    img2: './img/aucklandcentralgardencottage-2.jpeg',
    img3: './img/aucklandcentralgardencottage-3.jpeg',
    description: 'Perhaps the cutest cottage in Airbnb ?! Only 5 mins walking to Mt Eden Village. The cottage is soaked with the sun and surrounded by trees ... located in Auckland one of most popular & historic district, best restaurants/ best Cafe / best pubs ....best kiwi style! The cottage is the Loft Style , one double room with a queen size bed upstairs and two sofa beds ( 1.95x1.4 ) downstairs in living room . Perfect for 2~4 adults , or small family with child. Having your breakfast in the fresh morning and enjoy the sunset while having dinner. Our beautiful country style garden is a peaceful place to make you relax. You can eat and wander in the village or walking to the mountain. For kids , there are 3 wonderful playgrounds nearby, which could keep your child a whole day!',
    amenities: ["<div class='amenities-item'><i class='fas fa-wifi'></i><p>Wi-Fi</p></div> <div class='amenities-item'><i class='fas fa-swimmer'></i><p>Swimming Pool</p></div> <div class='amenities-item'><i class='fas fa-parking'></i><p>On-Site Parking</p></div> <div class='amenities-item'><i class='fas fa-concierge-bell'></i><p>Room Service</p></div>"],
    meals: ['Coffee, Cereal & Toast Package', 5]
  }
];

// ======================
// END OF ACCOM ARRAY
// ======================

// ======================
// INIT MAP
// ======================

function initMap(center){
  
  // DATE PICKER
  
  $('#checkInDate').datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    minDate: new Date(),
    maxDate: '+2y',
    
    onSelect: function(date){

      let selectDate = new Date(date);
      let msecInADay = 86400000;
      let stDate = new Date(selectDate.getTime() + msecInADay);

      $("#checkOutDate").datepicker('option', 'minDate', stDate);
      let enDate = new Date(selectDate.getTime() + 15 * msecInADay);
      $('#checkOutDate').datepicker('option','maxDate', enDate);
    
    }
  });

  $("#checkOutDate").datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    minDate: new Date(),
  });

  $('#searchBtn').click(function(){
    dateDiff();
});

// END OF DATE PICKER

// MAPS AND MARKERS

map = new google.maps.Map(document.getElementById('map'),{
  zoom: 14,
  center: center
});
}

//  END OF MAPS & MARKERS

// ======================
// END OF INIT MAP
// ======================

function dateDiff(){
    let start = $(checkInDate).datepicker('getDate');
    let end = $(checkOutDate).datepicker('getDate');
    // calculation to get readable days
    let nights = (end - start)/1000/60/60/24;
    console.log(nights);
    
}



$(document).ready(function(){
    $('body').append(script);



const searchBtn = document.querySelector("#searchBtn");


// ======================
// MODAL FUNCTION
// ======================


$('#modalCloseBtn').click(function(){
  reloadMarkers();
 
});


function modal(_nights){
  $('.accom-card').click(function(){
      let accomPrice = 0;
      let i = 0;
      for(i = 0; i < accom.length; i++){
        

          if(parseInt(this.id) === accom[i].id){
           
            let location = {lat: accom[i].lat, lng:accom[i].lng};
            
            initMap(location);

            console.log(location);
            let marker = new google.maps.Marker({
              position: location,
              map:map
            });

            accomPrice = accom[i].price;
            markers.push(marker);

              $('.modal-title').empty().append(
                  `
                      <h2 class="modal__name">${accom[i].name}</h2><h6 class="modal__type">${accom[i].location}</h6>
                  `
              );
              $('.modal-info').empty().append(
                  `<div class="container-fluid">
                    <div class="row modal__row">
                      <div class="col-md-6">
                      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner carousel__inner">
                          <div class="carousel-item carousel__item active">
                          <img src="${accom[i].img}" class="d-block w-100 img-fluid" alt="...">
                          </div>
                          <div class="carousel-item">
                          <img src="${accom[i].img2}" class="d-block w-100 img-fluid" alt="...">
                          </div>
                          <div class="carousel-item">
                          <img src="${accom[i].img3}" class="d-block w-100 img-fluid" alt="...">
                          </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                      </button>
                  </div>
                      </div>
                      <div class="col-md-6">
                      <h3 class="modal__heading">ABOUT</h3>
                      <p class="modal__description">${accom[i].description}</p>
                      </div>
                    </div>
                  </div>
                  <div class="container-fluid modal__information-container">
                    <div class="row  modal__row">
                        <div class="col-md-4">
                            <h3 class="modal__heading">BEDDING</h3>
                            <p>1 Queen Bed</p>
                            <h3 class="modal__heading">GUESTS</h3>
                            <p>This property allows ${accom[i].minGuests} - ${accom[i].maxGuests} guests</p>
                            <h3 class="modal__heading">MIN / MAX STAY</h3>
                            <p> Minimum stay of ${accom[i].min} nights, maximum stay of ${accom[i].max} nights</p>
                        </div>
                        <div class="col-md-4">
                            <h3 class="modal__heading">AMENITIES</h3>
                            ${accom[i].amenities}
                            <p class="amenities-see-more">see all amenities</p>
                        </div>
                        <div class="col-md-4">
                            <h3 class="modal__heading">PRICE</h3>
                            <p class="modal__text">$${accom[i].price} per night</p>
                            <p class="modal__text">plus x${_nights} nights (${checkInDateGlobal} - ${checkOutDateGlobal})</p>
                            <p class="modal__price" id="total-price"></p>
                            <p class="modal__text modal__text-meal">Optional meal add-on:</p>
                            <form>
                              <label class="meal-checkbox">${accom[i].meals[0]}: <span class="meal-checkbox__price">$${accom[i].meals[1]} per night</span>
                              <input id="meals-checkbox" name="meals" type="checkbox" value="${accom[i].meals[1]}">
                              <span class="checkmark"></span>
                            </label>
                        </form>
        
                        </div>
                      </div>
                      <div class="row modal__map-location  modal__row">
                        <div>
                        <h3 class="modal__heading modal__map-heading">LOCATION</h3>
                        </div>
                        <div class="modal__location-city modal__location">
                        <i class="accom-card__fas fas fa-map-marker-alt"></i>
                        <p class="accom-card__text">${accom[i].location}</p>
                      </div>
                </div>
                  </div>
                  
                  
                  `   
              );
              $('.modal-footer').empty().append(
                `
                <button id="bookNow" type="button" class="modal__book-btn">BOOK NOW</button>
                `
              );
              printTotalPrice();

              $('#meals-checkbox').change(function(){
                // $('#meals-checkbox:checked')
                let mealTest = [];
        
                if(this.checked == true){
                  mealTest.push(this.value);
                } else if(this.checked == false){
                    mealTest.pop();
                }
                
                printTotalPrice(mealTest[0]);
              });

              function printTotalPrice(mealPrice = 0){
                const price = accomPrice;
                const nights = _nights;
                const total = (price * nights) + (parseFloat(mealPrice) * nights);
                $('#total-price').text('Total: $'+total);
              }

              function bookNow(){
                $('#bookNow').click(function(){
                  $('.modal-title').empty().append(
                    `
                    <h2 class="modal__name">Booking Confirmation</h2>
                    `
                  )
                  $('.modal-info').empty().append(
                  
                    `
                    <div class="confirmation">
                    <i class="fas fa-check confirmation__check"></i>
                    <h2 class="confirmation__thanks">Thank you for booking with miStay!</h2>
                    <p class="confirmation__text">Your booking number is <span>57781037</span> and all details have been emailed to you.</p>
                    <div class="confirmation__button-container">
                        <a href="index.html"><button type="button" class="confirmation__button">Return to homepage</button></a>
                    </div>            
                  </div>
                    `
                  )
                  $('.modal__map').empty()
                  $('.modal-footer').empty()
                })
              }
              bookNow();
          }   
      }
  });
}


// ======================
// END OF MODAL FUNCTION
// ======================

const bookNow = document.querySelector('#bookNow');

// ====================================
// start of reload markers
// ====================================
function reloadMarkers(){
  // loop through our array and set the map to null value
  for(let i =0; i<markers.length; i++){
      markers[i].setMap(null);
  }
  markers=[];
  console.log(markers);
}

// ====================================
// end of reload markers
// ====================================

// ============
// ACCOM ARRAY
// ============

function accomArray(){
  let i = 0;
  for(i = 0; i < accom.length; i++){
      generateCard(i);
  }
  modal();
}

// ============
// ALL CARDS
// ============

//Function is for developer use, in order to display cards by default, without having to saerch every time. To use, please un-comment the function and call it directly under the array. 

// function allCards(){
//   $('.accom-container').empty();
//   for(let i =0; i <accom.length; i++){
//       generateCard(i);
//   }
//   modal();
// }

// ======================
// DATE
// ======================

function calculateSearch(event){
  event.preventDefault();

  // NIGHTS STAYING
  // ~~~~~~~~~~~~~~

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let msDay = 1000 * 3600 * 24;

  let checkInDate = new Date($('#checkInDate').val());
  let checkOutDate = new Date($('#checkOutDate').val());

  let checkInDay = checkInDate.getDate(),
      checkInMonth = checkInDate.getMonth() +1,
      checkInYear = checkInDate.getFullYear();
      checkOutDay = checkOutDate.getDate(),
      checkOutMonth = checkOutDate.getMonth() +1,
      checkOutYear = checkOutDate.getFullYear();

  let checkInDetails = [checkInDay,checkInMonth,checkInYear].join('/');
  let checkOutDetails = [checkOutDay,checkOutMonth,checkOutYear].join('/');
 
  // Conditions for user
  if ( (checkInDate == 'Invalid Date') || (checkOutDate == 'Invalid Date') ){
      alert('please enter check in and check out dates');
  } else if( checkInDate.getTime() >= checkOutDate.getTime() ){
      alert('check out day cant be before check in date or on same day');
  }
 
  // calculate the difference in time
  let difference = checkOutDate.getTime() - checkInDate.getTime();
  // converts time to a day value from ms
  let dayDifference = difference/msDay;

  window.checkInDateGlobal = [checkInDay,checkInMonth,checkInYear].join('/');
  window.checkOutDateGlobal = [checkOutDay,checkOutMonth,checkOutYear].join('/');

  // NUMBER OF GUESTS
  // ~~~~~~~~~~~~~~~~
  let guests = ($('#guests').val()); 
  let numberOfGuests = parseInt(guests);

  let price = ($('#price').val());
  let maxPrice = parseInt(price);

  checkInData(dayDifference, numberOfGuests, maxPrice);
 
};



function checkInData(nightsBooked, peopleBooked, priceLimit){
    const elem = document.querySelector(".accom-container")
  console.log(elem.childNodes.length)
  $('.accom-container').empty();

  for(let i = 0; i < accom.length; i++){
      if( (accom[i].price <= priceLimit) && (accom[i].min <= nightsBooked) && (accom[i].max >= nightsBooked) && (accom[i].minGuests <= peopleBooked) && (accom[i].maxGuests >= peopleBooked)){
        generateCard(i);
      }
      
  }
   
  // const elem = document.querySelector(".accom-container")
// console.log(elem.childNodes.length)

if(elem.childNodes.length == 0){
  $('.accom-container').append(
    `
    <p class="accom-container__no-items-message">No results to show. Please try changing your search.</p>
    `
  );
}

    modal(nightsBooked);
}

// ====================
// ====GENERATE CARD===
// ====================

function generateCard(x){
  $('.accom-container').append(
    `
    <div id="${accom[x].id}" class="accom-card" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img class="accom-card__img" src="${accom[x].img}" alt="">
     <div class="accom-card__content">
        <div class="accom-card__info-container-top">
            <h1 class="accom-card__heading">${accom[x].name}</h1>                        
        </div>
        <div class="accom-card__info-container">
            <div class="accom-card__location">
                <i class="accom-card__fas fas fa-map-marker-alt"></i>
                <p class="accom-card__text">${accom[x].location}</p>
            </div>
            <div class="accom-card__price">
                <h4 class="accom-card__price-text">$${accom[x].price} per night</h4>
            </div>
        </div>
    </div>
</div>
    `
  );
  
}

// ============
// ADDING MARKERS TO MAP
// ============



searchBtn.addEventListener("click", calculateSearch);

// Closing tag for document.ready function
});


