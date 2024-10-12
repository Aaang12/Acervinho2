const featuredCourses = [
    { title: "Descomplica", image: "https://www.google.com/imgres?q=descomplica&imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2FUXXm0h5NzCCMscjscI4noqIUOok5pTQnCD-Uag9M83bAz1GYmMFVQUo-Rol-KUvnodk&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dbr.com.descomplica.vod%26hl%3Den_US&docid=6ue7NBljzTyEjM&tbnid=4hmY3tw2XA_7_M&vet=12ahUKEwiB4vOliomJAxXrkZUCHeNuI18QM3oECB0QAA..i&w=512&h=512&hcb=2&ved=2ahUKEwiB4vOliomJAxXrkZUCHeNuI18QM3oECB0QAA" },
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
