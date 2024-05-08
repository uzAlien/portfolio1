// Azizbek Boqijonov "kalkulyator (-1 va *2)"
const btn = document.querySelector('#btn');

function kal(x, y) {
    let hisob = 0;
    x = parseInt(x); 
    y = parseInt(y); 

    while (y > x) {
        if (y % 2 === 1) {
            y++;
        } else {
            y /= 2;
        }
        hisob++;
    }

    return hisob + (x - y); 
}

btn.addEventListener('click', () => {
    const bir = document.querySelector('#bir').value.trim();
    const ikki = document.querySelector('#ikki').value.trim();
    const result = kal(bir, ikki);
    document.querySelector('h1').textContent = result;
});
