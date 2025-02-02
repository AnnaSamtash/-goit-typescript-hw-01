// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  switch (day) {
    case DayOfWeek.Saturday:
      return true;
    case DayOfWeek.Sunday:
      return true;
    default:
      return false;
  }
};
console.log(isWeekend(DayOfWeek.Wednesday));
