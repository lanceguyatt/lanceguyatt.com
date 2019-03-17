import { css } from 'styled-components'

import selected from './selected.svg'
import unselected from './unselected.svg'
import disabled from './disabled.svg'

export const link = css`
  background-color: ${props => props.theme.colors.secondary};
  display: inline-block;
  font-weight: normal;
  height: 2.8rem;
  font-size: 1.6rem;
  line-height: 2.8rem;
  text-align: center;
  border-width: 0.2rem;
  border-style: solid;
  border-image: url(${unselected}) 2 stretch;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.primary};
    border-image: url(${selected}) 2 stretch;
  }

  &[disabled] {
    border-image: url(${disabled}) 2 stretch;
  }
`
