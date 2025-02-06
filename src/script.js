document.addEventListener("DOMContentLoaded", function () {
  visibleContent();
  changeLanguage("en");
});

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// document.addEventListener("keydown", function(event) {
//   if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
//     event.preventDefault();
//   }
// });

// document.getElementById("btnSave").addEventListener("click", async () => {
//   const { jsPDF } = window.jspdf;
//   const doc = new jsPDF();

//   //Add a new basic text to pdf
//   doc.html(document.getElementById("content"));
// });

// Where we use querySelectorALl we are looking for links // Quando nos usamos querySl
const links = document.querySelectorAll(".nav-link");

// Here we are grabbing each link from the list // Aqui nos estamos pegando cada link da lista
links.forEach((link) => {
  // Here we are adding in action to each link // Aqui nos estamos adicionando uma ação para cada link
  link.addEventListener("click", function () {
    // Here we are create the action to remove active class // Aqui nos estamos criando a ação para remover a classe ativa
    links.forEach((link) => link.classList.remove("active"));

    // Here we are adding a class named 'active' to the link // aqui nos estamos adicionando uma classe chamada 'active' para o link
    this.classList.add("active");
  });
});

function visibleContent() {
  const navs = document.querySelectorAll(".nav-link");

  navs.forEach((nav) => {
    // Here we are create a new click Event
    nav.addEventListener("click", () => {
      // Here we are catch of clicked link
      const targetClass = nav.getAttribute("data-target");

      // Select all the contents that can be displayed
      const contents = document.querySelectorAll(".content");

      // Hidden All the contents
      contents.forEach((content) => {
        content.classList.remove("visible");
      });

      // Show the content corresponding to the clicked link
      const targetContent = document.querySelectorAll(targetClass);

      // Here we are create a new forEach to add a visible class in targetContent
      if (targetContent.length > 0) {
        targetContent.forEach((targetContent) => {
          targetContent.classList.add("visible");
        });
      } else {
        console.error(`Conteúdo com o Id ${targetClass} Não encontrado`);
      }
    });
  });

  // ! Create a new code to add a class for select languages

  //  KeyBoard Shortcuts
  /*  */
}

i18next
  .init({
    lng: "en",
    resources: {
      en: {
        translation: {
          programmingNav: "Programming",
          // videoNav: "Video Edit",
          // imageNav: "Image Edit",
          introduction: "Introduction",
          mainText: `
                    <strong>Hello, my name is Luis!</strong> <br>
                              I study programming and am passionate about technology and software development. I have experience in Java, JavaScript, HTML, CSS, and MySQL, and I am always looking to improve my skills and learn new technologies. My focus is on creating efficient and functional solutions, whether in the development of dynamic websites, interactive applications, or desktop systems.
                              
                              <br>
                              <strong>I am always open to new opportunities!</strong>
                              
                    <br><br>
                    <strong>E-mail:</strong> luip97.21@gmail.com`,
          // btnSave: "Save portfolio file",
          backend: "Backend Languages",
          frontend: "Frontend Languages",
          additional: "Additional Content",
          select: "Select Language",
          senac: "Technical Systems Analysis and Development - <strong> Senac, 2023",
          highSchool: "High school at Escola Caetano Gonçalves da Silva - <strong> RS, Esteio 2023",
          IT: "IT course - <strong> Olímpio, 2021",
          experienceTxT: "Experiences",
          pharmacy: "Pharmacy clerk - <strong> RS, Esteio 2024",
          coursesTxT: "Courses",
          coursesNav: "Courses",
          experienceNav: "Experiences",
          credits: "<strong>Resume create by:</strong> Luis Ricardo Silva Coelho"
        },
      },
      pt: {
        translation: {
          mainText: `
          <strong>Olá, Meu nome é Luis!</strong> <br>
                              Estudo programação e sou apaixonado por tecnologia e desenvolvimento de software. Tenho experiência em Java, JavaScript, HTML, CSS e MySQL e estou sempre buscando aprimorar minhas habilidades e aprender novas tecnologias. Meu foco é criar soluções eficientes e funcionais, sejam no desenvolvimento de websites dinâmicos, aplicações interativas ou Sistemas desktop.
                              
                              <br>
                              <strong>Estou sempre disponível para novas oportunidades!</strong>
                              
                              <br><br>
                              <strong>E-mail:</strong> luip97.21@gmail.com`,
          programmingNav: "Programação",
          // videoNav: "Edição de video",
          // imageNav: "Edição de imagem",
          introduction: "Introdução",
          // btnSave:"Salvar Portfólio",
          backend: "Linguagens Backend",
          frontend: "Linguagens Frontend",
          additional: "Conteúdo Adicional",
          select: "Selecionar Idioma",
          senac:"Técnico em Análise e Desenvolvimento de Sistemas - <strong> Senac, 2023",
          highSchool:"Ensino médio na Escola Caetano Gonçalves da Silva - <strong> RS, Esteio 2023",
          IT: "Curso de informática - <strong> Olímpio, 2021",
          experienceTxT: "Experiências",
          pharmacy: "Balconista em Farmácia - <strong> RS, Esteio 2024",
          coursesTxT: "Cursos",
          coursesNav: "Cursos",
          experienceNav: "Experiências",
          credits: "<strong>Currículo feito por:</strong> Luis Ricardo Silva Coelho "
        },
      },
    },
  })
  .then(() => {
    updateContent();
  });

function updateContent() {
  document.getElementById("programmingNav").innerText =
    i18next.t("programmingNav");
  // document.getElementById("videoNav").innerText = i18next.t("videoNav");
  // document.getElementById("imageNav").innerText = i18next.t("imageNav");
  document.getElementById("select").innerText = i18next.t("select");
  document.getElementById("introduction").innerText = i18next.t("introduction");
  document.getElementById("mainText").innerHTML = i18next.t("mainText");
  // document.getElementById("btnSave").innerText = i18next.t("btnSave");
  document.getElementById("backend").innerText = i18next.t("backend");
  document.getElementById("frontend").innerText = i18next.t("frontend");
  document.getElementById("additional").innerText = i18next.t("additional");
  document.getElementById("coursesTxT").innerHTML = i18next.t("coursesTxT");
  document.getElementById("IT").innerHTML = i18next.t("IT");
  document.getElementById("senac").innerHTML = i18next.t("senac");
  document.getElementById("highSchool").innerHTML = i18next.t("highSchool");
  document.getElementById("experienceTxT").innerHTML =
    i18next.t("experienceTxT");
  document.getElementById("pharmacy").innerHTML = i18next.t("pharmacy");
  document.getElementById("coursesNav").innerHTML = i18next.t("coursesNav");
  document.getElementById("experienceNav").innerHTML = i18next.t("experienceNav");
  document.getElementById("credits").innerHTML = i18next.t("credits");
  
  const flag = document.getElementById("flag");
  const currentLanguage = i18next.language;

  const flags = {
    en: "https://png.pngtree.com/png-vector/20230905/ourmid/pngtree-us-flag-sign-png-image_9947494.png",
    pt: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/brazil-flag-icon.png",
  };

  flag.src = flags[currentLanguage];
  flag.alt = currentLanguage;
}

document
  .getElementById("btn-en")
  .addEventListener("click", () => changeLanguage("en"));
document
  .getElementById("btn-pt")
  .addEventListener("click", () => changeLanguage("pt"));

function changeLanguage(language) {
  i18next.changeLanguage(language).then(() => {
    updateContent();
  });
}
