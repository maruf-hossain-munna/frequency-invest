import React from 'react';
import localFont from "next/font/local";

const nexaText = localFont({
    src: [
        {
            path: "../../../public/fonts/NexaText-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../public/fonts/NexaText-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../public/fonts/NexaText-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../../public/fonts/NexaText-ExtraBold.otf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../../public/fonts/NexaText-Black.otf",
            weight: "900",
            style: "normal",
        },
        {
            path: "../../../public/fonts/NexaText-Heavy.otf",
            weight: "950",
            style: "normal",
        }
    ]
});

export default nexaText;