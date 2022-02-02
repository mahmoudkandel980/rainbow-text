let blockquote = document.querySelector('blockquote');
let p = document.querySelector('blockquote #input');
let button = document.querySelector('button');
let input = document.querySelector('input');
let footer = document.querySelector('footer');
let fake = document.querySelector('#fake');



button.addEventListener('click', block)
input.addEventListener('click', none)

//prevent white space in the first typeing inside input
input.addEventListener('input', () => {
    input.value = input.value ? input.value.trimStart() : ''
})

function block(e) {
    e.preventDefault();
    blockquote.classList.remove('d-none')
    blockquote.classList.add('d-block')
    fake.textContent = input.value;
    let length = fake.textContent.length

    //header

    for (let i = 0; i < length; i++) {
        let span = document.createElement('span');
        span.textContent = fake.textContent[i]
        span.style.color = `hsl(${360 * (i / length)}, 100%, 50%)`;
        p.appendChild(span)
    }

    if (p.textContent.length == 0) {
        footer.classList.remove('d-none')
        footer.classList.add('d-block')
    }
    input.value = '';
}

function none(e) {
    blockquote.classList.remove('d-block')
    blockquote.classList.add('d-none')
    footer.classList.add('d-none')
    p.textContent = ''
}

