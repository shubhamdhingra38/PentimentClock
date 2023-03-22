import {useRef, useState} from "react";
import styles from "@/styles/MusicPlayer.module.scss"

const MusicPlayer = (props: {audioSource: string}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    audioRef.current?.play()
  }

  const handleClick = () => {
    if (play) {
      pauseMusic();
    } else {
      playMusic();
    }
    setPlay(!play)
  }

  const pauseMusic = () => {
    audioRef.current?.pause()
  }

  return (
    <>
      <audio ref={audioRef} src={props.audioSource} loop />
      <img className={styles.playButton} onClick={handleClick}  src={!play ? "/images/volume-crossed.png": "/images/volume.png"}/>
    </>
  );
}

export default MusicPlayer