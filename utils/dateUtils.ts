/**
 * Format a date to YYYY-MM-DD string
 */
export const formatDateToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Get today's date in YYYY-MM-DD format
 */
export const getTodayString = (): string => {
  return formatDateToYYYYMMDD(new Date());
};

/**
 * Check if a date is today
 */
export const isToday = (dateString: string): boolean => {
  return dateString === getTodayString();
};

/**
 * Parse YYYY-MM-DD string to Date
 */
export const parseDateString = (dateString: string): Date => {
  return new Date(dateString);
};

/**
 * Format time from Date to HH:MM
 */
export const formatTimeFromDate = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

/**
 * Check if a time has passed today
 */
export const hasTimePassed = (timeString: string): boolean => {
  const now = new Date();
  const [hours, minutes] = timeString.split(':').map(Number);
  const timeToCheck = new Date();
  timeToCheck.setHours(hours, minutes, 0, 0);
  return now > timeToCheck;
};
