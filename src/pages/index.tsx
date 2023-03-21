import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Clock from '@/components/Clock'
import {useEffect, useState} from "react";
import moment from "moment/moment";
import CanonicalMusicPlayer from "@/components/CanonicalMusicPlayer";



export default function Home() {
  const [timeNow, setTimeNow] = useState(moment());
  useEffect(() => {
    const timeNow = moment();
    setTimeNow(timeNow);

    const intervalId = setInterval(() => {
      const timeNow = moment();
      setTimeNow(timeNow);
    }, 1_000);

    return () => {
      clearTimeout(intervalId);
    }
  }, [])


  return (
    <>
      <Head>
        <title>Pentiment Canonical Clock</title>
        <meta name="description" content="Canonical clock from Pentiment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Left Sprites */}
        <div className={styles.sprites}>
          <div className={styles.spriteImageAndreas}>
          </div>
          <div className={styles.spriteImagePiero}>
          </div>
        </div>


        {/* Main content */}
        <div  className={styles.main}>
          {/* Heading*/}
          <div className={styles.heading}>
            <div className={styles.textWrapper}>
              <p>
                Pentiment Clock
              </p>
            </div>
            <CanonicalMusicPlayer time={timeNow}/>
          </div>

          {/* Clock */}
          <Clock time={timeNow}/>

          {/* Canonical clock info */}
          <div className={styles.informationContainer}>
            {/*<img src={"/images/Letter.png"} className={styles.informationImage}>*/}
            {/*</img>*/}
            <div className={styles.informationText}>

              <div className={styles.informationHeading}>
                <img src={"images/Sun.png"}/>
                <h2 className={styles.canonicalHoursTitle}>Canonical Hours</h2>
                <img src={"images/Moon.png"}/>
              </div>

              <p>In the monastic traditions of the western church, the appointed times for prayer throughout the day. </p>
              <p>
                Benedict (c. 480-c. 547) set the basis for this pattern of daily prayer in his Rule for Monasteries.
                </p>
              <div>
                The seven “hours” are: <b>matins</b> and <b>lauds</b> (usually counted as a single hour),
                in the middle of the night; <b>prime</b>, at sunrise; <b>terce</b>, 9 a.m.; <b>sext</b>, noon; <b>nones</b>, 3 p.m.;
                <b> vespers</b>, sunset; and <b>compline</b>, bedtime.
              </div>
            </div>
          </div>

        </div>

        {/* Right Sprites */}
        <div className={styles.sprites}>
          <div className={styles.spriteImageMargarete}>
          </div>
          <div className={styles.catAndUrsula}>
            <div className={styles.spriteImageCat}>
            </div>
            <div className={styles.spriteImageUrsula}>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
