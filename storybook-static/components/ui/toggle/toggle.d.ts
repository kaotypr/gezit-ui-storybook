import { VariantProps } from 'class-variance-authority';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import type * as React from 'react';
declare const toggleVariants: (props?: ({
    variant?: "outline" | "default" | null | undefined;
    size?: "sm" | "lg" | "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Toggle({ className, variant, size, ...props }: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>): import("react/jsx-runtime").JSX.Element;
export { Toggle, toggleVariants };
//# sourceMappingURL=toggle.d.ts.map