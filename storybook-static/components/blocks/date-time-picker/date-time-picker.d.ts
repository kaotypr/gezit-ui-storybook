import { CalendarProps } from '../../ui/calendar';
interface DateTimePickerProps {
    value?: Date;
    onValueChange?: (value?: Date) => void;
    defaultValue?: Date;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    minuteStep?: number;
    ampm?: boolean;
    calendarProps?: Omit<CalendarProps, 'selected' | 'onSelect' | 'mode'>;
}
export declare function DateTimePicker(props: DateTimePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=date-time-picker.d.ts.map