import React from 'react'
import { createRoot } from 'react-dom/client'
// import { BoatTreeSelect } from './lib/bundle'
import BoatTreeSelect from '@/components/BoatTreeSelect'
import 'antd/dist/antd.css'

const treeData = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
      { title: 'leaf 0-1', key: '0-0-1', isLeaf: true }
    ]
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1', key: '0-1-1', isLeaf: true }
    ]
  }
]

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 100
      }}
    >
      <BoatTreeSelect treeData={treeData} />
    </div>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
