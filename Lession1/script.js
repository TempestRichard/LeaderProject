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
