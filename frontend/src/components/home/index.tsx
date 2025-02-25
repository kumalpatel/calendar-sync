import * as React from "react"

import { AnimatePresence, motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ShiftCard from "@/components/home/shift-card"
import UploadButton from "@/components/home/upload-button"
import SelectSettings from "@/components//home/select-settings"

import { CalendarOptions } from "@/lib/constants"
import { EXAMPLE_SHIFTS } from "@/lib/data"

type Shift = typeof EXAMPLE_SHIFTS[number]

function Home() {
  const [image, setImage] = React.useState<File | null>(null)
  const [preview, setPreview] = React.useState<string | null>(null)
  const [shifts, setShifts] = React.useState<Shift[] | null>(null)
  const [selectedShifts, setSelectedShifts] = React.useState<(Shift | null)[]>(
    []
  )
  const [calendarType, setCalendarType] = React.useState<string>("google")

  React.useEffect(() => {
    if (!preview) return

    const timeoutId = setTimeout(() => {
      setShifts(EXAMPLE_SHIFTS)
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [preview])

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  function handleShiftSelection(shift: Shift, index: number) {
    setSelectedShifts((prev) => {
      const updated = [...prev]
      updated[index] = updated[index] === shift ? null : shift

      console.log(updated)
      return updated
    })
  }

  function handleCalendarImport() {}

  return (
    <Card className="w-full max-w-2xl bg-card/80 glass-card backdrop-blur-2xl rounded-3xl p-10">
      <CardContent className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!preview ? (
            <motion.div
              key="upload"
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, y: -20 }}>
              <UploadButton onFileUpload={handleImageUpload} />
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              className="w-full space-y-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}>
              <motion.img
                src={preview}
                alt="Scheudle Preview"
                className="w-full h-auto object-cover rounded-xl mt-6 mb-8 shadow-lg"
                layoutId="preview"
              />
              {shifts ? (
                <>
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <div className="w-full space-y-5">
                      {shifts.map((shift, index) => (
                        <ShiftCard
                          key={index}
                          index={index}
                          shift={shift}
                          isSelected={selectedShifts[index] !== shift}
                          onSelect={() => handleShiftSelection(shift, index)}
                        />
                      ))}
                    </div>
                  </motion.div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-emphasis mb-4">
                      Calendar Type
                    </h2>
                    <SelectSettings
                      value={calendarType}
                      placeholder="Select Calendar"
                      options={CalendarOptions}
                      onChange={setCalendarType}
                    />
                  </div>
                  <motion.div
                    className="flex justify-center pt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <Button
                      className="group relative overflow-hidden w-full max-w-sm h-12 text-lg font-semibold rounded-xl border border-primary/20 transition-all duration-500"
                      onClick={() => handleCalendarImport()}>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-hover via-primary to-primary-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                      <div className="shine-effect" />
                      <div className="relative text-primary-foreground">
                        Import to Calendar
                      </div>
                      <div className="glow-effect" />
                    </Button>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}>
                  <div className="relative w-16 h-16">
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-primary/20"
                      animate={{ scale: [0.8, 1.1, 0.8] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <p className="text-lg text-muted-foreground mt-6 font-medium">
                    Processing your schedule...
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

export default Home
