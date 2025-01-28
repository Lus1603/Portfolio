document.addEventListener("DOMContentLoaded", function () {
  visibleContent();
  changeLanguage("en");
});

document.getElementById("btnSave").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  //Add a new basic text to pdf
  doc.html(document.getElementById("content"));
});

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
          videoNav: "Video Edit",
          imageNav: "Image Edit",
          introduction: "Introduction",
          mainText: `
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fugit iste provident modi enim ea similique, nisi eaque repellendus ad quas maxime deserunt explicabo, itaque dolor corporis eveniet dicta odit.
        `,
          btnSave: "Save portfolio file",
          backend: "Backend Languages",
          frontend: "Frontend Languages",
          additional: "Additional Content",
          select: "Select Language",
        },
      },
      pt: {
        translation: {
          programmingNav: "Programação",
          videoNav: "Edição de video",
          imageNav: "Edição de imagem",
          introduction: "Introdução",
          mainText: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat fugit iste provident modi enim ea similique, nisi eaque repellendus ad quas maxime deserunt explicabo, itaque dolor corporis eveniet dicta odit.
        `,
          btnSave: "Salvar Portfólio",
          backend: "Linguagens Backend",
          frontend: "Linguagens Frontend",
          additional: "Conteúdo Adicional",
          select: "Selecionar Idioma",
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
  document.getElementById("videoNav").innerText = i18next.t("videoNav");
  document.getElementById("imageNav").innerText = i18next.t("imageNav");
  document.getElementById("select").innerText = i18next.t("select");
  document.getElementById("introduction").innerText = i18next.t("introduction");
  document.getElementById("mainText").innerText = i18next.t("mainText");
  document.getElementById("btnSave").innerText = i18next.t("btnSave");
  document.getElementById("backend").innerText = i18next.t("backend");
  document.getElementById("frontend").innerText = i18next.t("frontend");
  document.getElementById("additional").innerText = i18next.t("additional");

  const flag = document.getElementById("flag");
  const currentLanguage = i18next.language;

  const flags = {
    en: "../IMG/en.png",
    pt: "../IMG/pt.png",
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
