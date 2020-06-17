import React from 'react'
import { Button } from './Button'

export default {
  title: 'Button',
  parameters: {
    info: `
USWDS 2.0 Button component

Source: https://designsystem.digital.gov/components/button/
`,
  },
}

export const defaultButton = (): React.ReactElement => (
  <Button type="button">Click Me</Button>
)

export const secondary = (): React.ReactElement => (
  <Button type="button" secondary>
    Click Me
  </Button>
)

export const accent = (): React.ReactElement => (
  <Button type="button" accent>
    Click Me
  </Button>
)

export const base = (): React.ReactElement => (
  <Button type="button" base>
    Click Me
  </Button>
)

export const outline = (): React.ReactElement => (
  <Button type="button" outline>
    Click Me
  </Button>
)

export const inverse = (): React.ReactElement => (
  <Button type="button" inverse>
    Click Me
  </Button>
)

export const big = (): React.ReactElement => (
  <Button type="button" size="big">
    Click Me
  </Button>
)

export const small = (): React.ReactElement => (
  <Button type="button" size="small">
    Click Me
  </Button>
)

export const icon = (): React.ReactElement => (
  <Button type="button" icon>
    Click Me
  </Button>
)

export const unstyled = (): React.ReactElement => (
  <Button type="button" unstyled>
    Click Me
  </Button>
)

export const customClass = (): React.ReactElement => (
  <Button type="button" className="custom-class">
    Click Me
  </Button>
)

export const asAnchorTag = (): React.ReactElement => (
  <Button
    as="a"
    href="https://truss.works"
    target="_blank"
    rel="noopener noreferrer">
    Visit Truss
  </Button>
)

export const asCustomComponent = (): React.ReactElement => {
  interface MockLinkProps {
    to: string
    children: React.ReactNode
  }

  const CustomLink = ({ to, children }: MockLinkProps): React.ReactElement => (
    <a href={to}>{children}</a>
  )

  return (
    <Button as={CustomLink} to="https://truss.works">
      Visit Truss
    </Button>
  )
}
