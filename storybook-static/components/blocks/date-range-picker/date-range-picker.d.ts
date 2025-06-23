import { DateRange } from 'react-day-picker';
import { CalendarProps } from '../../ui/calendar';
interface DateRangePickerProps {
    value?: DateRange;
    onValueChange?: (value?: DateRange) => void;
    defaultValue?: DateRange;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    calendarProps?: Omit<CalendarProps, 'selected' | 'onSelect' | 'mode'>;
}
export declare function DateRangePicker(props: DateRangePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=date-range-picker.d.ts.map