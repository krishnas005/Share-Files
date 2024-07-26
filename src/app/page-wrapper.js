"use client";
import { motion, AnimatePresence, delay } from "framer-motion"

export default function PageWrapper ({ children }) {
    <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 15 }}
                transition={{delay:0.25}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
}