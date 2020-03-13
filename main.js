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
        url: `https://api.themoviedb.org/3/search/movie?api_key=755a8b58d5090530aeb6ee3e1618eb2b&language=es-ES&query=${search}}`
    }).then(res => {
        let movies = res.data.results;
        for (let i = 0;  i< movies.length; i++) {
            console.log(urlImagen,movies[i].poster_path);
            filmsToSearch += `<img src="${urlImagen}${movies[i].poster_path}">
        <p class="title">${movies[i].title}</p>
        <p class="overview">${movies[i].overview}</p>
        <p>${movies[i].popularity}</p>`;
        }
        document.getElementById('titulo').innerHTML = filmsToSearch;
   })
}