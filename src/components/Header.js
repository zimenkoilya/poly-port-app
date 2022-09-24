import React from 'react'
import { GU } from '@1hive/1hive-ui'
import AccountModule from './Account/AccountModule'
import Layout from './Layout'

import beeSvg from '../assets/bee.svg'
import headerBackgroundSvg from '../assets/header-background.jpg'
import logoSvg from '../assets/logo.png'

function Header({ compact }) {
  const BeeIcon = <img src={beeSvg} height={compact ? 40 : 60} alt="" />
  const headerItemsWidth = compact ? 'auto' : 25 * GU

  return (
    <header
      css={`
        background: rgb(0, 25, 65);
        margin-bottom: ${compact ? `${2 * GU}px` : 0};
      `}
    >
      <div
        css={`
          background: url(${headerBackgroundSvg}) no-repeat;
          background-position: center center;
          padding: 80px 0;
        `}
      >
        <Layout>
          <div
            css={`
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <div
              css={`
                width: ${headerItemsWidth}px;
              `}
            >
              <img src={logoSvg} height="40" alt="" />
            </div>
            <div
              css={`
                width: ${headerItemsWidth}px;
              `}
            >
              <AccountModule compact={compact} />
            </div>
          </div>
        </Layout>
      </div>
    </header>
  )
}

export default Header
