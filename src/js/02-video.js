import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', throttle( e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000)
);

iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(function(error){
    console.log(error)
});

