import React, { useEffect, useRef } from 'react'
import cn from 'classnames'

import styles from './UiVideo.module.css'

function UiVideo({src, classes, playbackRate = 1.0}) {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, [])

  return (
    <video
      className={cn(styles.video, classes)}
      loop
      autoPlay
      muted
      ref={videoRef}
    >
      <source src={src} />
    </video>
  )
}

export default UiVideo