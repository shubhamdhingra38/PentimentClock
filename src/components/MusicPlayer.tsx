import {useRef} from "react";


const MusicPlayer = (props: {audioSource: string}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = () => {
    audioRef.current?.play()
  }

  const pauseMusic = () => {
    audioRef.current?.pause()
  }

  return (
    <>
      <audio ref={audioRef} src={props.audioSource} autoPlay loop />
      <button onClick={() => playMusic()}>Play</button>
      <button onClick={() => pauseMusic()}>Pause</button>
    </>
  );
}

export default MusicPlayer