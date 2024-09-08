const imageSelector = document.getElementById('image-selector');
const mainImage = document.getElementById('main-image');
const slidePanel = document.getElementById('slide-panel');
const closeBtn = document.getElementById('close-btn');
const itemTitle = document.getElementById('item-title');
const itemInfo = document.getElementById('item-info');

const hoverBoxes = [
    document.getElementById('box1'),
    document.getElementById('box2'),
    document.getElementById('box3'),
    document.getElementById('box4'),
    document.getElementById('box5'),
    document.getElementById('box6'),
];

const coordinates = {
    'RE4-Briefcase.png': [
        { top: '12px', left: '30px', width: '130px', height: '55px', tooltip: 'Magnum', title: 'Magnum', description: 'A powerful handgun with high damage.', image: '/Magnum.png' },
        { top: '12px', left: '165px', width: '165px', height: '50px', tooltip: 'Shotgun' },
        { top: '12px', left: '330px', width: '60px', height: '50px', tooltip: 'Shotgun Shells' },
        { top: '12px', left: '398px', width: '60px', height: '235px', tooltip: 'Rocket Launcher' },
        { top: '12px', left: '455px', width: '70px', height: '235px', tooltip: 'Healing Canister' },
        { top: '70px', left: '20px', width: '235px', height: '80px', tooltip: 'Machine Gun' },
        // { top: '70px', left: '120px', width: '100px', height: '50px', tooltip: '' }
    ],
    'PS5-Case.png': [
        { top: '10px', left: '20px', width: '190px', height: '60px', tooltip: 'PS VR Controller' },
        { top: '25px', left: '200px', width: '140px', height: '135px', tooltip: 'PS VR 2nd Gen' },
        { top: '100px', left: '45px', width: '110px', height: '135px', tooltip: 'GTA5' },
        { top: '195px', left: '180px', width: '105px', height: '55px', tooltip: 'HDMI' },
        { top: '145px', left: '320px', width: '30px', height: '100px', tooltip: 'Power Cable' },
        // { top: '135px', left: '170px', width: '160px', height: '55px', tooltip: '' }
    ],
    'Travel-Essential.png': [
        { top: '10px', left: '10px', width: '110px', height: '100px', tooltip:'Shower Cap' },
        { top: '10px', left: '120px', width: '70px', height: '100px', tooltip:'Candles' },
        { top: '10px', left: '190px', width: '70px', height: '100px', tooltip:'Mask' },
        { top: '10px', left: '260px', width: '110px', height: '100px', tooltip:'Lotion' },
        // { top: '75px', left: '130px', width: '110px', height: '55px' }
    ]
};

imageSelector.addEventListener('change', () => {
    const selectedImage = imageSelector.value;
    mainImage.src = selectedImage;
    updateHoverBoxes(selectedImage);
});

function updateHoverBoxes(image) {
    const coords = coordinates[image];
    hoverBoxes.forEach((box, index) => {
        if (coords[index]) {
            const { top, left, width, height, tooltip, description } = coords[index];
            box.style.top = top;
            box.style.left = left;
            box.style.width = width;
            box.style.height = height;
            box.style.display = 'block';
            box.setAttribute('data-tooltip', tooltip);
            box.setAttribute('data-description', description);
        } else {
            box.style.display = 'none';
        }
    });
}

document.querySelectorAll('.hover-box').forEach((box, index) => {
    box.addEventListener('click', () => {
        const title = box.getAttribute('data-title');
        const description = box.getAttribute('data-description');
        const imageUrl = box.getAttribute('data-image');
        
        itemTitle.textContent = title;
        itemInfo.textContent = description;
        
        const itemImage = document.getElementById('item-image');
        if (imageUrl) {
            itemImage.src = imageUrl;
            itemImage.style.display = 'block';
        } else {
            itemImage.style.display = 'none';
        }

        slidePanel.classList.add('open');
    });
});

function updateHoverBoxes(image) {
    const coords = coordinates[image];
    hoverBoxes.forEach((box, index) => {
        if (coords[index]) {
            const { top, left, width, height, tooltip, title, description, image } = coords[index];
            box.style.top = top;
            box.style.left = left;
            box.style.width = width;
            box.style.height = height;
            box.style.display = 'block';
            box.setAttribute('data-tooltip', tooltip);
            box.setAttribute('data-title', title);
            box.setAttribute('data-description', description);
            box.setAttribute('data-image', image);
        } else {
            box.style.display = 'none';
        }
    });
}

closeBtn.addEventListener('click', () => {
    slidePanel.classList.remove('open');
});

// Initialize hover boxes for the default image
updateHoverBoxes('RE4-Briefcase.png');
