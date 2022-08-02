import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { palette, prop, switchProp } from 'styled-tools'

type Props = {
  children: ReactNode,
  variant?: 'default' | 'success'
  onClick?: () => void
}

const Button: FC<Props> = ({ children, variant, ...props }) => (
  <S.Button
    variant={variant}
    {...props}
  >
    {children}
  </S.Button>
)

export default Button

const S: any = {}

S.Button = styled.button`
  height: 3.4rem;
  min-height: 3.4rem;
  padding: 0 10px;
  color: ${palette('white')};
  background-color: ${switchProp(prop('variant', 'default'), {
    default: palette('accent'),
    success: palette('success')
  })};
  border-radius: 4px;
  border: none;
  width: 100%;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .3);
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`
