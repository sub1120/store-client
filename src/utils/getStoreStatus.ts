import { DAYS, IStoreTime, PERIODS } from "@/types";
import { ITime } from "@/types";

// format time
const getFormatedTime = (time: ITime) => {
  return `${time.hours} ${time.period}`;
};

// compares two times
const compareTime = (time1: ITime, time2: ITime) => {
  // PM > AM
  if (time1.period !== time2.period) {
    return time2.period === "PM" ? -1 : 1;
  }

  // Compare hours
  if (time1.hours !== time2.hours) {
    return time2.hours > time1.hours ? -1 : 1;
  }

  // Compare minutes
  if (time1.minutes !== time2.minutes) {
    return time2.minutes > time1.minutes ? -1 : 1;
  }

  return 0;
};

// get store status text
const getStoreStatus = (storeTiming: {
  monday: IStoreTime;
  tuesday: IStoreTime;
  wednessday: IStoreTime;
  thursday: IStoreTime;
  friday: IStoreTime;
  saturday: IStoreTime;
  sunday: IStoreTime;
}) => {
  let storeCurrentStatus = "";

  //current date
  const currentDate = new Date();

  //current day
  const currentDayIndex = currentDate.getDay();
  const currentDay = DAYS[currentDayIndex];

  // current time
  const currentTime: ITime = {
    hours: currentDate.getHours() % 12,
    minutes: currentDate.getMinutes(),
    period: currentDate.getHours() >= 12 ? PERIODS.PM : PERIODS.AM,
  };

  // current day store timings
  type IndexType = keyof typeof storeTiming;
  const currentDayStoreTiming = storeTiming[currentDay as IndexType];

  // Case 1: Store is open now
  if (
    !currentDayStoreTiming.isClosed &&
    compareTime(currentTime, currentDayStoreTiming.closesAt) === -1
  ) {
    // CASE 1(a): Current Time < Opening Time
    if (compareTime(currentTime, currentDayStoreTiming.opensAt) === -1) {
      storeCurrentStatus = `Closed - Opens ${getFormatedTime(
        currentDayStoreTiming.opensAt
      )}`;
    }

    // CASE 1(b): Opening Time <= Current Time < Closing Time
    else if (
      compareTime(currentTime, currentDayStoreTiming.opensAt) >= 0 &&
      compareTime(currentTime, currentDayStoreTiming.closesAt) === -1
    ) {
      storeCurrentStatus = `Open - Closes  ${getFormatedTime(
        currentDayStoreTiming.closesAt
      )}`;
    }
  }

  // CASE 2: Store is closed now
  else {
    const nextDay = DAYS[(currentDayIndex + 1) % 7];
    const nextDayTiming = storeTiming[nextDay as IndexType];

    // CASE 2(a) : Next day store is opened
    if (!nextDayTiming.isClosed) {
      storeCurrentStatus = `Closed - Opens  ${getFormatedTime(
        currentDayStoreTiming.opensAt
      )}`;
    }
    // CASE 2(b): Next day store is closed
    else {
      const startIndex = (currentDayIndex + 1) % 7;

      let i = startIndex;
      let searchIndex = startIndex;

      do {
        // find next day when store is opened
        if (!storeTiming[DAYS[i] as IndexType].isClosed) {
          searchIndex = i;
          break;
        }

        i = (i + 1) % 7;
      } while (i !== startIndex);

      const nextOpenDay = DAYS[searchIndex];
      const nextOpenDayTiming = storeTiming[nextOpenDay as IndexType];

      storeCurrentStatus = `Closed - Opens ${
        nextOpenDay[0].toUpperCase() + nextOpenDay.slice(1)
      }  ${getFormatedTime(nextOpenDayTiming.opensAt)}`;
    }
  }

  return storeCurrentStatus;
};

export default getStoreStatus;
