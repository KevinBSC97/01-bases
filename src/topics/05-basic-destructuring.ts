interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New Song';

const { song:anotherSong, details} = audioPlayer;

const {author} = details;

// console.log('Song: ', anotherSong);

// console.log('author: ', author);

const [, , trunks = 'not found']: string[] = ['goku', 'vegeta'];

//const trunks = dbz[3] || 'no hay personaje';

console.log('Personaje 3: ', trunks);






export {};