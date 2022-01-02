import { CloseOutlined, MenuOutlined } from "@ant-design/icons/lib/icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";
import { MenuIcon } from "../css/style";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickMenu = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div>
      <MenuIcon>
        {isOpen ? <CloseOutlined /> : <MenuOutlined onClick={clickMenu} />}
      </MenuIcon>
      <Offcanvas isOpen={isOpen} toggle={clickMenu}>
        <OffcanvasHeader toggle={clickMenu}>메뉴</OffcanvasHeader>
        <OffcanvasBody>
          <ListGroup flush>
            <ListGroupItem>
              <NavLink to="/login" onClick={clickMenu}>
                로그인
              </NavLink>
            </ListGroupItem>
            <ListGroupItem>
              <NavLink to="/signup" onClick={clickMenu}>
                회원가입
              </NavLink>
            </ListGroupItem>
          </ListGroup>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default Header;
