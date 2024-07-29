
// dateUtils.js
import { format, addDays, addMonths } from 'date-fns';

// Obtener la fecha actual en el formato YYYY-MM-DDTHH:mm:ss.sssZ
const currentDate = new Date();
const formattedCurrentDate = format(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

// Sumar 7 días a la fecha actual
const datePlus7Days = addDays(currentDate, 7);
const formattedDatePlus7Days = format(datePlus7Days, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

// Sumar 15 días a la fecha actual
const datePlus15Days = addDays(currentDate, 15);
const formattedDatePlus15Days = format(datePlus15Days, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

// Sumar un mes a la fecha actual
const datePlus1Month = addMonths(currentDate, 1);
const formattedDatePlus1Month = format(datePlus1Month, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

export {
  formattedCurrentDate,
  formattedDatePlus7Days,
  formattedDatePlus15Days,
  formattedDatePlus1Month
};


