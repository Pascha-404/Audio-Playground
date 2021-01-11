const sounds = ['applause', 'wrong', 'victory', 'boo', 'tada', 'gasp'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })
 const soundContainer = document.querySelector('.soundContainer')
 soundContainer.append(btn)
})