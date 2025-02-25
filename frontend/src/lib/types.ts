import { CalendarType, ReminderTime } from "@/lib/constants"

export interface Shift {
  name: string
  date: string
  time: string
  location: string
  reminder: string
}

export interface SelectOption {
  id: number
  value: string
  label: string
}

export interface CalendarOption extends SelectOption {
  value: CalendarType
}

export interface ReminderOption extends SelectOption {
  value: ReminderTime
}