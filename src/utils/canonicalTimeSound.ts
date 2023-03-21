import moment from "moment";

export const MORNING_SOUND = "/audio/Amb_Abbey_Fall_Morning_Lp.wav"
export const DAY_SOUND = "/audio/Amb_Abbey_Fall_Day_Lp.wav"
export const NIGHT_SOUND = "/audio/Amb_Abbey_Fall_Night_Lp.wav"

export const getSoundForCanonicalTime = (currentTime: moment.Moment) => {
  const currentHour = currentTime.hour();
  if (currentHour >= 6 && currentHour < 12) {
    return MORNING_SOUND;
  }
  if (currentHour >= 12 && currentHour < 19) {
    return DAY_SOUND;
  }
  return NIGHT_SOUND;
}

