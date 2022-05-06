import React, { useState } from 'react'
import { Tree, Select } from 'antd'

const BoatTreeSelect = ({ treeData }) => {
  const [value, setValue] = useState([])

  const onSelect = (selectedKeys, info) => {
    // console.log('selected', selectedKeys, info)
    if (info.node.isLeaf) {
      setValue(
        [...value, ...selectedKeys].reduce(
          (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
          []
        )
      )
    }
  }

  return (
    <Select
      style={{ width: 200 }}
      dropdownRender={() => (
        <Tree.DirectoryTree onSelect={onSelect} treeData={treeData} />
      )}
      mode="multiple"
      value={value}
      onChange={setValue}
    />
  )
}

export default BoatTreeSelect
