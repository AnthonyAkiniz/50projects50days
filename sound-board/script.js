const sounds = ['NES Adventures of Link', 'SNES A Link To The Past', 'NES Battle Area', 
'NES Fairy Fountain', 'NES Inside House', 'NES Overworld Theme', 'SNES Overworld Theme',
'NES Palace Theme', 'SNES Dark World Theme', 'NES64 Saria Song']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}


const sounds2 = ['Sword Attack', 'Charged Sword Attack', 'Pickup 1', 'Pickup 2', 'Throw', 'Collect Rupee', 'Collect Heart', 'Level Up', 'Open Chest', 'Secret']

sounds2.forEach(sound => {
    const btn = document.createElement('button2')
    btn.classList.add('btn2')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        // stopSongs()  //disabling lets buttons2 group play over main button group

        document.getElementById(sound).play()
    })

    document.getElementById('buttons2').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}


const sounds3 = ['Chicken', 'Take Stairs', 'Switch Worlds', 'Hey Listen']

sounds3.forEach(sound => {
    const btn = document.createElement('button3')
    btn.classList.add('btn3')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        // stopSongs()  //disabling lets buttons2 group play over main button group

        document.getElementById(sound).play()
    })

    document.getElementById('buttons3').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}

const stopbutton = ['Stop']

stopbutton.forEach(sound => {
    const btn = document.createElement('stopbutton')
    btn.classList.add('btn4')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()  

        document.getElementById(sound).play()
    })

    document.getElementById('stopbutton').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}