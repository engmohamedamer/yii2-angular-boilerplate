export class Pagination {
    pageParam: string;
    pageSizeParam: string;
    params: any;
    totalCount: number;
    defaultPageSize: number;
    pageSizeLimit: any;
    firstRowNo: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
