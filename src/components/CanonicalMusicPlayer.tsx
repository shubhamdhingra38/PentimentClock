import MusicPlayer from "@/components/MusicPlayer";
import {getSoundForCanonicalTime, MORNING_SOUND} from "@/utils/canonicalTimeSound";
import moment from "moment";


const CanonicalMusicPlayer = (props: {time: moment.Moment}) => {
  return <MusicPlayer audioSource={getSoundForCanonicalTime(props.time)}/>
}

export default CanonicalMusicPlayer;