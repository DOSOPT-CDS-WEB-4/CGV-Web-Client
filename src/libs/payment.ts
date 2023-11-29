import { apiResponse } from '../types/axios';
import { paymentScheduleTypes } from '../types/payment';
import { api } from './axios';

export const patchPaymentScheduleData = async (scheduleId: number) => {
  try {
    const { data } = await api.patch<apiResponse<paymentScheduleTypes>>('/schedule/reserve', {
      schedule_id: scheduleId,
    });
    console.log(data);
    return { message: data.message, isError: false };
  } catch (err) {
    return { isError: true };
  }
};
