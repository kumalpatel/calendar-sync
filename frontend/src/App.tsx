import { motion } from "framer-motion"
import Home from "@/components/home"

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900/20 via-background to-background text-foreground p-8">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <motion.h1
          className="text-7xl font-black gradient-text tracking-tight"
          whileHover={{ scale: 1.05 }}>
          Calendar Sync
        </motion.h1>
      </motion.div>
      <Home />
    </main>
  )
}

export default App
