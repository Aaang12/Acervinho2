const featuredCourses = [
    { title: "Curso de JavaScript", image: "link-imagem-js" },
    { title: "Curso de Python", image: "link-imagem-python" },
    { title: "Curso de HTML & CSS", image: "link-imagem-htmlcss" },
];

const courseGrid = document.querySelector('.course-grid');

featuredCourses.forEach(course => {
    const courseDiv = document.createElement('div');
    courseDiv.innerHTML = 
        <img src="${course.image}" alt="${course.title}" />
        <h3>${course.title}</h3>
    ;
    courseGrid.appendChild(courseDiv);
});