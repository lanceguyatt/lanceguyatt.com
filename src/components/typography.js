import styled from 'styled-components'

import { Box, Flex } from '../primitives'

export const Foo = styled(Box).attrs({
  border: 4,
  p: 2,
})`
  border-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMSAyNmg2N3YySDF2LTJ6TTY2IDJoMnYyNGgtMlYyem0xLTJoMXYyaC0xVjB6TTIgMmg2M3YySDJWMnptMCAyaDJ2MjBIMlY0em0wIDIwaDF2Mkgydi0yeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0wIDBoNjd2MkgwVjB6bTAgMmgydjI0SDBWMnptMCAyNGgxdjJIMHYtMnptMy0yaDYzdjJIM3YtMnpNNjQgNGgydjIwaC0yVjR6bTEtMmgxdjJoLTFWMnoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+Cg==)
    4 stretch;

  .gatsby-image-wrapper {
    display: block !important;
  }
`

export const Bevel = styled(Flex).attrs({
  border: 2,
  p: 2,
  flex: 'none',
  width: 'auto',
})`
  border-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA2NCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+YnV0dG9uPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xIDIyaDYzdjJIMXYtMnpNNjIgMmgydjIwaC0yVjJ6bTEtMmgxdjJoLTFWMHoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMCAwaDYzdjJIMFYwem0wIDJoMnYyMEgwVjJ6bTAgMjBoMXYySDB2LTJ6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPgo=)
    2 stretch;
`

export const Dl = styled(Flex).attrs({
  is: 'dl',
  flexDirection: ['column', 'row'],
  width: 1,
  mb: 4,
  lineHeight: 0,
})``

export const Dt = styled(Box).attrs({
  is: 'dt',
  color: 'light',
  flex: 1,
  mr: [null, 4],
  mb: 3,
  pt: 3,
})`
  &::after {
    content: ':';
  }
`

export const Dd = styled(Foo).attrs({
  is: 'dd',
  flex: 2,
})``
