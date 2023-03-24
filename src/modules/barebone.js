function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const appName = document.createElement("h1");
    appName.classList.add("app-name");
    appName.classList.add("fas");
    appName.classList.add("fa-cloud-sun");
    appName.textContent = "WEATHER APP";
  
    header.appendChild(appName);
  
    return header;
}
  
function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © 2023 akhfirdaus07`;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/akhfirdaus07";

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}


export {createHeader, createMain, createFooter};