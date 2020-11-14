import { css } from 'styled-components';

import selected from './selected.svg';
import unselected from './unselected.svg';
import ghosted from './ghosted.svg';

export const link = css`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.black};
  display: inline-block;
  font-weight: normal;
  height: 2.4rem;
  font-size: 1.6rem;
  line-height: 1.125;
  text-align: center;
  border-width: 0.2rem;
  border-style: solid;
  border-image: url(${unselected}) 2 stretch;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.1rem 1.2rem;
  position: relative;

  &:focus,
  &:active {
    background-color: ${(props) => props.theme.colors.primary};
    border-image: url(${selected}) 2 stretch;
  }

  &[disabled] {
    pointer-events: none;

    &::before {
      content: '';
      background: url(${ghosted});
      position: absolute;
      top: -0.2rem;
      right: 0.1rem;
      bottom: -0.2rem;
      left: -0.1rem;
      z-index: 1;
      width: calc(100% + 0.2rem);
    }
  }
`;

export default link;
