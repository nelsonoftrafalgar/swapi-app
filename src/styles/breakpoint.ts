export interface IRwdPararms {
  width: string
  content: string,
}

export const breakpoint = ({content, width}: IRwdPararms) => {
  return `
    @media (min-width: ${width}) {
      ${content}
    }
  `
}
