import React, { useState } from 'react';
import {
  Avatar,
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
} from 'react95';
import logoIMG from 'react95/dist/images/logo.png';
import iconIMG from '../img/icon.png';

function Top() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        height: 'calc(100vh - 62px)',
        margin: '62px 0 0',
      }}>
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
    </div>
  );
}

export default Top;
