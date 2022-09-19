import React from 'react';
import UiVideo from '../UI/UiVideo/UiVideo';
import video from './video/han-solo.mp4'

import styles from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won.<br/>
        We cannot display data.<br/>
        Come back when we fix everything
      </p>

      <UiVideo src={video} classes={styles.video} playbackRate={1.0} />
    </>
  )
}

export default ErrorMessage