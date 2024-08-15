import { faker } from '@faker-js/faker'
import SongPlayList from '../component/SongPlayList';
// This file has nothing to do with Redux
// It exports functions that create random
// movies and song

export const createRandomMovie = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`;
};

export const createRandomSong=()=>{
    return{
        userId:faker.string.uuid(),
        username:faker.internet.userName(),
        email:faker.internet.email(),
        avatar:faker.image.avatar(),
       
    }
}
export const randomSong =()=>{
   return faker.music.songName()
}