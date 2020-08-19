import React from "react"
import PropTypes from "prop-types"

import SideBar from "../SideBar"
import MenuBar from "../MenuBar"

import GlobalStyles from "../../styles/global"
import * as S from "./styles"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <SideBar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
