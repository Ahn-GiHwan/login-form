import React, { useState } from "react";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickMenu = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div>
      <Button color="primary" onClick={clickMenu}>
        Open
      </Button>
      <Offcanvas isOpen={isOpen} toggle={clickMenu}>
        <OffcanvasHeader toggle={clickMenu}>Offcanvas</OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default Header;
