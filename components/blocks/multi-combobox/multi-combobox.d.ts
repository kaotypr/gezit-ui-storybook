import { ButtonProps } from '../../ui/button';
import * as React from 'react';
export interface MultiComboboxItem {
    label: string;
    value: string;
}
export interface MultiComboboxProps extends Omit<ButtonProps, 'onChange' | 'value'> {
    /**
     * The data to display in the multi-combobox
     */
    data: MultiComboboxItem[];
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
     * The controlled open state of the multi-combobox
     */
    open?: boolean;
    /**
     * Function called when the open state changes
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * The selected values
     */
    values: string[];
    /**
     * Function called when the selected values change
     */
    onValuesChange: (values: string[]) => void;
    /**
     * Maximum number of items that can be selected
     * @default undefined
     */
    maxItems?: number;
    /**
     * Whether to wrap values to new lines when they overflow
     * If false, values will scroll horizontally
     * @default false
     */
    wrap?: boolean;
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
     * Whether the multi-combobox is disabled
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
     * Whether the multi-combobox has an invalid state
     */
    'aria-invalid'?: boolean;
    /**
     * Whether to enable responsive mode (Drawer on mobile, Popover on desktop)
     * @default false
     */
    enableResponsive?: boolean;
}
export declare const MultiCombobox: React.ForwardRefExoticComponent<Omit<MultiComboboxProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=multi-combobox.d.ts.map