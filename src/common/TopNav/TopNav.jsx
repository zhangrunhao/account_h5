import React from 'react'

export default class TopNav extends React.Component {
  render() {
    return (
      <div className="top-nav">
        <div className="setting"></div>
        <div className="back"></div>
        <div className="title"></div>
        <div className="date"></div>
        <div className="hidden"></div>
        <div className="add"></div>
        <div className="sheet"></div>
      </div>
    )
  }
}