function showMenu() {
  const menu = document.getElementsByClassName('menu')[0];
  menu.style.height = '100%';
}

function closeMenu() {
  const menu = document.getElementsByClassName('menu')[0];
  menu.style.height = '0';
}

// Modals

const WORKOBJECT = {
  template: {
    name: 'To-do List',
    cardName: 'To-do List',
    description: 'A clone of a minimalistic To-do list with the functionalities of adding, deleting, editing and completing the diferent tasks added, as well as the ability to make those tasks persistent',
    image: 'https://cdn.discordapp.com/attachments/836699681123467274/893382616898736148/Untitled_1.jpg',
    imageMobile: 'https://camo.githubusercontent.com/bc5d8dee0c8c71e87814f963721f9554ee7b50d68d1df3f2d1fff47fe3651e0c/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3833363639393638313132333436373237342f3839303030323830393431383833383034372f756e6b6e6f776e2e706e67',
    technologies: ['HTML', 'CSS', 'Javascript', 'WebPack', 'Jest'],
    live: 'https://katiscoding.github.io/TodoList/dist/',
    source: 'https://github.com/KatIsCoding/TodoList',
  },
  template2: {
    name: 'Keeping track of hundreds of components',
    cardName: 'Dummy Work',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/works/templateDesktop.svg',
    imageMobile: 'src/works/templateDesktop.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  template3: {
    name: 'Keeping track of hundreds of components',
    cardName: 'Dummy Work',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/works/templateDesktop.svg',
    imageMobile: 'src/works/templateDesktop.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  template4: {
    name: 'Keeping track of hundreds of components',
    cardName: 'Dummy Work',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/works/templateDesktop.svg',
    imageMobile: 'src/works/templateDesktop.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  template5: {
    name: 'Keeping track of hundreds of components',
    cardName: 'Dummy Work',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/works/templateDesktop.svg',
    imageMobile: 'src/works/templateDesktop.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  template6: {
    name: 'Keeping track of hundreds of components',
    cardName: 'Dummy Work',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/works/templateDesktop.svg',
    imageMobile: 'src/works/templateDesktop.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },

};

function addCards() {
  const cardHandler = document.querySelectorAll('.cardHandler')[0];
  Object.keys(WORKOBJECT).forEach((key) => {
    const currentObj = WORKOBJECT[key];
    const newCard = document.createElement('div');
    const imageHolder = document.createElement('div');
    const image = document.createElement('img');
    const info = document.createElement('div');
    const infoTitle = document.createElement('h3');
    const tagsHandler = document.createElement('ul');
    function newTag(text) {
      const tag = document.createElement('li');
      tag.innerText = text;
      tagsHandler.appendChild(tag);
    }
    newCard.classList.add('card', 'workCard');
    newCard.id = key;

    imageHolder.classList.add('imagePlaceHolder');
    newCard.appendChild(imageHolder);

    image.src = currentObj.imageMobile;
    image.classList.add('workImage');
    imageHolder.appendChild(image);

    info.classList.add('workInfo');
    newCard.appendChild(info);

    infoTitle.classList.add('cardHeader');
    infoTitle.innerText = currentObj.cardName;
    info.appendChild(infoTitle);

    tagsHandler.classList.add('tagsHandler', 'workTags');
    for (let i = 0; i < currentObj.technologies.length && i < 4; i += 1) {
      const tech = currentObj.technologies[i];
      newTag(tech);
    }
    info.appendChild(tagsHandler);

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('button');
    button.innerText = 'See Project';
    info.appendChild(button);

    cardHandler.appendChild(newCard);
  });
}

function toggleBackground() {
  const modal = document.getElementsByClassName('modal')[0];
  const elements = [document.getElementsByClassName('introduction')[0], document.getElementsByTagName('main')[0], document.getElementsByClassName('aboutmeHeader')[0]];
  Array.prototype.forEach.call(elements, (elem) => {
    if (modal.style.display === 'flex') {
      elem.style.background = '#C1C7D0';
      elem.style.filter = 'blur(2px)';
      document.body.style.background = '#C1C7D0';
    } else {
      elem.style.background = '';
      elem.style.filter = 'blur(0)';
      document.body.style.background = '';
    }
  });
}
function populateModal(workId) {
  function searchID(id) {
    return document.getElementById(id);
  }
  const elemData = WORKOBJECT[workId];
  const workName = searchID('workName');
  const image = searchID('modal-image');
  const techs = searchID('modal-technologies');
  techs.innerHTML = '';
  const desc = searchID('modal-description');
  // const demoButton = searchID('live-demo');
  // const sourceButton = searchID('source');

  workName.innerHTML = elemData.name;

  if (window.innerWidth >= 1000) {
    image.src = elemData.image;
  } else {
    image.src = elemData.imageMobile;
  }

  elemData.technologies.forEach((elem) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(elem));
    techs.appendChild(li);
  });

  desc.innerHTML = elemData.description;

  // demoButton.href = elemData.live;
  // sourceButton.href = elemData.source;
}

function toggleModal(workId) {
  // This is not to avoid getting errors in code revision
  // but to avoid the modal opening when the page is loaded
  try {
    const modal = document.getElementsByClassName('modal')[0];
    const modalcontainer = document.getElementsByClassName('modal-container')[0];

    if (modal.style.display !== 'flex') {
      populateModal(workId);
      modal.style.display = 'flex';
      modalcontainer.style.display = 'flex';
      modal.style.opacity = '1';
      modalcontainer.style.opacity = '1';
    } else {
      modal.style.display = 'none';
      modal.style.opacity = '';
      modalcontainer.style.opacity = '';
      modalcontainer.style.display = 'none';
    }

    toggleBackground();
  } catch {
    return 0;
  }
  return 1;
}

function assignEventHandlers() {
  // Modals
  const workcards = document.getElementsByClassName('workCard');
  Array.prototype.forEach.call(workcards, (elem) => {
    const workId = elem.id;
    elem.getElementsByClassName('workInfo')[0].getElementsByTagName('button')[0].addEventListener('click', () => {
      toggleModal(workId);
    }, false);
  });

  // Contact me form

  const contactMeForm = document.getElementById('contactmeForm');
  contactMeForm.addEventListener('submit', (event) => {
    const email = document.getElementById('userEmail');
    if (email.value !== email.value.toLowerCase()) {
      const errorMessage = document.getElementById('submission-error');
      errorMessage.style.visibility = 'visible';
      event.preventDefault();
    } else {
      contactMeForm.submit();
    }
  });
}

const userInputs = document.getElementsByClassName('userinput');
let contactMeForm = {};

function addContactmeHandlers() {
  Array.prototype.forEach.call(userInputs, (userInput) => {
    userInput.addEventListener('input', () => {
      contactMeForm[userInput.id] = userInput.value;
      localStorage.setItem('contactmeForm', JSON.stringify(contactMeForm));
    });
  });
}

function populateForms() {
  if (localStorage.getItem('contactmeForm') !== null) {
    contactMeForm = JSON.parse(localStorage.getItem('contactmeForm'));
    Array.prototype.forEach.call(userInputs, (element) => {
      if (contactMeForm[element.id] !== undefined) {
        element.value = contactMeForm[element.id];
      }
    });
  }
}

// To fix "no-unused-vars" error, however, is there a more intelligent way of doing this?
// Yes there it is ;)
let loadedOnce = false;
document.onreadystatechange = () => {
  if (!loadedOnce) {
    loadedOnce = true;
    addCards();
    populateForms();
  }
  toggleModal('null');
  assignEventHandlers();
  showMenu();
  closeMenu();
  addContactmeHandlers();
};