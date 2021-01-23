function getImages(){
    let search = document.getElementById("inpSearch").value;    
    let results = document.getElementById("results");
    requestPhotos(search)
        .then((res) => {
            res.forEach((el) => {
                var url = `https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`;

                var thumbnail = `https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}_q.jpg`;

                var item = createFlickrThumb({
                    "thumb": thumbnail,
                    "large": url,
                    "title": el.title
                });
                results.appendChild(item);
            })
        })
}

function requestPhotos(search){
    let key = "4d9383d4117d2b5726ccb5fe4677631a";
    let flickrEndPoint = "https://api.flickr.com/services/rest/?method=flickr.photos.search&nojsoncallback=1&format=json&api_key=";

    let urlFinal = flickrEndPoint + key + "&text=" + search;
    return (
        fetch(urlFinal)
            .then((res) => res.json())
            .then((data) => data.photos.photo)
    )

}

function createFlickrThumb (photoData){
    var link = document.createElement('a');
    link.setAttribute("href", photoData.large);
    link.setAttribute("target", "_blank");

    var image = document.createElement("img");
    image.setAttribute("src", photoData.thumb);
    image.setAttribute("alt", photoData.title);

    link.appendChild(image);

    return link;
}

