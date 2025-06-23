import { PropsMulti, PropsSingle } from 'react-day-picker';
type CalendarMode = 'single' | 'multiple';
type CalendarValue<T extends CalendarMode> = T extends 'single' ? Date : Date[];
interface DatePickerProps<T extends CalendarMode = 'single'> {
    value?: CalendarValue<T>;
    onValueChange?: (value?: CalendarValue<T>) => void;
    defaultValue?: CalendarValue<T>;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    mode?: T;
    calendarProps?: T extends 'single' ? Omit<PropsSingle, 'selected' | 'onSelect' | 'mode'> : Omit<PropsMulti, 'selected' | 'onSelect' | 'mode'>;
}
export declare function DatePicker<T extends CalendarMode = 'single'>(props: DatePickerProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=date-picker.d.ts.map