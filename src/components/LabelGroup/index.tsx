import React from 'react';

interface IProps {
  label: string,
  value: any
}

const LabelGroup: React.FC<IProps> = (props: IProps) => {
  return(
    <div>
      <label style={{
        fontWeight: 'bold'
      }}>{props.label}</label>
      <p style={{
        marginTop: '-2px'
      }}>{props.value}</p>
    </div>
  )
}

export default LabelGroup;