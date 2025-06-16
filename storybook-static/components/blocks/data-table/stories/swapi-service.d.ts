export interface Person {
    id: string;
    name: string;
    height: string;
    mass: string;
    birthYear: string;
    gender: string;
}
export declare function fetchPeople(page: number, limit: number): Promise<{
    data: Person[];
    totalPages: number;
    totalRecords: number;
}>;
//# sourceMappingURL=swapi-service.d.ts.map