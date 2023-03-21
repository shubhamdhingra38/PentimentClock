import React, {useEffect, useRef, useState} from "react";
import styles from "@/styles/Clock.module.scss"
import moment from "moment";

const Clock = () => {
  const [timeNow, setTimeNow] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeNow = moment();
      console.log(timeNow.format('HH:mm:ss'));
      console.log(timeNow.hour())
      setTimeNow(timeNow);
    }, 60_000);

    return () => {
      clearTimeout(intervalId);
    }
  }, [])

  const calculateRotationInDegrees = () => {
    const hour = timeNow.hour();
    const minute = timeNow.minute();

    const totalMinutes = hour * 60 + minute;
    const degreesToRotateClockwise = 0.25 * totalMinutes;

    return degreesToRotateClockwise;
  }

  const rotationInDegrees = calculateRotationInDegrees();
  console.log(rotationInDegrees)

  return <div className={styles.clockContainer}>
    <img className={styles.dial} src={"/images/time_arrow_temp.png"}/>
    <img className={styles.clock} style={{transform: `rotate(${rotationInDegrees}deg)`}} src={"/images/TimeAdvanceWheel.png"}/>
  </div>
}


export default Clock;