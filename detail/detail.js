const detailContainer = document.querySelector('.detail-container');

const getDetailProduct = async() => {
    const path = new URLSearchParams(window.location.search);
    const productId = path.get('id');
    const response = await fetch('../data.json');
    const data = await response.json();
    const findProductId = data.find(item => item.id.toString() === productId.toString());
    detailContainer.innerHTML = `
        <div class="detail">
            <div class="detail-image">
                <img src="${findProductId.img}" alt="${findProductId.title}">
            </div>
            <div class="detail-info">
                <h2>${findProductId.title}</h2>
                <p>${findProductId.singer}</p>
                <p>${findProductId.musician}</p>
                <a href="${findProductId.video}">PLAY</a>
            </div>
        </div>
    `
}

getDetailProduct()
