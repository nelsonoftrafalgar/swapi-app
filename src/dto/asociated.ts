export interface IAsociatedProps {
  title: string
  data: JSX.Element[]
}

export interface IAsociated {
  name: string
  type: string
  id: string
}

export interface IAsociatedItemProps extends IAsociated {}

export interface IAsociatesInfo {
  name: string
  url: string
}
