import React, {useEffect, useRef, useState} from "react";
import styles from "@/styles/Clock.module.scss"
import moment from "moment";

const Clock = (props: {time: moment.Moment}) => {
  const calculateRotationInDegrees = () => {
    const hour = props.time.hour();
    const minute = props.time.minute();

    const totalMinutes = hour * 60 + minute;
    const degreesToRotateClockwise = 0.25 * totalMinutes;

    return degreesToRotateClockwise;
  }

  const rotationInDegrees = calculateRotationInDegrees();

  return <div className={styles.clockContainer}>
    <h2>{props.time.format("HH:mm:ss")}</h2>
    <h2>{rotationInDegrees}</h2>
    <img className={styles.dial} src={"/images/time_arrow_temp.png"}/>
    <img className={styles.clock} style={{transform: `rotate(${rotationInDegrees}deg)`}} src={"/images/TimeAdvanceWheel.png"}/>
  </div>
}


export default Clock;