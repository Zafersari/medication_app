# Quick Start Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Start the App

```bash
npm start
```

This will open the Expo Developer Tools in your browser.

## 3. Run on Device/Simulator

### Option A: Physical Device
1. Install **Expo Go** app from App Store (iOS) or Google Play (Android)
2. Scan the QR code shown in the terminal or browser
3. The app will load on your device

### Option B: iOS Simulator (Mac only)
```bash
npm run ios
```

### Option C: Android Emulator
```bash
npm run android
```

## 4. Test the App

### Add Your First Medication
1. Tap the **"+ Add"** button in the top right
2. Fill in the form:
   - Name: "Amoxicillin"
   - Dosage: "2 pills"
   - Start Date: Today
   - End Date: 14 days from today
   - Times: Add "08:00" and "20:00"
3. Tap **"Save Medication"**

### Check Today's Schedule
1. You'll be redirected to the home screen
2. See your doses for today
3. Tap a dose to mark it as taken
4. Watch the progress bar update

### Enable Notifications
1. When prompted, tap **"Allow"** for notifications
2. Scheduled notifications will appear at the specified times
3. Works even when app is closed

## Troubleshooting

### "Expo CLI not found"
```bash
npm install -g expo-cli
```

### Notifications not working
- Check device notification permissions in Settings
- Ensure Do Not Disturb is off
- On Android, check that battery optimization is disabled for Expo Go

### App won't start
```bash
# Clear cache and restart
npm start -- --clear
```

### TypeScript errors
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## Next Steps

- Add multiple medications
- Test notifications at different times
- Mark doses as taken throughout the day
- Delete old medications
- Explore the progress tracking

## Development Tips

- Use `console.log()` to debug - logs appear in the terminal
- Shake your device to open the developer menu
- Press `r` in the terminal to reload the app
- Press `m` to toggle the menu

## File Structure Overview

```
app/
├── index.tsx           → Home screen (daily schedule)
└── add-medication.tsx  → Add medication form

services/
├── notificationService.ts → Notification scheduling
└── storageService.ts      → Data persistence

types/
└── medication.ts      → TypeScript interfaces
```

Happy medication tracking! 💊
