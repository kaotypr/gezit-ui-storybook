import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as React from 'react';
declare function ScrollArea({ className, children, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function ScrollBar({ className, orientation, thumbProps, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> & {
    thumbProps?: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaThumb>;
}): import("react/jsx-runtime").JSX.Element;
export { ScrollArea, ScrollBar };
//# sourceMappingURL=scroll-area.d.ts.map