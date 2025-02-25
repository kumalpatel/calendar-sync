import * as React from "react"

import { motion } from "framer-motion"
import { UploadCloud } from "lucide-react"

interface UploadButtonProps {
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function UploadButton({ onFileUpload }: UploadButtonProps) {
  return (
    <motion.label
      className="group flex flex-col items-center justify-center w-full h-48 p-6 cursor-pointer rounded-xl bg-gradient-to-br from-card-secondary/80 to-card/80 text-secondary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}>
      <div className="relative p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <UploadCloud className="w-14 h-14 text-primary" />
      </div>
      <span className="text-lg font-semibold">Click to Upload</span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onFileUpload}
      />
      <div className="absolute inset-0 rounded-xl border border-foreground/5 group-hover:border-foreground/10 transition-all duration-300" />
    </motion.label>
  )
}

export default UploadButton
