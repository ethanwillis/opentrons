// @flow
import * as React from 'react'

import styles from './WellToolTip.css'

type Props = {
  wellContent: {
    name: string,
    volume: number,
    individualize: boolean,
    wellName: string,

    concentration?: string,
    ingredientNum?: number,
    serializeName?: string
  }
}

export default function WellToolTip (props: Props) {
  const wellContent = props.wellContent
  return (
    <div className={styles.well_tool_tip}>
      <h1>{wellContent.name}</h1>
      <div className={styles.info_row}>
        <div>
          {wellContent.wellName}
        </div>
        {wellContent.individualize && <div className={styles.instance_name}>
          {wellContent.serializeName || 'Sample'} {wellContent.ingredientNum}
        </div>}
        <div>
          {wellContent.volume} uL
        </div>
        <div>
          {wellContent.concentration || '-'}
        </div>
      </div>
    </div>
  )
}
