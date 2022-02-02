import '@testing-library/jest-dom/extend-expect'

declare module '*module.css' {
  const styles: {
    [className: string]: string
  }
  export default styles
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}
