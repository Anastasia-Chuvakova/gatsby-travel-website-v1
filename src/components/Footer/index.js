import React from "react"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import {
  FooterContainer,
  SocialIcon,
  SocialIcons,
  SocialIconLink,
  SocialLogo,
  SocialMediaWrap,
  SocialMedia,
  WebsiteRights,
} from "./FooterElements"

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon />
              EXPLORE
            </SocialLogo>

            <WebsiteRights>EXPLORE {new Date().getFullYear()}</WebsiteRights>

            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="Instagram"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  )
}

export default Footer
