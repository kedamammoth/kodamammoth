import { useState } from "react";
import Draggable from "react-draggable";
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
} from "react95";
import logoIMG from "react95/dist/images/logo.png";
import iconIMG from "../img/icon.png";
import { createGlobalStyle } from "styled-components";

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

  return (
    <div
      style={{
        height: "calc(100vh - 62px)",
        margin: "62px 0 0",
      }}
    >
      <WindowStyles />
      <AppBar style={{ zIndex: 1 }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Button
              onClick={() => setOpen(!open)}
              active={open}
              style={{ fontWeight: "bold" }}
            >
              <img
                src={logoIMG}
                alt="react95 logo"
                style={{ height: "20px", marginRight: 4 }}
              />
              Start
            </Button>
            {open && (
              <MenuList
                style={{
                  position: "absolute",
                  left: "0",
                  top: "100%",
                }}
                onClick={() => setOpen(false)}
              >
                <MenuListItem>
                  <span
                    role="img"
                    aria-label="👩‍💻"
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                    }}
                  >
                    👩‍💻
                  </span>
                  Resume
                </MenuListItem>
                <Separator />
                <MenuListItem>
                  <span role="img" aria-label="🚀">
                    🚀
                  </span>
                  Gallery
                </MenuListItem>
              </MenuList>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Avatar size={50} src={iconIMG} />
            <div>kedamammoth</div>
          </div>
        </Toolbar>
      </AppBar>
      <Draggable bounds="parent">
        <Window className="window -profile">
          <WindowHeader className="window-title">
            <span>kedamammoth.exe</span>
            <Button>
              <span className="close-icon" />
            </Button>
          </WindowHeader>
        </Window>
      </Draggable>
      <Draggable bounds="parent">
        <Window className="window">
          <WindowHeader active={false} className="window-title">
            <span>not-active.exe</span>
            <Button>
              <span className="close-icon" />
            </Button>
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="sm">
              File
            </Button>
            <Button variant="menu" size="sm">
              Edit
            </Button>
            <Button variant="menu" size="sm" disabled>
              Save
            </Button>
          </Toolbar>
          <WindowContent>
            <p>
              When you set &quot;resizable&quot; prop, there will be drag handle
              in the bottom right corner (but resizing itself must be handled by
              you tho!)
            </p>
          </WindowContent>
          <Frame variant="well" className="footer">
            Put some useful information here
          </Frame>
        </Window>
      </Draggable>
    </div>
  );
}

export default Top;
