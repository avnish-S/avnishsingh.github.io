document.addEventListener('DOMContentLoaded', function() {
    const certificates = document.querySelectorAll('.certificate-item');
    const showMoreButton = document.getElementById('show-more-certificates');

    let certificatesToShow = 5;
    certificates.forEach((certificate, index) => {
        if (index >= certificatesToShow) {
            certificate.style.display = 'none';
        }
    });

    showMoreButton.addEventListener('click', () => {
        certificatesToShow += 5;
        certificates.forEach((certificate, index) => {
            if (index < certificatesToShow) {
                certificate.style.display = 'flex';
            }
        });

        if (certificatesToShow >= certificates.length) {
            showMoreButton.style.display = 'none';
        }
    });
});
