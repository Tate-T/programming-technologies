const technologies = [
    {
        title: "Java Script ❤️❤️", 
        description: "JavaScript (JS) — динамічна, об'єктно-орієнтована[5] прототипна мова програмування. Реалізація стандарту ECMAScript. Найчастіше використовується для створення сценаріїв вебсторінок, що надає можливість на боці клієнта (пристрої кінцевого користувача) взаємодіяти з користувачем, керувати браузером, асинхронно обмінюватися даними з сервером, змінювати структуру та зовнішній вигляд вебсторінки.",
        img: "https://wezom.academy/Media/files/filemanager/chto-takoe-javascript-i-zachem-ego-uchit/2.jpg"
    },
    {
        title: "Python",
        description: "Python отримав свою назву не від змії, а від британського комедійного шоу «Monty Python’s Flying Circus». Гвідо ван Россум, творець мови, був великим фанатом цього шоу та хотів, щоб його мова була такою ж простою та веселою.",
        img: "https://web-prod-goiteens.s3.eu-central-1.amazonaws.com/20250106132227/Frame-7-1.png"
    },
    {
        title: "Ruby",
        description: "Ruby - це високорівнева, динамічна, об'єктно-орієнтована мова програмування, яку було розроблено в Японії наприкінці 1980-х років. Вона відома своєю простотою синтаксису, що робить її доступною для новачків у галузі програмування. Основою Ruby є філософія 'програмування має бути задоволенням', що позначилося в її доброзичливій і експресивній природі.",
        img: "https://www.run-it.com.ua/wp-content/uploads/2024/06/ruby-programming-language.png"
    },
    {
        title: "C++",
        description: "C++ є однією з найпопулярніших мов програмування у світі, і його популярність продовжує зростати. Незважаючи на це, багато розробників стикаються з труднощами при роботі з С++. У цій статті ми розглянемо основи мови, найкращі практики та новітні технології, які допоможуть вам стати ефективнішим розробником С++. Ми також обговоримо управління пам'яттю, багатопоточне програмування, розробку програм з використанням бібліотек STL і Boost, налагодження та профіль програм, а також патерни проектування. Нарешті, ми розглянемо новітні технології та тренди у світі С++ розробки.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
    },
    {
        title: "Java",
        description: "Java (вимовляється Джава[4]) — об'єктно-орієнтована мова програмування, випущена 1995 року компанією «Sun Microsystems» як основний компонент платформи Java. З 2009 року мовою займається компанія «Oracle», яка того року придбала «Sun Microsystems». В офіційній реалізації Java-програми компілюються у байт-код, який при виконанні інтерпретується віртуальною машиною для конкретної платформи.",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Java_logo.svg/1200px-Java_logo.svg.png"
    }
];
const listOfHeroes = document.querySelector('.hero__list')


const finalTechnologies = technologies.map(technology => {
const elementOfLi = `<li data-info="${technology.description}" class="hero__item">
<h2 class="hero__subtitle">${technology.title}</h2>
<img class="hero__image" src="${technology.img}" alt="" />
<button type="button" class="pushable">
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front"> Read More </span>
</button>

</li>`
return elementOfLi
})
const technologiesStrings = finalTechnologies.join('')
listOfHeroes.innerHTML = technologiesStrings

const backdrop = document.querySelector(".backdrop");
const closeButton = document.querySelector(".button");
const liItem = document.querySelector(".hero__item");

listOfHeroes.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON" || event.target.nodeName === "SPAN") {
        backdrop.classList.remove("is-hidden")
        // const modalDescribtion = event.target.parentNode.dataset.info;
        const modalDescribtion = event.target.closest(".hero__item").dataset.info;
        const modalText = document.querySelector(".text");
        modalText.textContent = modalDescribtion;
    }
});
closeButton.addEventListener("click", (event) => {
    backdrop.classList.add("is-hidden")
})
