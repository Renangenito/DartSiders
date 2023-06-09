import { Outlet } from "react-router-dom";
import BarraPesquisa from "../Components/BarraPesquisa";
import SideBar from "../Components/SideBar";
import { useState } from "react";
import { CadastroUsuarioProvider } from "../Contexto/UsuarioCadastro";

function LayoutBase() {
  const [show, setShow] = useState(true);
  const [destacado, setDestacado] = useState(true);

  const showMenuHumburgher = (e) => {
    setShow(!show);
    setDestacado(!destacado);
  };

  return (
    <>
      <CadastroUsuarioProvider>
        <SideBar destacado={destacado} />
        <BarraPesquisa handleClickHumburgher={showMenuHumburgher} show={show} />
        <Outlet />
      </CadastroUsuarioProvider>
    </>
  );
}
export default LayoutBase;
