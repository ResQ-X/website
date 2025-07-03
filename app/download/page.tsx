"use client";

import { useEffect } from "react";

export default function DownloadPage() {
  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.resqx.customer";
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) &&
      !(window as any).MSStream
    ) {
      window.location.href =
        "https://apps.apple.com/ng/app/resq-x/id6504094221";
    } else {
      window.location.href = "https://resqx.ng";
    }
  }, []);

  return <p>Taking you to the right place...</p>;
}
