import { DateRange } from 'react-day-picker';
import { CalendarProps } from '../../ui/calendar';
interface DateTimeRangePickerProps {
    value?: DateRange;
    onValueChange?: (value?: DateRange) => void;
    defaultValue?: DateRange;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    minuteStep?: number;
    ampm?: boolean;
    calendarProps?: Omit<CalendarProps, 'selected' | 'onSelect' | 'mode'>;
}
export declare function DateTimeRangePicker(props: DateTimeRangePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=date-time-range-picker.d.ts.map