import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './button-variants';
import type * as React from 'react';
export interface ButtonProps extends Omit<React.ComponentProps<'button'>, 'color'> {
    variant?: VariantProps<typeof buttonVariants>['variant'];
    color?: VariantProps<typeof buttonVariants>['color'];
    size?: VariantProps<typeof buttonVariants>['size'];
    rounded?: VariantProps<typeof buttonVariants>['rounded'];
    asChild?: boolean;
}
declare function Button({ className, variant, size, color, rounded, asChild, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map