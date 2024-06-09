function increment(id) {
    let input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
    actualiserConfirmation(id);
}

function decrement(id) {
    let input = document.getElementById(id);
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
        actualiserConfirmation(id);
    }
}

function actualiserConfirmation(id) {
    document.getElementById(`confirm${maj(id)}`).innerText = document.getElementById(id).value;
    if (id === 'enfant') {
        actualiserAgeEnfants();
    }
}

function actualiserAgeEnfants() {
    let enfantCount = document.getElementById('enfant').value;
    let childrenAgeGroup = document.getElementById('enfants');
    childrenAgeGroup.innerHTML = '';
    for (let i = 0; i < enfantCount; i++) {
        let div = document.createElement('div');
        div.className = 'form-group';
        div.innerHTML = `<label>Age enfant ${i + 1} :</label><input type="number" class="form-control" name="ageEnfant${i + 1}" placeholder="Age enfant ${i + 1}">`;
        childrenAgeGroup.appendChild(div);
    }
}

function maj(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById('work').addEventListener('change', function() {
    document.getElementById('confirmWork').innerText = this.checked ? 'Oui' : 'Non';
});