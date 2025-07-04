import { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Toolbar,
  Avatar,
  Hourglass,
} from 'react95';
import logoIMG from 'react95/dist/images/logo.png';
import iconIMG from '../img/icon.png';
import { createGlobalStyle } from 'styled-components';

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
    width: 440px;
    min-height: 200px;
  }
  .window.-profile {
    position: absolute;
    top: 62px;
    right: 0;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;

function Top() {
  const [open, setOpen] = useState(false);
  const fireConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <div
      style={{
        height: 'calc(100vh - 62px)',
        margin: '62px 0 0',
      }}>
      <WindowStyles />
      <AppBar style={{ zIndex: 1 }}>
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
                <MenuListItem as="a" href="/gallery/">
                  <span role="img" aria-label="🚀">
                    🚀
                  </span>
                  Gallery
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
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onClick={fireConfetti}
          style={{ fontSize: '24px', fontWeight: 'bold' }}
          size="lg"
          primary>
          Thank you for finding me!!
        </Button>
      </div>
      <Hourglass size={32} style={{ margin: 20 }} />
    </div>
  );
}

export default Top;
