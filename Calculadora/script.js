function calculate() {
    const element = document.getElementsByClassName('screen');
    console.log(element); // 👉️ div#box

    // ✅ Works
    element.textContent = 'New content';
}

calculate();