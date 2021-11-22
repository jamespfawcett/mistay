
 console.log('linked');


//  ================
//  TO DO LIST
// click through modals
// add meals
// add maps to modal
// get price breakdown in modal

// separate homepage from search page (hide/show?)
// add sorting options
// drop down for extra filters
// add hamburger menu
// Add properties to array
// Add pictures to gallery
// Style the search filters
// Styled error alerts
// =================

//  Air BNB Link
//  https://www.airbnb.co.nz/rooms/17832389?check_in=2021-11-10&check_out=2021-11-11&translate_ugc=false&federated_search_id=860b253b-d202-4d34-9def-e7286f13cade&source_impression_id=p3_1635816061_fv1H%2B3xbg3Wy4v3i&guests=1&adults=1

let script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap&libraries=places&v=weekly" async defer >';

console.log(script);

function initMap(){
  // ============
  // DATE PICKER
  // ============
  $("#checkInDate").datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    minDate: new Date(),
    maxDate: "+2y",
    
    onSelect: function(date){

      let selectDate = new Date(date);
      let msecInADay = 86400000;
      let stDate = new Date(selectDate.getTime() + msecInADay);

      $("#checkOutDate").datepicker("option", "minDate", stDate)
      let enDate = new Date(selectDate.getTime() + 15 * msecInADay);
      $('#checkOutDate').datepicker("option","maxDate", enDate);
    
    }
  });

  $("#checkOutDate").datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    minDate: new Date(),
  })

  $('#searchBtn').click(function(){
    dateDiff();
});

function dateDiff(){
    let start = $(checkInDate).datepicker('getDate');
    let end = $(checkOutDate).datepicker('getDate');
    // calculation to get readable days
    let nights = (end - start)/1000/60/60/24;
    console.log(nights);
    
}
// ===================
// END OF DATE PICKER
// ===================

  let iceland = {lat:64.9631, lng:-19.0208};
  map = new google.maps.Map(document.getElementById('map'),{
    zoom: 5,
    center: iceland
  });
};

$(document).ready(function(){
    $('body').append(script);



const searchBtn = document.querySelector("#searchBtn");

let accom = [
  {
    id: 1,
    name: "Cordis Auckland",
    location: "Auckland City Centre",
    lat: -36.85736234403657,
    lng: 174.7637878992353,
    type: "Hotel",
    minguests: 1,
    maxguests: 2,
    min: 1,
    max: 5,
    price: 157,
    img: "./img/cordis-1.jpeg",
    description: "At the heart of Auckland’s lively uptown area, Cordis, Auckland by Langham Hospitality Group puts the city’s fashionable boutiques, galleries and museums within easy reach, so you can make the most of your day. Whether you’re travelling for work, family or leisure, a stay at Cordis, Auckland by Langham Hospitality Group lets you embrace your Auckland adventure in style.",
    amenities: ["<div class='amenities-item'><i class='fas fa-wifi'></i><p>Wi-Fi</p></div> <div class='amenities-item'><i class='fas fa-swimmer'></i><p>Swimming Pool</p></div> <div class='amenities-item'><i class='fas fa-parking'></i><p>On-Site Parking</p></div> <div class='amenities-item'><i class='fas fa-concierge-bell'></i><p>Room Service</p></div>"],
  },
  {
    id: 2,
    name: "YHA Auckland International",
    location: "Auckland City Centre",
    lat: -36.85551609301665,
    lng: 174.76356857120985,
    type: "Hostel",
    minguests: 1,
    maxguests: 1,
    min: 1,
    max: 10,
    price: 30,
    img: "./img/yhaauckland-1.jpeg",
    description: "A great easy-going base in the heart of Auckland City. This secure, recently refurbished, well-equipped hostel keeps you in the midst of it all, just off Queen St. Our functional rooms and spacious communal areas cater for all travel types, and our guests love the pre-stay luggage storage, 5GB free WiFi per day, movie nights, and paid on-site car parking. Cook a meal in the fully-equipped kitchen, relax with a book in the basement level lounges, or borrow a board game. Our team are on hand to help with travel tips and a free activity booking service.",
    amenities: ["<div class='amenities-item'><i class='fas fa-wifi'></i><p>Wi-Fi</p></div> <div class='amenities-item'><i class='fas fa-swimmer'></i><p>Swimming Pool</p></div> <div class='amenities-item'><i class='fas fa-parking'></i><p>On-Site Parking</p></div> <div class='amenities-item'><i class='fas fa-concierge-bell'></i><p>Room Service</p></div>"],
  },
  {
    id: 3,
    name: "Greenlane Manor Motel",
    location: "Greenlane, Auckland",
    lat: -36.89711098999624,
    lng: 174.8023028936407,
    type: "Motel",
    minguests: 2,
    maxguests: 4,
    min: 3,
    max: 10,
    price: 90,
    img: "./img/greenlanemanor-1.jpeg",
    description: "Situated near Ellerslie, right in the heart of Auckland city, we can provide the perfect accommodation solution for you whether you are on holiday, here for a business trip or just visiting. 2 minutes from the motorway and a short drive to the CBD, One Tree Hill and Newmarket, you truly are placed right in the heart of the city. Whether you are looking for cheap accommodation or would rather have the luxuries of a fully equipped room, we will have the rental room you are looking for in our selection. From budget studio rooms to the Deluxe Twin Bed Room, we can accommodate for your every need. Book your room today!",
    amenities: ["<div class='amenities-item'><i class='fas fa-wifi'></i><p>Wi-Fi</p></div> <div class='amenities-item'><i class='fas fa-swimmer'></i><p>Swimming Pool</p></div> <div class='amenities-item'><i class='fas fa-parking'></i><p>On-Site Parking</p></div> <div class='amenities-item'><i class='fas fa-concierge-bell'></i><p>Room Service</p></div>"],
  },
  {
    id: 4,
    name: "Auckland Central Garden Cottage",
    location: "Mount Eden, Auckland",
    lat: -36.887795,
    lng: 174.759048,
    type: "House",
    minguests: 1,
    maxguests: 4,
    min: 2,
    max: 15,
    price: 250,
    img: "./img/aucklandcentralgardencottage-1.jpeg",
    description: "Perhaps the cutest cottage in Airbnb ?! Only 5 mins walking to Mt Eden Village. The cottage is soaked with the sun and surrounded by trees ... located in Auckland one of most popular & historic district, best restaurants/ best Cafe / best pubs ....best kiwi style! The cottage is the Loft Style , one double room with a queen size bed upstairs and two sofa beds ( 1.95x1.4 ) downstairs in living room . Perfect for 2~4 adults , or small family with child. Having your breakfast in the fresh morning and enjoy the sunset while having dinner. Our beautiful country style garden is a peaceful place to make you relax. You can eat and wander in the village or walking to the mountain. For kids , there are 3 wonderful playgrounds nearby, which could keep your child a whole day !",
    amenities: ["<div class='amenities-item'><i class='fas fa-wifi'></i><p>Wi-Fi</p></div> <div class='amenities-item'><i class='fas fa-swimmer'></i><p>Swimming Pool</p></div> <div class='amenities-item'><i class='fas fa-parking'></i><p>On-Site Parking</p></div> <div class='amenities-item'><i class='fas fa-concierge-bell'></i><p>Room Service</p></div>"]
  }
]

function modal(){
  $(".accom-card").click(function(){
      console.log('clicked');
      let i = 0;
      for(i = 0; i < accom.length; i++){
          
          if(parseInt(this.id) === accom[i].id){
            console.log("Match");

              $(".modal-title").empty().append(
                  `
                      <h2 class="modal__name">${accom[i].name}</h2><h6 class="modal__type">${accom[i].location}</h6>
                  `
              )
              $(".modal-info").empty().append(
                  `<div class="container-fluid">
                    <div class="row">
                      <div class="col-md-6">
                      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                          <img src="${accom[i].img}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                          <img src="${accom[i].img}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                          <img src="${accom[i].img}" class="d-block w-100" alt="...">
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
                    <div class="row">
                        <div class="col-md-4">
                            <h3 class="modal__heading">BEDDING</h3>
                            <p>1 Queen Bed</p>
                            <h3 class="modal__heading">GUESTS</h3>
                            <p>This property allows ${accom[i].minguests} - ${accom[i].maxguests} guests</p>
                            <h3 class="modal__heading">MIN / MAX STAY</h3>
                            <p> Minimum stay of ${accom[i].min} nights, maximum stay of ${accom[i].max} nights</p>
                        </div>
                        <div class="col-md-4">
                            <h3 class="modal__heading">AMENITIES</h3>
                            ${accom[i].amenities}
                        </div>
                        <div class="col-md-4">
                            <h3 class="modal__heading">PRICE</h3>
                            <p class="modal__price">$${accom[i].price} per night</p>
                        </div>
                      </div>
                  </div>
                  
                  
                  `   
              )
              $(".modal-footer").empty().append(
                `
                <button type="button" class="modal__book-btn">BOOK NOW</button>
                `
              )
          }
      }
  });
}

function accomArray(){
  let i = 0;
  for(i = 0; i < accom.length; i++){
      generateCard(i);
    
  }

  modal();

};

// function generateCard(x){
//   $('.accom-container').append(
//     `
//     <div id="${accom[x].id}" class="accom-card" data-bs-toggle="modal" data-bs-target="#exampleModal">
//       <img class="accom-card__img" src="${accom[x].img}" alt="">
//      <div class="accom-card__content">
//         <div class="accom-card__info-container-top">
//             <h1 class="accom-card__heading">${accom[x].name}</h1>                        
//         </div>
//         <div class="accom-card__info-container">
//             <div class="accom-card__location">
//                 <i class="accom-card__fas fas fa-map-marker-alt"></i>
//                 <p class="accom-card__text">${accom[x].location}</p>
//             </div>
//             <div class="accom-card__price">
//                 <h4 class="accom-card__price-text">$${accom[x].price} per night</h4>
//             </div>
//         </div>
//     </div>
// </div>
//     `
//   );
//   // modal();
// }

function allCards(){
  $('.accom-container').empty();
  for(let i =0; i <accom.length; i++){
      generateCard(i);
  }
  modal();
}

// accomArray();

// ------------------------------
// --------DATE------------------
// ------------------------------

function calculateSearch(event){
  event.preventDefault();

  // NIGHTS STAYING
  // ~~~~~~~~~~~~~~

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
  console.log(checkInDetails);
  console.log(checkOutDetails);
 
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

  // NUMBER OF GUESTS
  // ~~~~~~~~~~~~~~~~
  let guests = ($('#guests').val()); 
  let numberOfGuests = parseInt(guests);

  let price = ($('#price').val());
  let maxPrice = parseInt(price);

  console.log(numberOfGuests);
  console.log(dayDifference);
  console.log(maxPrice);

  checkInData(dayDifference, numberOfGuests, maxPrice);
 
};



function checkInData(nightsBooked, peopleBooked, priceLimit){
  $('.accom-container').empty();

  for(let i = 0; i < accom.length; i++){
      if( (accom[i].price <= priceLimit) && (accom[i].min <= nightsBooked) && (accom[i].max >= nightsBooked) && (accom[i].minguests <= peopleBooked) && (accom[i].maxguests >= peopleBooked)){
        console.log(accom[i]);

        generateCard(i);
 
      };
      // console.log(accom[i]);
    }
  
    modal();
}



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
  // modal();
}


searchBtn.addEventListener("click", calculateSearch);

// Closing tag for document.ready function
});


