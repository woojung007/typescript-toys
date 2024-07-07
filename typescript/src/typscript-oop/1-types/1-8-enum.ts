{
  /**
   * Enum : 여러가지의 관련된 상수 값들을 한곳에 모아서 정의할 수 있게 도와주는 타입
   */

  // JS
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });

  const dayOfToday = DAYS_ENUM.MONDAY;

  // TS
  type DaysOfWeek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

  enum Days {
    Monday = 1, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Tuesday);

  let day: Days = Days.Saturday;
  day = Days.Thursday;
  // day = 'eve';  // 컴파일 에러발생!

  console.log("day:", day);

  let dayOfWeek: DaysOfWeek = "Friday";
  // dayOfWeek = 100
}
