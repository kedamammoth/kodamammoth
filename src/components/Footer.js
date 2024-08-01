import React from 'react';
import { Anchor } from 'react95';
import styled from 'styled-components';

function Footer() {
  return (
    <footer
      style={{
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor:
          'rgb(254, 254, 254) rgb(10, 10, 10) rgb(10, 10, 10) rgb(254, 254, 254)',
        boxShadow:
          'rgb(223, 223, 223) 1px 1px 0px 1px inset, rgb(132, 133, 132) -1px -1px 0px 1px inset',
        boxSizing: 'border-box',
        background: 'rgb(198, 198, 198)',
        color: 'rgb(10, 10, 10)',
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        left: 'auto',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '10px 0px 15px',
      }}>
      <StyledFooterInner>
        <a href="/">
          <div
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
            }}>
            <TextStyle data-text="kedamammoth">kedamammoth</TextStyle>
          </div>
        </a>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}>
          <Anchor href="https://x.com/KedamaPatsukin" target="_blank">
            Twitter
          </Anchor>
          <Anchor href="https://github.com/kedamammoth" target="_blank">
            GitHub
          </Anchor>
          <Anchor
            href="https://www.instagram.com/chulidren_saku/"
            target="_blank">
            Instagram
          </Anchor>
        </div>
      </StyledFooterInner>
    </footer>
  );
}

const StyledFooterInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextStyle = styled.div`
  position: relative;
  color: rgb(132, 133, 132);
  --pixel-size: 1px;
  text-shadow:
    calc(-1 * var(--pixel-size)) calc(-1 * var(--pixel-size)) 0px #0a0a0a,
    var(--pixel-size) var(--pixel-size) 0px #fefefe;
  font-style: italic;

  &::before {
    display: block;
    pointer-events: none;
    content: attr(data-text);
    position: absolute;
    z-index: 999;
    top: 0px;
    left: 0px;
    background-image: linear-gradient(
        45deg,
        rgb(198, 198, 198) 25%,
        transparent 25%,
        transparent 75%,
        rgb(198, 198, 198) 75%
      ),
      linear-gradient(
        45deg,
        rgb(198, 198, 198) 25%,
        transparent 25%,
        transparent 75%,
        rgb(198, 198, 198) 75%
      );
    background-color: transparent;
    background-size: 2px 2px;
    background-position:
      0px 0px,
      1px 1px;
    background-clip: text;
    color: transparent;
    text-shadow: none;
  }
`;

export default Footer;
