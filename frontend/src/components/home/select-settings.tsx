import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { Bell } from "lucide-react"

import { SelectOption } from "@/lib/types"

interface SelectSettingsProps {
  value: string
  placeholder: string
  options: SelectOption[]
  onChange: (value: string) => void
  showIcon?: boolean
}

function SelectSettings({
  value,
  placeholder,
  options,
  onChange,
  showIcon = false,
}: SelectSettingsProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full gradient-card text-popover-foreground mt-2 p-3 cursor-pointer rounded-lg border border-foreground/5 shadow-md hover:shadow-lg transition-all duration-300">
        {showIcon && <Bell className="w-5 h-5 text-tertiary mr-2" />}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="gradient-card glass-card border-secondary/5">
        <AnimatePresence>
          <motion.div
            className="rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}>
            {options.map((option) => (
              <SelectItem
                key={option.id}
                className="cursor-pointer hover:bg-accent/10 focus:bg-accent/20 rounded-md p-2 transition-colors"
                value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </motion.div>
        </AnimatePresence>
      </SelectContent>
    </Select>
  )
}

export default SelectSettings
