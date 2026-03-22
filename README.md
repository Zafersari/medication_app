# Medication Tracker App

A cross-platform mobile application for medication tracking and reminders built with React Native and Expo.

## Features

- 💊 **Medication Entry**: Add medications with name, dosage, start/end dates, and daily times
- 🔔 **Local Notifications**: Scheduled recurring alerts for each medication dose
- 📅 **Daily Schedule**: Clean dashboard showing today's medications with checkboxes
- 💾 **Local Persistence**: All data stored locally using AsyncStorage
- ✅ **Progress Tracking**: Visual progress bar showing doses taken vs. total doses
- 🗑️ **Medication Management**: Delete medications and automatically cancel notifications

## Tech Stack

- **React Native** with **Expo**
- **TypeScript** for type safety
- **Expo Router** for navigation
- **expo-notifications** for local notifications
- **AsyncStorage** for data persistence
- **StyleSheet** for styling (clean, modern, accessible UI)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your preferred platform:
```bash
# iOS
npm run ios

# Android
npm run android

# Web (limited functionality)
npm run web
```

## Project Structure

```
One_More_App/
├── app/                      # Expo Router screens
│   ├── _layout.tsx          # Root layout with navigation
│   ├── index.tsx            # Home/Dashboard screen
│   └── add-medication.tsx   # Add Medication form
├── components/              # Reusable components (future)
├── services/               # Business logic
│   ├── notificationService.ts  # Notification scheduling
│   └── storageService.ts      # AsyncStorage operations
├── types/                  # TypeScript types
│   └── medication.ts       # Medication data types
├── utils/                  # Utility functions (future)
├── app.json               # Expo configuration
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript configuration
└── babel.config.js        # Babel configuration
```

## Usage

### Adding a Medication

1. Tap the "+ Add" button on the home screen
2. Enter medication name (e.g., "Amoxicillin")
3. Enter dosage (e.g., "2 pills", "500mg")
4. Select start and end dates
5. Add daily times by tapping "+ Add Time"
6. Tap "Save Medication"

### Tracking Daily Doses

1. View today's doses on the home screen
2. Tap a dose to mark it as taken (checkmark appears)
3. Progress bar shows completion status
4. Upcoming doses highlighted in blue

### Managing Medications

1. Scroll to "Active Medications" section
2. View medication details and schedule
3. Tap "Delete" to remove a medication
4. Notifications automatically canceled on deletion

## Notifications

- Permissions requested on first launch
- Scheduled for all future doses within treatment period
- Work even when app is closed
- Android: High priority with vibration
- iOS: Sound enabled

## Data Storage

All data is stored locally on your device using AsyncStorage:
- Medications saved with unique IDs
- Daily dose tracking per date
- No internet connection required
- Data persists between app sessions

## Future Enhancements

- [ ] Edit existing medications
- [ ] Medication history and statistics
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Export/import medication data
- [ ] Recurring prescription refill reminders
- [ ] Medication images/photos
- [ ] Dose skip reasons and notes

## License

MIT

## Author

Built with ❤️ using React Native and Expo
