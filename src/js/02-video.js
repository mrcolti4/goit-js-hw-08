import Player from '@vimeo/player';
import { refs } from './refs';
import localStorageApi from './localStorageApi';
import { throttle } from 'lodash';

const VIDEO_KEY = 'videoplayer-current-time';

const player = new Player(refs.videoPlayer);
const currentTime = localStorageApi.load(VIDEO_KEY)
  ? localStorageApi.load(VIDEO_KEY)
  : 0;

window.addEventListener('DOMContentLoaded', () => {
  player.setCurrentTime(currentTime);
});

player.on(
  'timeupdate',
  throttle(e => {
    localStorageApi.save(VIDEO_KEY, e.seconds);
  }, 1000)
);
