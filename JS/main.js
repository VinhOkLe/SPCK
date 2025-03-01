const musics = document.getElementById('musics');
console.log(musics);

const getDatas = async () =>{
    const response = await fetch('../data.json');
    const data = await response.json();
    console.log(data);

    if (data) {
        musics.innerHTML = data.map(item => {
            return `
                <div class="song">
                    <div class="song__info">
                        <a href="./detail/detail.html?id=${item.id}">
                            <img src="${item.img}" alt="">
                            <p>${item.title}</p>
                        </a>
                    </div>
                    <div class="song__imformation">
                        <p>${item.singer}</p>
                        <p>${item.musician}</p>
                    </div>
                </div>
            `;
        }).join('');
    }
}
getDatas()