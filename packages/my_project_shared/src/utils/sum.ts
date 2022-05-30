// export const Sum = (a: number, b: number): number => a + b;

import { EveryoneCanUseThisType } from "../types";

export const awesomeMethodEveryoneCanUse = (
  data: EveryoneCanUseThisType
): string => {
  return `Hey, ${data.name}! You are ${data.age} years old. You were born in ${data.extraData.bornIn} and you live in ${data.extraData.livesIn}.`;
};
