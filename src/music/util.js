import {v4 as uuidv4} from 'uuid'

export function getMusic() {
    return [
        {
            name: 'One Last Call',
            artist: 'Nymano, Kanisan, Mau',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg',
            id: uuidv4(),
            active: true,
            color: ['#5c518b', '#9b6b8b'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10140'
        },
        {
            name: 'Loving Someone You Lost',
            artist: 'The Field Tapes, tender spring, Nuum',
            cover:'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg',
            id: uuidv4(),
            active: false,
            color: ['#dbe8df', '#97b06c'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11247'
        }
    ]
}

