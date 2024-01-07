export type Pizza = {
    id: string,
    title:string,
    imageUrl:string,
    price:number,
    size: number,
    type:number,
    count:number
  }
  
  export type SearchPizzaParams = { 
    sortBy:string, 
    order:string, 
    category:string, 
    search:string, 
    currentPage:string 
  }

  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
  }
  
  export interface PizzaSliceState {
    items: Pizza[],
    status: Status
  }