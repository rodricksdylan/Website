"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ExplainerVideo.module.css";

type Props = {
  src: string;
  poster: string;
  label: string;
};

export default function ExplainerVideo({ src, poster, label }: Props) {
  // The video is ~6 MB. Until someone asks for it we render only the poster,
  // so it never lands in the initial page load.
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // The click that mounts the video is the user gesture that permits playback,
  // but the autoPlay attribute doesn't reliably fire on a freshly mounted
  // element — start it explicitly. If a browser still blocks it, the native
  // controls are right there.
  useEffect(() => {
    if (playing) {
      videoRef.current?.play().catch(() => {});
    }
  }, [playing]);

  if (playing) {
    return (
      <video
        ref={videoRef}
        className={styles.video}
        src={src}
        poster={poster}
        controls
        autoPlay
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <button
      type="button"
      className={styles.trigger}
      onClick={() => setPlaying(true)}
      aria-label={label}
    >
      <Image
        src={poster}
        alt=""
        width={1280}
        height={720}
        sizes="(max-width: 900px) 92vw, 880px"
        className={styles.poster}
        priority={false}
      />
      <span className={styles.play} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
