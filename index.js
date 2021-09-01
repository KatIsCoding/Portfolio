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
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/socials/github.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  template2: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/socials/github.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  template3: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/socials/github.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  template4: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/socials/github.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  template5: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/socials/github.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  template6: {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: 'src/socials/github.svg',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
};

function toggleModal(workId) {
  const modal = document.getElementsByClassName('modal')[0];
  const modalcontainer = document.getElementsByClassName('modal-container')[0];
  function toggleBackground() {
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
  function populateModal() {
    function searchID(id) {
      return document.getElementById(id);
    }
    const elemData = WORKOBJECT[workId];
    const workName = searchID('workName');
    const image = searchID('modal-image');
    const techs = searchID('modal-technologies');
    techs.innerHTML = '';
    const desc = searchID('modal-description');
    //const demoButton = searchID('live-demo');
    //const sourceButton = searchID('source');

    workName.innerHTML = elemData.name;

    image.src = elemData.image;

    elemData.technologies.forEach((elem) => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(elem));
      techs.appendChild(li);
    });

    desc.innerHTML = elemData.description;

    // demoButton.href = elemData.live;
    // sourceButton.href = elemData.source;
  }

  // background.style.background = "#C1C7D0";
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
}

function assignEventHandlers() {
  const workcards = document.getElementsByClassName('workCard');
  Array.prototype.forEach.call(workcards, (elem) => {
    const workId = elem.id;

    elem.getElementsByClassName('workInfo')[0].getElementsByTagName('button')[0].addEventListener('click', () => {
      toggleModal(workId);
    }, false);
  });
}

// To fix "no-unused-vars" error, however, is there a more intelligent way of doing this?
showMenu();
closeMenu();
toggleModal();
assignEventHandlers();