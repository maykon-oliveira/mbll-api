export interface MBLLResponse<T> {
    code: number;
    data: T;
    status: 'success'
}