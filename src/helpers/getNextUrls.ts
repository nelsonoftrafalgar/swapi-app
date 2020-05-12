import { IListData } from '../dto/list'

export const getNextUrls = (a: string[], {next}: IListData) => next ? [...a, next] : a
