const baseUrl = "https://api.chucknorris.io/jokes";

axios.get(baseUrl + "/random")
    .then((res) =>{
        let card = montaCard(res.data.icon_url, res.data.value);
        document.getElementById("body").innerHTML = card;
    })

axios.get(baseUrl + "/categories")
    .then((res) =>{
        let cards = "";
        cards += res.forEach(category => {
            return montaItemMenu(category);
        })
        document.getElementById("body").innerHTML = card;
    })



function montaCard (url, text){
    const mainCard = 
        `<div class="card m-4" style="width: 18rem;">                
            <div class="card-body">
                <img class="card-img-top" src="${url}" alt="Card image cap">            
                <p class="card-text"> ${text} </p>                    
            </div>
        </div>`;

    return mainCard;
}

function montaItemMenu (categoria){
    const mainDefault = 
    `<li class="nav-item">
        <a href=""> ${categoria} </a>
    </li>`;
    return mainDefault;
}