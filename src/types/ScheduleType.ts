export interface ScheduleType {
  schedule_id: number;
  screen_type: string;
  place: string;
  date: string;
  start_time: string;
  end_time: string;
  total_seats: number;
  empty_seats: number;
  reservation_availability: boolean;
}

export interface SelectScheduleType extends ScheduleType {
  day: string;
}
