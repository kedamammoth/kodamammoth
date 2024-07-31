import React, { useState } from 'react';
import {
  Avatar,
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
  Window,
  WindowHeader,
  WindowContent,
  ScrollView,
} from 'react95';
import logoIMG from 'react95/dist/images/logo.png';
import iconIMG from '../img/icon.png';
import Draggable from 'react-draggable';
import { createGlobalStyle } from 'styled-components';

function Top() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <div
      style={{
        height: 'calc(100vh - 62px)',
        margin: '62px 0 0',
      }}>
      <WindowStyles />
      <AppBar>
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
                <MenuListItem as="a" href="/profile/" disabled>
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
                <MenuListItem as="a" href="/gallery/">
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
      {close === false && (
        <Draggable bounds="parent">
          <Window className="window -profile">
            <WindowHeader className="window-title">
              <span>kedamammoth.exe</span>
              <Button onClick={() => setClose(true)}>
                <span className="close-icon" />
              </Button>
            </WindowHeader>
            <WindowContent style={{ fontSize: '13px', fontWeight: 'bold' }}>
            <ScrollView style={{height: '360px' }}>
              Kodama Sakura ｜ 児玉 さくら
              <br />
              <br />
              このサイトはReact95を使って作成してみました。
              <br />
              <br />
              まだまだボロボロですが、少しずつ改善していくのでスタイルが崩れてるところや、不具合があればTwitterなりで教えていただけると嬉しいです😅🚀
              <br />
              <br />
              現職ではAngularを使ったWebアプリケーションの開発をしてますが、Reactもしたいし、WebGLも触りたいし、UIデザインもっと勉強したいし、作ってみたいサービスもあるし、とりあえずやりたいことが多すぎて絞ることからはじめたいと思います😇
              <br />
              <br />
              このサイトは、React95を使ってみたくてお試しサイトですが、いつか「児玉さくら伝記サイト」を作りたいです🚀🚀🚀
              <br />
              <br />
              </ScrollView>
            </WindowContent>
          </Window>
        </Draggable>
      )}
    </div>
  );
}

export default Top;

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
    width: min(500px, 100%);
    height: 440px;
  }
  .window.-profile {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;
