const form = document.querySelector("#search");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const serachvalue = form.elements.query.value;
  const config = { params: { q: serachvalue } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  console.log(res.data);
  console.log();
  try {
    for (let j = 0; j <= 10; j++) {
      if (res.data[j].show.name) {
        if (res.data[j].show.image) {
          if (res.data[j].show.summary) {
            if (res.data[j].show.genres) {
              if (res.data[j].show.language) {
                if (res.data[j].show.network) {
                  const name = document.createElement("p");
                  name.innerHTML = `<b style ='font-weight:bold'>Show Name</b> :- ${res.data[j].show.name}`;
                  document.body.append(name);
                  name.classList.add("title");
                  const img = document.createElement("img");
                  img.src = res.data[j].show.image.medium;
                  document.body.append(img);
                  const genres = document.createElement("p");
                  genres.innerHTML = `<b style ='font-weight:bold'>Genres</b> :- ${res.data[j].show.genres}`;
                  document.body.append(genres);
                  const rating = document.createElement("p");
                  rating.innerHTML = `<b style ='font-weight:bold'>Language</b> :- ${res.data[j].show.language}`;
                  document.body.append(rating);
                  const site = document.createElement("a");
                  const sitee =
                    (site.href = `Officail Site :- ${res.data[j].show.officialSite}`);
                  document.body.append(sitee);
                  const summary = document.createElement("p");
                  summary.innerHTML = `<b style ='font-weight:bold'>About</b> :- ${res.data[j].show.summary}`;
                  document.body.append(summary);
                  summary.classList.add("bottom");
                }
              }
            }
          }
        }
      }
    }
  } catch (e) {
    console.log("Don't Worry");
  }
  form.elements.query.value = "";
});
// const makeImages=(shows) =>{
//     for(let result of shows){
//     if(result.show.image){
//         const img=document.createElement('img');
//         img.src=result.show .image.medium
//         document.body.append(img)
//     }
// }
// }
// const maekeName= (shows) =>{
//     for (let result of shows){
//      if(result.show.name){
//         const name=document.createElement('p')
//         name=result.show.name
//         document.body.append(name)
//      }
//     }
// }
// for(let k=0;k<=10;k++){
//     if(res.data[k].show.summary){
//         const summary=document.createElement('p')
//         summary=res.data[k].show.summary
//         document.body.append(summary)
//     }
// }
// makeImages(res.data)
// try{   for (let i=0;i<=10;i++) {
//     if(res.data[i].show.image){

// }
// // const namee=res.data[i].show.name
// //
// //     document.name.append(namee)
// //
// }}
// catch(e){
// }
// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = { params: { q: searchTerm } }
//     const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//     makeImages(res.data)
//     form.elements.query.value = '';
// })

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }