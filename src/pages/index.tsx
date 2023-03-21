import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Clock from '@/components/Clock'
import useSound from 'use-sound';
import {useEffect, useState} from "react";
import {getSoundForCanonicalTime, MORNING_SOUND, NIGHT_SOUND} from "@/utils/canonicalTimeSound";
import MusicPlayer from "@/components/MusicPlayer";



export default function Home() {
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

          <div className={styles.catAndUrsula}>
            <div className={styles.spriteImageCat}>
            </div>
            <div className={styles.spriteImageUrsula}>
            </div>
          </div>

        </div>


        {/* Main content */}
        <div  className={styles.main}>
          <div className={styles.heading}>
            <div className={styles.textWrapper}>
              <p>
                Pentiment Clock
              </p>
            </div>
            <MusicPlayer audioSource={MORNING_SOUND}/>
          </div>
          <Clock/>
        </div>

        {/* Right Sprites */}

        <div className={styles.sprites}>
          <div className={styles.spriteImagePiero}>
          </div>
          <div className={styles.spriteImageMargarete}>
          </div>
        </div>

      </main>
    </>
  )
}
