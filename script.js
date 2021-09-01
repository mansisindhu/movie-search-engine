const moviesData = [
    {
        name: "Peaky Blinders",
        releaseDate: "29-09-2020",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXT391fyWcNnuTye4DU3tGFPpF62YQ6AoQqS3j7O5tKJouRRE8IiV6s2-olTDmt_hzMi8Zz8CAXbteUgu5R77AkxZsZDu80NtFzqNmtR63MdkHUQE7N7NiJN6TO6.jpg?r=680",
        IMDb_rating: 8.5,
    },
    {
        name: "House of Cards",
        releaseDate: "29-09-2020",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQPZ9iyKbCPBlHYk1KeZvMbu9K0XcGGzwBB-CJZuXS_7bdS_lj8ZexJJChli_gvSAHXAGaq8Si_BeY-8Sfgfv-j8VAIKYdmDpuAPA7lSYOkYf0mOGEM8KUev_d1r.jpg?r=4ef",
        IMDb_rating: 9,
    },
    {
        name: "Main Hoon Na",
        releaseDate: "29-09-2020",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfnsiHUYh9WPUpVBupFA80RV22I1ZajvZMsbt1AScsz2sF7Txsk1yt8bXE6EFmfC0ZkiLHlFdS3F4ivRSyVnKd2raYg.webp?r=244",
        IMDb_rating: 8.5,
    },
    {
        name: "Kabhi Khushi Kabhi Gam",
        releaseDate: "29-09-2020",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYYhqK1QwowyCALJ6k_HPoB03ZFYuhl3oyW-_gMEueYFKG908yzAOi1teGIOy2yRO81xGXMlH5tMaZoS2brX2uhPfhU.webp?r=c7a",
        IMDb_rating: 9,
    },
    {
        name: "Chennai Express",
        releaseDate: "29-09-2017",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV51RpJcHWvnwauQTP3NObnTnY8r5MGIi7yAADIBj0a4E6HN_4Hjyuhpt5jW9NRP21Ys-Mzrcy0RG47pZzC_GCWzKxE.webp?r=7c0",
        IMDb_rating: 7.5,
    },
    {
        name: "Dilwale",
        releaseDate: "29-09-2007",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYgSkXi0rxsA9ab-T7ngwsppy5ZaH1GAif5U068TSSz5PR-KI0qEHQ8D7U2thDDjdbzvcS77DxtT3NAkcUGpw2SE7_E.webp?r=a12",
        IMDb_rating: 8.8,
    },
    {
        name: "Parmanu",
        releaseDate: "29-09-2017",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABffOQ2Ybj04MvAefgsuP5fBP4YvavjlfbLK9xxEF-wuVYsfCyqqa7bGWCk3mP4z5zja5b3U78JUWuF6Zt_MZE3pYhMU.webp?r=de5",
        IMDb_rating: 6.5,
    },
    {
        name: "Dark",
        releaseDate: "29-09-2007",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSEl8LWx4tMJIM9Atm3F1Y49Uq6X01tnDe8gPA6d84-gQ767saz9z7Jxj9sFozuI8bcM2vlxeP9IPq3Aa7jxLlkMu8JGjizRLblNEcmD7g-Z2NeZvkvV5nWF9DmJ.jpg?r=393",
        IMDb_rating: 7.8,
    },
    {
        name: "Dear Zindagi",
        releaseDate: "29-09-1997",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaN06xTKujg8xExhTUATQTPcbpGVYFOwqv7kvL3qb3KW7-QZ1hy35rJWXa2FcG5hSRIDq0dCnH-oT3SYNao4Hx-hOLI.webp?r=b77",
        IMDb_rating: 6,
    },
    {
        name: "Kabhi Alvida Naa Kehna",
        releaseDate: "29-09-1999",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRz7fKFHlN0B1lnPfIt4CFicV44h2QKgTDSWpdhb1iTLg3MeeSIpRxZp36WMAVRuVP1GFmneq57QGB7d0YJAhPa3AUo.webp?r=63d",
        IMDb_rating: 5.8,
    },
    {
        name: "Don 2",
        releaseDate: "29-09-1990",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ_kerN2RI8Ziq2GG7xz90AFYA3rbOkqa_OaXQoj2dwXhoTY1wB3sAvn6C5VhG_MXtscRRLqXQoH642PDtEm7TUQymo.webp?r=65a",
        IMDb_rating: 8.9,
    },
    {
        name: "Swades",
        releaseDate: "29-09-2006",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV0RODwtCkFb42RecmMqAnR3gfgglfv_hqQkQi7H1qkyx-zY3B2ywZneZLypi_ZPpugGFVQ7XbGlvXBR960BRnf9FX8.webp?r=bea",
        IMDb_rating: 10,
    },
    {
        name: "Unbroken",
        releaseDate: "29-09-2006",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb7Y_sp70qgOZ42H-tjx-ZHdocVm1w8CfOw5EjyVzgznCzcf2hdok9-9WrdwKfkmYvaIW2Y_ZXfL2uyXnecTlf42rUw.webp?r=02b",
        IMDb_rating: 7,
    },
    {
        name: "Jab Harry Met Sejal",
        releaseDate: "29-09-2018",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQD0C56iZWH0FN6ddWFWPM1dywCE5CvITEGIaR0u55AnvTrvAGy7wtXmdM3XdWSHaeUn5Yl97CPUce7uG8A-j52V7Kg.webp?r=875",
        IMDb_rating: 7.9,
    },
    {
        name: "Good Doctor",
        releaseDate: "29-09-2018",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSHjBEJU4EH5EPl-viZ7K8B0VMlaFF65auPTtVYLmSHfJ42_Zeya_CMDelyWYh5iw66Iz5a6NBZqTO78tzb-NPOe2je4j-1JXbCw-aDN23OdXbR35pO0pu4QFRf-.jpg?r=0dc",
        IMDb_rating: 8.9,
    },
    {
        name: "Money heist",
        releaseDate: "29-09-2018",
        poster:
            "https://occ-0-3759-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeZpQhEozqf0aiOAnN4s0JskyYhkE7doI8GMC7OwWmNLkwHxP-dtl3zh-iz3bY9P7GiHPc0-D8VI_rwba9tuOqkxI6XMdjTZUcNOvO1yC0ZQWZQEu2vXr5IpHZDX.jpg?r=8fb",
        IMDb_rating: 9.1,
    },
];
const mainContEl = document.querySelector(".main");




function renderMovies() {
    mainContEl.innerHTML = "";


    const carouselImagesArray = [
        "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/700/-/0/23/23/49e233f0f51d11eb8f9dab1294f1ab24_1628081006721_l_medium.jpg",

        "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/700/-/0/85/62/9ecfc2b0f64e11ebbb82af1587657b0c_1629530064302_l_medium.jpg",

        "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/700/-/0/71/41/d867fd80e60911eb80c60512ab0f5ee2_1626423525626_l_medium.jpg",

        "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/700/-/0/4/73/860bb300fe2911eb88d2c72e8bd702ea_1629529906002_l_medium.jpg",

        "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/700/-/0/6/6/bb925550f19611ebb37c6d335b040efa_1629529984587_l_medium.jpg",

        "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/700/-/0/23/23/49e233f0f51d11eb8f9dab1294f1ab24_1628081006721_l_medium.jpg",
    ];

    const rootDivElement = document.querySelector(".root");

    const carouselParentElement = document.createElement("div");
    carouselParentElement.className = "carousel-parent";

    const carouselContainerElement = document.createElement("div");
    carouselContainerElement.className = "carousel-container";

    for (let i = 0; i < carouselImagesArray.length; i++) {
        const imageElement = document.createElement("img");
        imageElement.className = "carousel-item";
        imageElement.src = carouselImagesArray[i];

        carouselContainerElement.appendChild(imageElement);
    }

    carouselParentElement.appendChild(carouselContainerElement);

    mainContEl.appendChild(carouselParentElement);

    const carouselItemElements = document.querySelectorAll(".carousel-item");

    let currentItem = 0;

    function onInterval() {
        currentItem++;

        carouselContainerElement.style.transitionDuration = "0.5s";

        carouselContainerElement.style.transform = `translateX(-${currentItem * 100
            }%)`;

        if (currentItem === carouselItemElements.length - 1) {
            currentItem = -1;
        }
    }

    let interval = setInterval(onInterval, 4000);

    carouselContainerElement.addEventListener("transitionend", function () {
        if (currentItem === -1) {
            carouselContainerElement.style.transitionDuration = "0s";
            carouselContainerElement.style.transform = `translateX(0)`;
            clearInterval(interval);
            currentItem = 0;
            interval = setInterval(onInterval, 2000);
        }
    });













    const moviesContainerDivElement = document.createElement("div");
    moviesContainerDivElement.className = "movies-container";

    moviesData.forEach(function (movie) {
        const movieDivElement = document.createElement("div");
        movieDivElement.className = "movie";

        const imageElement = document.createElement("img");
        imageElement.src = movie.poster;

        const movieNameElement = document.createElement("p");
        movieNameElement.textContent = movie.name;

        const rating = document.createElement("p");
        rating.textContent = "IMDb rating - " + movie.IMDb_rating;
        rating.className = "rating";

        movieDivElement.appendChild(imageElement);
        movieDivElement.appendChild(movieNameElement);
        movieDivElement.appendChild(rating);

        moviesContainerDivElement.appendChild(movieDivElement);
    });

    mainContEl.appendChild(moviesContainerDivElement);
}

renderMovies();

async function makeReq() {
    const movieTitle = document.querySelector("#movie").value;

    if (movieTitle === "") {
        alert("Please enter a movie name");
        return;
    }

    let response = await fetch(
        `http://www.omdbapi.com/?t=${movieTitle}&apikey=b024b32d`
    );

    let data = await response.json();

    console.log("datausingInput:", data);



    if (data.Response === "True") {
        mainContEl.innerHTML = "";
        const resultDivEl = document.createElement("div");
        resultDivEl.className = "result";

        const posterDiv = document.createElement("div");
        posterDiv.className = "poster";

        const imgEl = document.createElement("img");
        imgEl.src = data.Poster;

        posterDiv.appendChild(imgEl);

        const detailsDivEl = document.createElement("div");
        detailsDivEl.className = "details";

        const headingEl = document.createElement("div");
        headingEl.className = "heading";

        const title = document.createElement("h1");
        title.textContent = data.Title;

        headingEl.appendChild(title);

        if (Number(data.imdbRating) > 8.7) {
            const reccomendedEl = document.createElement("p");
            reccomendedEl.textContent = "Recommended";
            headingEl.appendChild(reccomendedEl);
        }

        const detailDivOne = document.createElement("div");
        detailDivOne.className = "detail";

        const genreEl = document.createElement("p");
        genreEl.textContent = "Genre";

        const genre = document.createElement("p");
        genre.textContent = data.Genre;

        detailDivOne.appendChild(genreEl);
        detailDivOne.appendChild(genre);

        const detailDivTwo = document.createElement("div");
        detailDivTwo.className = "detail";

        const directorEl = document.createElement("p");
        directorEl.textContent = "Director";

        const director = document.createElement("p");
        director.textContent = data.Director;

        detailDivTwo.appendChild(directorEl);
        detailDivTwo.appendChild(director);

        const detailDivThree = document.createElement("div");
        detailDivThree.className = "detail";

        const actorsEl = document.createElement("p");
        actorsEl.textContent = "Actors";

        const actors = document.createElement("p");
        actors.textContent = data.Actors;

        detailDivThree.appendChild(actorsEl);
        detailDivThree.appendChild(actors);

        const detailDivFour = document.createElement("div");
        detailDivFour.className = "detail";

        const imbdEl = document.createElement("p");
        imbdEl.textContent = "IMDb rating";

        const imbd = document.createElement("p");
        imbd.textContent = data.imdbRating;

        detailDivFour.appendChild(imbdEl);
        detailDivFour.appendChild(imbd);

        const detailDivFive = document.createElement("div");
        detailDivFive.className = "detail";

        const languageEl = document.createElement("p");
        languageEl.textContent = "Languages";

        const language = document.createElement("p");
        language.textContent = data.Language;

        detailDivFive.appendChild(languageEl);
        detailDivFive.appendChild(language);

        const detailDivSix = document.createElement("div");
        detailDivSix.className = "detail";

        const storyEl = document.createElement("p");
        storyEl.textContent = "Story";

        const story = document.createElement("p");
        story.textContent = data.Plot;

        detailDivSix.appendChild(storyEl);
        detailDivSix.appendChild(story);

        detailsDivEl.appendChild(headingEl);
        detailsDivEl.appendChild(detailDivOne);
        detailsDivEl.appendChild(detailDivTwo);
        detailsDivEl.appendChild(detailDivThree);
        detailsDivEl.appendChild(detailDivFour);
        detailsDivEl.appendChild(detailDivFive);
        detailsDivEl.appendChild(detailDivSix);

        resultDivEl.appendChild(posterDiv);
        resultDivEl.appendChild(detailsDivEl);

        mainContEl.appendChild(resultDivEl);
    } else {
        mainContEl.innerHTML = "";
        const sorryDiv = document.createElement("div");
        sorryDiv.className = "sorry";

        const msgEl = document.createElement("h1");
        msgEl.textContent = "Sorry! No movie found";

        const imgEl = document.createElement("img");
        imgEl.src = "https://images.pexels.com/photos/4271937/pexels-photo-4271937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

        sorryDiv.appendChild(msgEl);
        sorryDiv.appendChild(imgEl);

        mainContEl.appendChild(sorryDiv);
    }
}