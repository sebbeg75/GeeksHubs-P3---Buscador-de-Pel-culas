const urlImagen = 'https://image.tmdb.org/t/p/w200';
const button = document.getElementById("btn");
function buscar(){
    let filmsToSearch= "";
    let search = document.getElementById("query").value;
    console.log(search.length);
    if(search.length === 0)
    document.getElementById('titulo').innerHTML = '';
    axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=en-EN&query=${search}}`
    }).then(res => {
        let movies = res.data.results;
        for (var i = 0;  i< movies.length; i++) {

            console.log(movies,urlImagen,movies[i].poster_path);
            filmsToSearch += `<img src="${urlImagen}${movies[i].poster_path}">
        <p class="title">${movies[i].title}</p>
        <p class="overview">${movies[i].overview}</p>
        <p>${movies[i].popularity}</p>`;
        }
        console.log(Math.round((movies.length)/3),Math.round((movies.length)*2/3))
        if(i < ((Math.round(movies.length))/3)){
            document.getElementById('one').innerHTML = filmsToSearch;
        }
        // if (i>(Math.round((movies.length)*2/3))){
          //   document.getElementById('three').innerHTML = filmsToSearch;
        //}
        else{
            document.getElementById('two').innerHTML = filmsToSearch;
        }

        
   })
}
