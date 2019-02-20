import { css } from 'styled-components'

import selected from './selected.svg'
import unselected from './unselected.svg'

export const link = css`
  display: inline-block;
  background-color: transparent;
  font-weight: normal;
  height: 2.4rem;
  font-size: 1.6rem;
  line-height: 1.25;
  text-align: center;
  border-width: 0.2rem;
  border-style: solid;
  border-image: url(${unselected}) 2 stretch;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 ${props => props.theme.space[3]};

  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.primary};
    border-image: url(${selected}) 2 stretch;
  }
`
