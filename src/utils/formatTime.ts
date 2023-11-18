import { IStoreTime } from "@/types";

const formatTime = (time: IStoreTime) => {
  return `${time.opensAt.hours} ${time.opensAt.period} - ${time.closesAt.hours} ${time.closesAt.period}`;
};

export default formatTime;
