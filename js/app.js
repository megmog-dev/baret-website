feather.replace();

function navigationScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (document.documentElement.scrollTop > 10) {
            navbar.classList.add('nav-sticky');
        } else {
            navbar.classList.remove('nav-sticky');
        }
    }
}
window.addEventListener('scroll', navigationScroll);

function form() {
    let company = document.forms["myForm"]["company"].value
    let name = document.forms["myForm"]["name"].value;
    let subject = document.forms["myForm"]["subject"].value;
    let number = document.forms["myForm"]["number"].value;
    let comments = document.forms["myForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById("error-msg").innerHTML = "";
    let inputs = [{ error: 'Име', value: name }, { error: 'Имейл', value: email }, { error: 'Тема', value: subject }, { error: 'Номер', value: number }, { error: 'Коментар', value: comments }];

    inputs.forEach(input => {
        if (input.value === "" || input.value === null) {
            document.getElementById("error-msg").innerHTML = "<div class='alert alert-danger error_message'>*Моля въведете " + input.error + "</div>";
            fadeIn();
            input.haveError = true;
        }
    });

    return inputs.findIndex(x => x.haveError === true) === 0 ? false : true;
}

function fadeIn() {
    let fade = document.getElementById("error-msg");
    let opacity = 0;
    let intervalId = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.25;
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 200);
}


const countries = {
    country1: 'Bulgaria',
    country2: 'Romania',
    country3: 'Serbia',
    country4: 'Macedonia',
    country5: 'Turkey',
    country6: 'Greece'
}

let pCarousel = document.getElementById('carousel-weather');


Object.values(countries).map(value => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=0cc2acf7fc5f46c1993144958252202&q=${value}&aqi=no`)
        .then(res => res.json())
        .then(data => {
            const weather = data;
            const location = weather.location;
            const current = data.current;

            pCarousel.innerHTML += `<div class="slider-item">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="client-review">
                                                <div class="name position-relative">
                                                    <h5 class="mt-2">${location.country}</h5>
                                                    <p class="mt-2">${location.name}</p>
                                                    <p>${location.region}</p>
                                                    <img src="${current.condition.icon}" alt="weather-icon">
                                                    <p>${current.condition.text}</p>
                                                    <p>Temperature: ${current.temp_c}</p>
                                                    <p>Humidity: ${current.humidity}</p>
                                                    <p>Wind(kph): ${current.wind_kph}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

        })
        .catch(err => console.error(err));



});

if (document.getElementsByClassName('weather-slider')[0] != undefined) {
    var slider = tns({
        container: '.weather-slider',
        loop: true,
        navPosition: "bottom",
        speed: 400,
        mouseDrag: true,
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        responsive: {
            640: {
                edgePadding: 20,
                gutter: 20,
                items: 1
            },
            700: {
                edgePadding: 20,
                gutter: 30,
                items: 2
            },
            900: {
                edgePadding: 20,
                items: 1
            }
        }
    });
}
