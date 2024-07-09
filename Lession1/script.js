const bannerSlideImages = document.querySelectorAll('#banner_slide_image');
let currentIndex = 0;

function showBannerSlide() {
    bannerSlideImages.forEach((image, index) => {
        if (index >= currentIndex && index < currentIndex + 2) {
            image.style.display = 'inline-block';
        } else {
            image.style.display = 'none';
        }
    });

    currentIndex = (currentIndex + 1) % bannerSlideImages.length;
}

setInterval(showBannerSlide, 3000); // Chạy hàm showBannerSlide mỗi 3 giây

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('flast_sale_container');

    for (let i = 0; i < 6; i++) {
        const saleOption = `
            <div id="flast_sale_option">
                <img src="Flastsale/msi-modern-15-b13m-i5-438vn-070723-063309-600x600.jpg" alt="flast_sale" id="flast_sale_img">
                <div id="product_info">
                    <p id="product_name">MSI Modern 15 B13M i5 1355u (483VN)</p>
                    <p id="price">13.490.000</p>
                    <div id="old_price">
                        <p id="price_no_discount">18.490.000</p>
                        <p id="discount">-27%</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += saleOption;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('flast_sale_container2');

    for (let i = 0; i < 6; i++) {
        const saleOption = `
            <div id="flast_sale_option">
                <img src="Flastsale/msi-modern-15-b13m-i5-438vn-070723-063309-600x600.jpg" alt="flast_sale" id="flast_sale_img">
                <div id="product_info">
                    <p id="product_name">MSI Modern 15 B13M i5 1355u (483VN)</p>
                    <p id="price">13.490.000</p>
                    <div id="old_price">
                        <p id="price_no_discount">18.490.000</p>
                        <p id="discount">-27%</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += saleOption;
    }
});

