"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { TbSend, TbCircleCheck, TbAlertCircle } from "react-icons/tb";

export function ContactForm() {
    const [formState, setFormState] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            setFormState("loading");

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        subject: `New Contact Form Submission from ${formData.name}`,
                    }),
                });

                const data = await response.json();

                if (data.success) {
                    setFormState("success");
                    setFormData({ name: "", email: "", message: "" });
                    setTimeout(() => setFormState("idle"), 5000);
                } else {
                    setFormState("error");
                    setTimeout(() => setFormState("idle"), 5000);
                }
            } catch (error) {
                setFormState("error");
                setTimeout(() => setFormState("idle"), 5000);
            }
        },
        [formData]
    );

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="background p-4 rounded-2xl border border-slate-800"
        >
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium foreground mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full h-14 background border border-slate-800 rounded-lg px-4 py-2 text-body focus:outline-none focus:border-primary transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium foreground mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full h-14 background border border-slate-800 rounded-lg px-4 py-2 text-body focus:outline-none focus:border-primary transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium foreground mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                        rows={4}
                        className="w-full background border border-slate-800 rounded-lg px-4 py-3 text-body focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell me about your project..."
                    />
                </div>

                {/* Success/Error Messages */}
                {formState === "success" && (
                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
                        <TbCircleCheck size={20} />
                        <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                )}

                {formState === "error" && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                        <TbAlertCircle size={20} />
                        <span>Failed to send message. Please try again.</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {formState === "loading" ? (
                        <>Sending...</>
                    ) : (
                        <>
                            Send Message <TbSend size={18} />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
}
