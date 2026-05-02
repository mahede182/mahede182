"use client";

import { motion } from "framer-motion";
import { TbMail, TbMapPin } from "react-icons/tb";
import { portfolioData } from "~/constants/portfolio.data";

export function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-13"
        >
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-heading">
                    Let&apos;s talk about your next project
                </h3>
                <p className="text-text-body">
                    Feel free to reach out for collaborations, freelance projects, or
                    full-time opportunities. I&apos;d be happy to hear from you. Fill out
                    the form or contact me directly via email to connect.
                </p>
            </div>

            <div className="space-y-4">
                <a
                    href={`mailto:${portfolioData.social
                        .find((s) => s.platform === "Email")
                        ?.url.replace("mailto:", "")}`}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-text-body hover:text-primary transition-colors p-4 bg-card rounded-xl border border-border hover:border-primary/50 shadow-sm"
                >
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <TbMail size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">Email me at</p>
                        <p className="font-medium text-text-heading">
                            {portfolioData.social
                                .find((s) => s.platform === "Email")
                                ?.url.replace("mailto:", "")}
                        </p>
                    </div>
                </a>

                <div className="flex items-center gap-4 text-text-body p-4 bg-card rounded-xl border border-border shadow-sm">
                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                        <TbMapPin size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">Based in</p>
                        <p className="font-medium text-text-heading">Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
