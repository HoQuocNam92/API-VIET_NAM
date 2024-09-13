let input_search = document.getElementById('input_search');
let clicks = document.getElementById('clicks');
let rusults = document.getElementById('rusult');
clicks.addEventListener('click', () => {
    let input_value = input_search.value;
    fetch('https://provinces.open-api.vn/api/p/')
        .then(res => res.json())
        .then(data => {
            let result = data.find(city => city.name.toLowerCase());

            rusults.innerHTML = result.name

        })
})