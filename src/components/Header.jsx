import React from 'react'

const Header = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }


  return (

    <div className={headerStyle}>
      <h2
      style={{
        fontSize: "6rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "#ececec",
        textAlign: "center",
      }}
      > TO DO LIST </h2>
    </div>
    
  )
}

export default Header