const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.getElementsByClassName('dropdown__item');

function dropDown() {
    dropdownList.classList.add('dropdown__list_active');
    return false;
}
dropdownValue.addEventListener('click', dropDown);

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem.item(i).onclick = function() {
        dropdownValue.textContent = dropdownItem.item(i).textContent;
        dropdownList.classList.remove('dropdown__list_active');
        return false;
    }
}
