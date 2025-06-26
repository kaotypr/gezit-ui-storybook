import { ColumnDef, ColumnPinningState, ColumnResizeMode, PaginationState, Row } from '@tanstack/react-table';
import * as React from 'react';
export interface DataTablePaginationState extends PaginationState {
    pageSize: number;
    pageIndex: number;
}
export interface DataTableClassNames {
    /** Class name for the root container div */
    root?: string;
    /** Class name for the table wrapper div */
    tableWrapper?: string;
    /** Class name for the table element */
    table?: string;
    /** Class name for the table header */
    header?: string;
    /** Class name for the table header row */
    headerRow?: string;
    /** Class name for the table header cell */
    headerCell?: string;
    /** Class name for the table body */
    body?: string;
    /** Class name for the table row */
    row?: string;
    /** Class name for the table cell */
    cell?: string;
    /** Class name for the pagination wrapper */
    pagination?: string;
    /** Class name for the pagination buttons */
    paginationButton?: string;
    /** Class name for the rows per page select */
    rowsPerPageSelect?: string;
    /** Class name for the page info text */
    pageInfo?: string;
    /** Class name for the no results message */
    noResults?: string;
}
export interface DataTableProps<TData> {
    columns: ColumnDef<TData, unknown>[];
    data: TData[];
    enablePagination?: boolean;
    pagination?: DataTablePaginationState;
    onPaginationChange?: (pagination: DataTablePaginationState) => void;
    enableRowSelection?: boolean;
    onRowSelectionChange?: (selectedRows: TData[]) => void;
    enableColumnResizing?: boolean;
    columnResizeMode?: ColumnResizeMode;
    columnPinning?: ColumnPinningState;
    onRowClick?: (row: Row<TData>) => void;
    onRowDoubleClick?: (row: Row<TData>) => void;
    bordered?: boolean;
    /** Class names for different parts of the table */
    classNames?: DataTableClassNames;
    /** Custom text for page size label (default: "Rows per page") */
    pageSizeLabel?: string;
    /** Show loading overlay on top of the table */
    loading?: boolean;
    /** Show current page number (default: true) */
    showPage?: boolean;
    /** Show header as sticky on top of the table */
    stickyHeader?: boolean;
    /** Custom message or component to show when data is empty (default: "No results.") */
    emptyMessage?: React.ReactNode;
}
export declare function DataTable<TData>({ columns: userColumns, data, enablePagination, pagination, onPaginationChange, enableRowSelection, onRowSelectionChange, enableColumnResizing, columnResizeMode, columnPinning, onRowClick, onRowDoubleClick, bordered, classNames, pageSizeLabel, loading, showPage, stickyHeader, emptyMessage, }: DataTableProps<TData>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=data-table.d.ts.map