document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Replace this array with your image URLs
    const imageUrls = [
        '1-min.jpg',
        '2-min.jpg',
        '3-min.jpg',
        '4-min.jpg',
        '5-min.jpg',
        '6-min.jpg',
        '7-min.jpg',
        '8-min.jpg',
        '9-min.jpg',
        '10-min.jpg',
        '11-min.jpg',
        '12-min.jpg',
        '13-min.jpg',
        '14-min.jpg',
        '15-min.jpg',
        '16-min.jpg',
        '17-min.jpg',
        '18-min.jpg',
        '19-min.jpg',
        '20-min.jpg',
        '21-min.jpg',
        '22-min.jpg',
        '23-min.jpg',
        '24-min.jpg',
        '25-min.jpg',
        '1 (2)-min.jpg',
        '2 (2)-min.jpg',
        '3 (2)-min.jpg',
        '4 (2)-min.jpg',
        '5 (2)-min.jpg',
        '6 (2)-min.jpg',
        '7 (2)-min.jpg',
        '8 (2)-min.jpg',
        '9 (2)-min.jpg',
        '10 (2)-min.jpg',
        '11 (2)-min.jpg',
        '12 (2)-min.jpg',
        '13 (2)-min.jpg',
        '14 (2)-min.jpg',
        '15 (2)-min.jpg',
        '16 (2)-min.jpg',
        '17 (2)-min.jpg',
        '18 (2)-min.jpg',
        '19 (2)-min.jpg',
        '20 (2)-min.jpg',
        '21 (2)-min.jpg',
        '22 (2)-min.jpg',
        '23 (2)-min.jpg',
        '24 (2)-min.jpg',
        '25 (2)-min.jpg',
        'Post_01-min.jpg',
        'Post_02-min.jpg',
        'Post_03-min.jpg',
        'Post_04-min.jpg',
        'Post_05-min.jpg',
        'Post_06-min.jpg',
        'Post_07-min.jpg',
        'Post_08-min.jpg',
        'Post_09-min.jpg',
        'Post_10-min.jpg',
        'Post_11-min.jpg',
        'Post_12-min.jpg',
        'Post_13-min.jpg',
        'Post_14-min.jpg',
        'Post_15-min.jpg',
        'Post_16-min.jpg',
        'Post_17-min.jpg',
        'Post_18-min.jpg',
        'Post_19-min.jpg',
        'Post_20-min.jpg',
        'Post_21-min.jpg',
        'Post_22-min.jpg',
        'Post_23-min.jpg',
        'Post_24-min.jpg',
        'Post_25-min.jpg',
        'Stories_01-min.jpg',
        'Stories_02-min.jpg',
        'Stories_03-min.jpg',
        'Stories_04-min.jpg',
        'Stories_05-min.jpg',
        'Stories_06-min.jpg',
        'Stories_07-min.jpg',
        'Stories_08-min.jpg',
        'Stories_09-min.jpg',
        'Stories_10-min.jpg',
        'Stories_11-min.jpg',
        'Stories_12-min.jpg',
        'Stories_13-min.jpg',
        'Stories_14-min.jpg',
        'Stories_15-min.jpg',
        'Stories_16-min.jpg',
        'Stories_17-min.jpg',
        'Stories_18-min.jpg',
        'Stories_19-min.jpg',
        'Stories_20-min.jpg',
        'Stories_21-min.jpg',
        'Stories_22-min.jpg',
        'Stories_23-min.jpg',
        'Stories_24-min.jpg',
        'Stories_25-min.jpg',
        // Add more image URLs...
    ];

    // Create image elements in the gallery
    imageUrls.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = '../pics2/' +imageUrl;
        img.alt = `Image ${index + 1}`;
        img.addEventListener('click', () => openModal(imageUrl));
        gallery.appendChild(img);
    });

    // Open modal with clicked image
    function openModal(imageUrl) {
        modal.style.display = 'block';
        modalImage.src = imageUrl;
    }

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    // Close modal when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
