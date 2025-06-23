import { VariantProps } from 'class-variance-authority';
import { badgeVariants } from './badge-variants';
import type * as React from 'react';
declare function Badge({ className, variant, asChild, rounded, size, color, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
//# sourceMappingURL=badge.d.ts.map