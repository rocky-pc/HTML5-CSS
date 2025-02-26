let moviesList = [];
let bookedTicket = {
  movieName: "",
};

window.addEventListener("load", () => {
  this.localStorage.clear();
  fetchAllMovies()
    .then((body) => {
      return setUIData(body);
    })
    .then((item) => {
      return saveInLocalStorage("movies", item);
    });
});

async function fetchAllMovies() {
  // let url = "http://cinemax.us-east-1.elasticbeanstalk.com/api/allMovies"
  // let response = await fetch(`http://cinemax.us-east-1.elasticbeanstalk.com/api/allMovies`,{
  //   method: "get",
  //   headers: {
  //     "Content-Type": "application/json",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  // });
  let body = [
    {
      movieId: 101,
      movieName: "Inception",
      movieImage:
        "https://media.themoviedb.org/t/p/w440_and_h660_face/gWyowg9gwFBBj9YPbLd67dDK7GF.jpg",
      movieBgImage:
        "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
      movieInfo:
        "A skilled thief is given a chance to have his past crimes forgiven by planting an idea into a CEO's mind.",
      movieLength: "2h 28m",
      movieGenre: "Sci-Fi, Thriller",
      movieReleaseDate: "2010-07-16",
      moviePrice: "12.99",
      castOne: "Leonardo DiCaprio",
      castOneImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ts9l18VkDSooRGDWIeQegNVHciC.jpg",
      castOneCharacterName: "Dom Cobb",
      castTwo: "Joseph Gordon-Levitt",
      castTwoImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/4U9G4YwTlIEbAymBaseltS38eH4.jpg",
      castTwoCharacterName: "Arthur",
      castThree: "Elliot Page",
      castThreeImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/eCeFgzS8dYHnMfWQT0oQitCrsSz.jpg",
      castThreeCharacterName: "Ariadne",
      castFour: "Tom Hardy",
      castFourImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg",
      castFourCharacterName: "Eames",
      castFive: "Ken Watanabe",
      castFiveImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/w2t30L5Cmr34myAaUobLoSgsLfS.jpg",
      castFiveCharacterName: "Saito",
      castSix: "Cillian Murphy",
      castSixImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/llkbyWKwpfowZ6C8peBjIV9jj99.jpg",
      castSixCharacterName: "Robert Fischer",
      crewOne: "Christopher Nolan",
      crewOneImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg",
      crewOneCharacterName: "Director",
      crewTwo: "Emma Thomas",
      crewTwoImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/utc1PS6WVWR5tknzTJqXtnD0kBp.jpg",
      crewTwoCharacterName: "Producer",
      crewThree: "Hans Zimmer",
      crewThreeImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/tpQnDeHY15szIXvpnhlprufz4d.jpg",
      crewThreeCharacterName: "Music Composer",
      crewFour: "Lee Smith",
      crewFourImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/zlnK1i7CqdzIFTFqfMsYLyt2Sk8.jpg",
      crewFourCharacterName: "Film Editor",
      crewFive: "Wally Pfister",
      crewFiveImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/uyWeYsERTTLjpjkE79QeSETLIoA.jpg",
      crewFiveCharacterName: "Cinematographer",
      crewSix: "Jonathan Nolan",
      crewSixImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/qd8d381vz2skpreY1BfVuSfLJts.jpg",
      crewSixCharacterName: "Screenplay",
    },
    {
      movieId: 102,
      movieName: "Interstellar",
      movieImage:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      movieBgImage:
        "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      movieInfo:
        "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
      movieLength: "2h 49m",
      movieGenre: "Sci-Fi, Adventure, Drama",
      movieReleaseDate: "2014-11-07",
      moviePrice: "14.99",
      castOne: "Matthew McConaughey",
      castOneImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/lCySuYjhXix3FzQdS4oceDDrXKI.jpg",
      castOneCharacterName: "Cooper",
      castTwo: "Anne Hathaway",
      castTwoImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/s6tflSD20MGz04ZR2R1lZvhmC4Y.jpg",
      castTwoCharacterName: "Brand",
      castThree: "Jessica Chastain",
      castThreeImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/vOFrDeYXILnj747dOleaNh4jK3l.jpg",
      castThreeCharacterName: "Murph",
      castFour: "Bill Irwin",
      castFourImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/bAV5qsljgiHQkn3QluB5clVYC13.jpg",
      castFourCharacterName: "TARS (voice)",
      castFive: "Ellen Burstyn",
      castFiveImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/wjxo9Yw8ZoKewcRlHShfTIZGVQF.jpg",
      castFiveCharacterName: "Old Murph",
      castSix: "Michael Caine",
      castSixImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg",
      castSixCharacterName: "Professor Brand",
      crewOne: "Christopher Nolan",
      crewOneImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg",
      crewOneCharacterName: "Director",
      crewTwo: "Emma Thomas",
      crewTwoImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/utc1PS6WVWR5tknzTJqXtnD0kBp.jpg",
      crewTwoCharacterName: "Producer",
      crewThree: "Hans Zimmer",
      crewThreeImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/tpQnDeHY15szIXvpnhlprufz4d.jpg",
      crewThreeCharacterName: "Music Composer",
      crewFour: "Hoyte van Hoytema",
      crewFourImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/y2HXvac1oPzciwxfdyWc5syThRk.jpg",
      crewFourCharacterName: "Cinematographer",
      crewFive: "Lee Smith",
      crewFiveImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/zlnK1i7CqdzIFTFqfMsYLyt2Sk8.jpg",
      crewFiveCharacterName: "Film Editor",
      crewSix: "Jonathan Nolan",
      crewSixImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/qd8d381vz2skpreY1BfVuSfLJts.jpg",
      crewSixCharacterName: "Screenplay",
    },
    {
      movieId: 103,
      movieName: "Avengers: Endgame",
      movieImage:
        "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      movieBgImage:
        "https://image.tmdb.org/t/p/w1280/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      movieInfo:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins. The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
      movieLength: "3h 1m",
      movieGenre: "Action, Adventure, Sci-Fi",
      movieReleaseDate: "2019-04-26",
      moviePrice: "16.99",
      castOne: "Robert Downey Jr.",
      castOneImg:
        "https://image.tmdb.org/t/p/w500/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg",
      castOneCharacterName: "Tony Stark / Iron Man",
      castTwo: "Chris Evans",
      castTwoImg:
        "https://image.tmdb.org/t/p/w500/3bOGNsHlrswhyW79uvIHH1V43JI.jpg",
      castTwoCharacterName: "Steve Rogers / Captain America",
      castThree: "Mark Ruffalo",
      castThreeImg:
        "https://image.tmdb.org/t/p/w500/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg",
      castThreeCharacterName: "Bruce Banner / Hulk",
      castFour: "Chris Hemsworth",
      castFourImg:
        "https://image.tmdb.org/t/p/w500/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg",
      castFourCharacterName: "Thor",
      castFive: "Scarlett Johansson",
      castFiveImg:
        "https://image.tmdb.org/t/p/w500/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
      castFiveCharacterName: "Natasha Romanoff / Black Widow",
      castSix: "Jeremy Renner",
      castSixImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yB84D1neTYXfWBaV0QOE9RF2VCu.jpg",
      castSixCharacterName: "Clint Barton / Hawkeye",
      crewOne: "Anthony Russo",
      crewOneImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/xbINBnWn28YygYWUJ1aSAw0xPRv.jpg",
      crewOneCharacterName: "Director",
      crewTwo: "Joe Russo",
      crewTwoImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/o0OXjFzL10jCy89iAs7UzzSbyoK.jpg",
      crewTwoCharacterName: "Director",
      crewThree: "Christopher Markus",
      crewThreeImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/7ooPNp0gnURxYkSSKF2etH7wpZP.jpg",
      crewThreeCharacterName: "Screenwriter",
      crewFour: "Stephen McFeely",
      crewFourImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/i9B6gFzExPsh5IEjD2nn4ym4lx2.jpg",
      crewFourCharacterName: "Screenwriter",
      crewFive: "Kevin Feige",
      crewFiveImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/2XZT80gR72to084pEj4f0SCDmDn.jpg",
      crewFiveCharacterName: "Producer",
      crewSix: "Alan Silvestri",
      crewSixImg:
        "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/feUZ0Oc1MGJJbUronBbkHTmJzgy.jpg",
      crewSixCharacterName: "Music Composer",
    },
  ];

  // if (response.status === 200) {}
  return body;
  // } else {
  //   alert("failed to fetch data");
  // }
}

function setUIData(body) {
  let cardContainer = document.getElementById("cardContainer");
  body.map((movie) => {
    let { movieId, movieName, movieImage, movieGenre } = movie;
    let a = document.createElement("a");
    a.setAttribute("class", "movieCard");
    let singleCard = `
          <figure>
            <img
              src="${movieImage}"
              alt=""
            />
          </figure>
          <footer>
            <span class="heading">${movieName}</span>
            <span>${movieGenre}</span>
          </footer>
        `;
    a.innerHTML = singleCard;
    a.addEventListener("click", function () {
      saveInLocalStorage("id", movieId);
      window.location = "./Description.html";
    });
    cardContainer.append(a);
  });
  moviesList = [...body];
  return body;
}

function saveInLocalStorage(key, body) {
  localStorage.setItem(key, JSON.stringify(body));
  return "data saved in localstorage successfully";
}
