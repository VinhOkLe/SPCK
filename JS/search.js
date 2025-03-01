const musics = document.getElementById('musics'); 
console.log(musics);

const fetchData = async function () {
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
    return data;
};

function searchMusics(data) {
    return function (event) {
        event.preventDefault(); 

        const input = document.getElementById('search-input').value.trim();
        const results = data.filter(item => item.title.includes(input));

        console.log(results);

        if (results.length > 0) {
            musics.innerHTML = results.map(item => {
                return `
                    <div class="song">
                        <div class="song__info">
                            <a target="_blank" href="">
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
        } else {
            musics.innerHTML = `<p>No results found for "${input}"</p>`;
            console.log("No songs found with the keyword:", input);
        }
    };
}

const searchForm = document.getElementById('search-form');

// Đợi dữ liệu JSON được tải trước khi gắn sự kiện
fetchData().then(data => {
    searchForm.addEventListener('submit', searchMusics(data)); // Không gọi ngay, chỉ truyền hàm tham chiếu
});