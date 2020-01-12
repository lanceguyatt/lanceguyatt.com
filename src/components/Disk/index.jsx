/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'
import { Box } from '@theme-ui/components'

const propTypes = {
  children: PropTypes.node.isRequired
}

export default function Disk({ children, ...props }) {
  return (
    <Box
      {...props}
      __css={{
        display: 'block',
        textDecoration: 'none'
      }}
    >
      <svg viewBox="0 0 46 46" width={46} heigh={46}>
        <g fill="none" fillRule="evenodd">
          <path fill="#AAA" d="M0 0h43v46H0z" />
          <path d="M5 8V6h32v2h2v32H4V8h1z" fill="#000" />
          <path d="M29 16v2H13v-2h-1V6h18v10h-1z" fill="#FFF" />
          <path fill="#000" d="M24 7h3v8h-3z" />
          <path d="M9 24v-2h25v2h1v16H8V24h1z" fill="#FFF" />
          <path fill="#AAA" d="M5 37h2v2H5z" />
          <path
            d="M28 28v-2h2v2h-1v2h-1v2h-1v2h-1v2h-1v2h-2v-2h1v-2h1v-2h1v-2h1v-2h1zm-3 0v-2h2v2h-1v2h-1v2h-1v2h-1v2h-1v2h-2v-2h-1v-2h-1v-2h2v2h2v-2h1v-2h1v-2h1zm-8 8h-1v-2h-1v-2h2v2h1v2h1v2h-2v-2z"
            fill="#000"
          />
          <path d="M42 46H1v-2h41V2h1v44h-1z" fill="#000" />
          <path d="M1 2v44H0V0h43v2H1z" fill="#FFF" />
        </g>
      </svg>
      <Box __css={{ textAlign: 'center', mt: 3 }}>{children}</Box>
    </Box>
  )
}

Disk.propTypes = propTypes
