import { CalendarOption, ReminderOption } from "./types"

export enum CalendarType {
  GOOGLE = "google",
  APPLE = "apple",
  OUTLOOK = "outlook",
}

export enum ReminderTime {
  NONE = "none",
  FIVE_MINUTES = "5 minutes",
  FIFTEEN_MINUTES = "15 minutes",
  THIRTY_MINUTES = "30 minutes",
  ONE_HOUR = "1 hour",
}

export const CalendarOptions: CalendarOption[] = [
  { id: 1, value: CalendarType.GOOGLE, label: "Google Calendar" },
  { id: 2, value: CalendarType.APPLE, label: "Apple Calendar" },
  { id: 3, value: CalendarType.OUTLOOK, label: "Outlook Calendar" },
]

export const ReminderOptions: ReminderOption[] = [
  { id: 1, value: ReminderTime.NONE, label: "No Reminder" },
  { id: 2, value: ReminderTime.FIVE_MINUTES, label: "5 Minutes Before" },
  { id: 3, value: ReminderTime.FIFTEEN_MINUTES, label: "15 Minutes Before" },
  { id: 4, value: ReminderTime.THIRTY_MINUTES, label: "30 Minutes Before" },
  { id: 5, value: ReminderTime.ONE_HOUR, label: "1 Hour Before" },
]
