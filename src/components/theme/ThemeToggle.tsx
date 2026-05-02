"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { TbMoon, TbSun } from "react-icons/tb";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-border/20 border border-border" />
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-border/20 border border-border text-text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <TbSun size={20} /> : <TbMoon size={20} />}
        </motion.button>
    );
}
