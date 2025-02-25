import * as React from "react"

import { motion } from "framer-motion"
import {
  Calendar,
  CalendarCheck,
  Clock,
  LucideIcon,
  MapPin,
} from "lucide-react"

import SelectSettings from "@/components/home/select-settings"
import { ReminderOptions } from "@/lib/constants"
import { Shift } from "@/lib/types"
import { cn } from "@/lib/utils"

interface ShiftDetailProps {
  icon: LucideIcon
  label: string
  value: string
}

const ShiftDetail = ({ icon: Icon, label, value }: ShiftDetailProps) => (
  <div className="flex items-center gap-3 text-sm">
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 border border-accent/20">
      <Icon className="w-4 h-4 text-accent-foreground" />
    </div>
    <div className="flex flex-col">
      <span className="text-muted-foreground text-xs">{label}</span>
      <span className="text-emphasis font-medium">{value}</span>
    </div>
  </div>
)

interface ShiftCardProps {
  shift: Shift
  index: number
  isSelected: boolean
  onSelect: (shift: Shift, index: number) => void
}

function ShiftCard({
  shift,
  index,
  isSelected = true,
  onSelect,
}: ShiftCardProps) {
  const [reminder, setReminder] = React.useState<string>("none")

  const handleReminderClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click when interacting with reminder
  }

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden gradient-card rounded-xl border border-foreground/5 shadow-md cursor-pointer transition-all duration-300",
        isSelected && "ring-2 ring-primary/60 shadow-lg shadow-primary/10"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => onSelect(shift, index)}>
      {isSelected && (
        <motion.div
          className="absolute top-3 right-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <div className="bg-success/10 p-2 rounded-full">
            <CalendarCheck className="w-5 h-5 text-success" />
          </div>
        </motion.div>
      )}
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-emphasis mb-2">
            {shift.name}
          </h3>
          <div className="h-1.5 w-24 gradient-primary rounded-full opacity-80" />
        </div>
        <div className="space-y-4">
          <ShiftDetail icon={Calendar} label="Date" value={shift.date} />
          <ShiftDetail icon={Clock} label="Time" value={shift.time} />
          <ShiftDetail icon={MapPin} label="Location" value={shift.location} />
        </div>
        <div
          className="relative z-10 mt-6 pt-4 border-t border-border"
          onClick={handleReminderClick}>
          <SelectSettings
            value={reminder}
            placeholder="Set Reminder"
            options={ReminderOptions}
            onChange={setReminder}
            showIcon
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

export default ShiftCard
