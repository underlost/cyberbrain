import * as React from 'react'

function SvgHeader(props) {
  return (
    <div className="d-none d-md-block">
      <svg width={188} height={41} viewBox="0 0 188 41" className="svg-header-ui" {...props}>
        <path
          fill="#231f20"
          fillRule="evenodd"
          d="M180.105 1.413l.937-.943h6.561v.943l-.937.942H15.172l-1.874 1.868h-2.811L2.99 11.727v2.81l-1.875 1.868V32.34l1.875 1.868v4.694L1.115 40.77H.178V12.669L11.425 1.413h168.68"
        />
      </svg>
    </div>
  )
}

export default SvgHeader
