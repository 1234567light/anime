<script>
    // JavaScript for Image Gallery in Featured Section
    const mainImage = document.querySelector('.featured-images img:nth-child(2)');
    const sideImages = document.querySelectorAll('.featured-images img');

    sideImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            // Swap the clicked side image with the main image
            if (index !== 1) {
                [mainImage.src, img.src] = [img.src, mainImage.src];
            }
        });
    });
</script>