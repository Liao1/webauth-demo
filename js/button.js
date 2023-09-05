function shatterAnimation() {
    const polygons = document.querySelectorAll('#metamaskButton polygon');
    polygons.forEach((polygon, index) => {
        setTimeout(() => {
            polygon.style.transform = `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)`;
            polygon.style.opacity = 0;
        }, index * 100);
    });

    setTimeout(() => {
        polygons.forEach(polygon => {
            polygon.style.transform = 'none';
            polygon.style.opacity = 1;
        });
    }, 2000);
}
