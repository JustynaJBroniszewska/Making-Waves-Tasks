// hidden content in prompt text

let accordionBtn = document.getElementById('refactor-prompt-btn');
accordionBtn.addEventListener('click', toggleList);

function toggleList() {
    let list = document.getElementById('refactor-prompt');

    if (list.style.visibility === 'visible') {
        list.style.visibility = 'hidden';
    } else {
        list.style.visibility = 'visible';
    }
}
