import React from 'react'

interface BlockProps {
    value?: string | null;
    onClick?: () => void;
    disabled: any;
}

const Block: React.FC<BlockProps> = ({value, onClick}) => {
  return (
    <div className='block' onClick={onClick}>{value}</div>
  )
}

export default Block;