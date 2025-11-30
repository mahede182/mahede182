"use client";

import { useCallback } from "react";

export const useScrollTo = () => {
    const scrollTo = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState(null, "", window.location.pathname);
        }
    }, []);

    return scrollTo;
};
