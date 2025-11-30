"use client";

import Script from "next/script";

export function TawkTo() {
    const tawkToSrc = process.env.NEXT_PUBLIC_TAWK_TO_SRC;

    if (!tawkToSrc) {
        return null;
    }

    return (
        <Script id="tawk-to" strategy="afterInteractive">
            {`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='${tawkToSrc}';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
        })();
      `}
        </Script>
    );
}
