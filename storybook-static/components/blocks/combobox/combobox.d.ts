import { ButtonProps } from '../../ui/button';
import * as React from 'react';
export interface ComboboxItem {
    label: string;
    value: string;
}
export interface ComboboxProps extends Omit<ButtonProps, 'onChange' | 'value'> {
    /**
     * The data to display in the combobox
     */
    data: ComboboxItem[];
    /**
     * Function called when the search input value changes
     */
    onSearch?: (value: string) => void;
    /**
     * Debounce time in milliseconds for the search function
     * @default 300
     */
    debounceTime?: number;
    /**
     * Function called when the options list is scrolled to the bottom
     */
    onScrolled?: () => void;
    /**
     * The controlled open state of the combobox
     */
    open?: boolean;
    /**
     * Function called when the open state changes
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * The selected value
     */
    value?: string;
    /**
     * Function called when the selected value changes
     */
    onValueChange?: (value: string) => void;
    /**
     * Placeholder text for the trigger button
     */
    placeholder?: string;
    /**
     * Placeholder text for the search input
     */
    searchPlaceholder?: string;
    /**
     * Message to display when no results are found
     */
    emptyMessage?: string;
    /**
     * Whether the combobox is disabled
     */
    disabled?: boolean;
    /**
     * Maximum height of the scrollable content area in pixels for desktop view
     * @default 200
     */
    contentMaxHeight?: number;
    /**
     * Maximum height of the scrollable content area for mobile view
     * Can be a number (pixels) or a string (e.g., '50vh' for 50% of viewport height)
     * @default 350
     */
    contentMaxHeightMobile?: number | string;
    /**
     * Whether the combobox has an invalid state
     */
    'aria-invalid'?: boolean;
    /**
     * Whether to enable responsive mode (Drawer on mobile, Popover on desktop)
     * @default false
     */
    enableResponsive?: boolean;
}
export declare const Combobox: React.ForwardRefExoticComponent<Omit<ComboboxProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=combobox.d.ts.map