import React, {useEffect, useRef, useState} from "react";
import styles from "@/styles/Clock.module.scss"
import moment from "moment";

const Clock = (props: {time: moment.Moment}) => {
  console.log("props", props)
  const calculateRotationInDegrees = () => {
    const hour = props.time.hour();
    const minute = props.time.minute();

    const totalMinutes = hour * 60 + minute;
    const degreesToRotateClockwise = 0.25 * totalMinutes;

    return degreesToRotateClockwise;
  }

  const rotationInDegrees = calculateRotationInDegrees();
  console.log('rotationInDegrees', rotationInDegrees)

  return <div className={styles.clockContainer}>
    <img className={styles.dial} src={"/images/time_arrow_temp.png"}/>
    <img className={styles.clock} style={{transform: `rotate(${rotationInDegrees}deg)`}} src={"/images/TimeAdvanceWheel.png"}/>
  </div>
}


export default Clock;