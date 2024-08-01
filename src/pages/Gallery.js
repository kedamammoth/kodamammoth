import React, { useEffect, useRef, useState } from 'react';
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
  Avatar,
  Window,
  WindowHeader,
  WindowContent,
  Frame,
  ScrollView,
  Anchor,
} from 'react95';
import logoIMG from 'react95/dist/images/logo.png';
import site01 from '../img/koike-masaya-site.png';
import app01 from '../img/fly-mark.png';
import iconIMG from '../img/icon.png';
import Draggable from 'react-draggable';
import { createGlobalStyle } from 'styled-components';
import { click } from '@testing-library/user-event/dist/click';

function Top() {
  const [open, setOpen] = useState(false);

  const headerHeight = 62;
  const footerHeight = 95;

  const modalHeight = 302;
  const modalWidth = 360;
  
  const WindowStyles = createGlobalStyle`
    .window-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .close-icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-left: -1px;
      margin-top: -1px;
      transform: rotateZ(45deg);
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        background: ${({ theme }) => theme.materialText};
      }
      &:before {
        height: 100%;
        width: 3px;
        left: 50%;
        transform: translateX(-50%);
      }
      &:after {
        height: 3px;
        width: 100%;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .window {
      width: min(${modalWidth}px, 100%);
      height: ${modalHeight}px;
    }
    .window.-koike,
    .window.-flymark {
      position: absolute;
      top: 62px;
      right: 0;
      z-index: 700;
    }
    .window.-flymark {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 701;
    }
  `;

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div
      style={{
        height: 'calc(100vh - 62px)',
        margin: '62px 0 0',
      }}>
      <WindowStyles />
      <AppBar style={{zIndex: 9999,}}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: 'bold' }}>
              <img
                src={logoIMG}
                alt="react95 logo"
                style={{ height: '20px', marginRight: 4 }}
              />
              Start
            </Button>
            {open && (
              <MenuList
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '100%',
                }}
                onClick={() => setOpen(false)}>
                <MenuListItem as="a" href="/profile/">
                  <span
                    role="img"
                    aria-label="👩‍💻"
                    style={{
                      display: 'inline-block',
                      marginRight: '10px',
                    }}>
                    👩‍💻
                  </span>
                  Profile
                </MenuListItem>
                <MenuListItem as="a" href="/gallery/" disabled>
                  <span role="img" aria-label="🚀">
                    🚀
                  </span>
                  Gallery
                </MenuListItem>
                <Separator />
                <MenuListItem as="a" href="/">
                  <span role="img" aria-label="🔙">
                    🔙
                  </span>
                  Top
                </MenuListItem>
              </MenuList>
            )}
          </div>
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
            <Avatar size={50} src={iconIMG} />
            <div>kedamammoth</div>
          </a>
        </Toolbar>
      </AppBar>
      <Draggable bounds={{ 
        top: 0,
        left: modalWidth - window.innerWidth,
        right: 0,
        bottom: windowHeight - (headerHeight + footerHeight + modalHeight),
      }}>
        <Window className="window -koike">
          <WindowHeader className="window-title">
            <span>kedamammoth.exe</span>
            <Button>
              <span className="close-icon" />
            </Button>
          </WindowHeader>
          <WindowContent style={{ padding: '.5rem' }}>
          <Anchor href="https://masaya-koike.com/" target="_blank">
          https://masaya-koike.com/
          </Anchor>
            <ScrollView>
              <img
                style={{ width: '100%', height: '1uto', display: 'block' }}
                src={site01}
                alt='小池将也の公式Webサイト'
              />
            </ScrollView>
          </WindowContent>
        </Window>
      </Draggable>
      <Draggable bounds={{ 
        top: ((modalHeight - windowHeight) / 2) + headerHeight,
        left: (modalWidth - window.innerWidth) / 2,
        right: -(modalWidth - window.innerWidth) / 2,
        bottom: (-(modalHeight - windowHeight) / 2) - footerHeight,
      }}>
        <Window className="window -flymark">
          <WindowHeader className="window-title">
            <span>kedamammoth.exe</span>
            <Button>
              <span className="close-icon" />
            </Button>
          </WindowHeader>
          <WindowContent style={{ padding: '.5rem' }}>
          <Anchor href="https://fly-mark.web.app/" target="_blank">
          https://fly-mark.web.app/
          </Anchor>
            <ScrollView>
              <img
                style={{ width: '100%', height: '1uto', display: 'block' }}
                src={app01}
                alt='Fly Mark:フライフィッシングのフライレシピ投稿サイト'
              />
            </ScrollView>
          </WindowContent>
        </Window>
      </Draggable>
    </div>
  );
}

export default Top;