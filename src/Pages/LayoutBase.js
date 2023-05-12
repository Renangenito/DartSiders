import { Outlet } from "react-router-dom";
import BarraPesquisa from "../Components/BarraPesquisa";
import SideBar from "../Components/SideBar";
import { useState } from "react";

function LayoutBase() {
  const [show, setShow] = useState(true);
  const [destacado, setDestacado] = useState(true);

  const showMenuHumburgher = (e) => {
    setShow(!show);
    setDestacado(!destacado);
  };

  return (
    <>
      <SideBar destacado={destacado} />
      <BarraPesquisa handleClickHumburgher={showMenuHumburgher} show={show} />
      <Outlet />
    </>
  );
}
export default LayoutBase;
