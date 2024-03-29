import React, { useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { FirebaseContext } from "../../firebase/Auth";
import usuarioPerfil from '../../img/usuario-de-perfil.svg';
import usuario from '../../img/usuario.svg';
import estadistica from '../../img/estadistica.svg';
import calendario from '../../img/calendario.svg';
import expediente from '../../img/expediente.svg';
import historial from '../../img/historial.svg';
import tablero from '../../img/tablero.svg';
import receta from '../../img/receta.svg';



const Sidebar = () => {

    const {currentUser} = useContext(FirebaseContext);

    let imagenPerfil = usuarioPerfil;

    if(currentUser.photoURL === null){
        imagenPerfil = usuarioPerfil;
      }else{
        imagenPerfil= currentUser.photoURL;
      }
    
    return ( 

        <aside className="hidden lg:flex lg:w-1/5 lg:fixed lg:h-screen lg:bg-gray-800 lg:float-left">
            <div className="w-full">
                
                <div className="w-full pt-2 pb-2 flex justify-center items-center bg-gray-900">
                    
                    <div className="w-2/12 flex justify-center items-center">
                        <img src={imagenPerfil} width="25" alt="Imagen de perfil"/>
                    </div>
                    <div className="w-9/12 flex pl-2">
                        <p className="uppercase text-white text-2xl tracking-wide text-center font-bold font-source">Consultorio</p>
                    </div>
                    
                </div>
                
                <nav className="pl-4">
                    
                    <NavLink className="p-1 text-white block hover:bg-tercerColor hover:text-gray-900 font-source font-bold text-lg" activeClassName="text-tercerColor"  to="/dashboard">
                    
                        <div className="flex content-center">
                            <div className="flex content-center">
                                <img src={tablero} width="20" height="20" alt="tablero"/>
                            </div>

                            <div className="pl-6">
                            <span className="">Dashboard</span>
                            </div>
                        </div>
                        
                    </NavLink> 


                    <NavLink className="p-1 text-white block hover:bg-tercerColor hover:text-gray-900 font-source font-bold text-lg mt-8" activeClassName="text-tercerColor"  to="/estadisticas">
                       
                        <div className="flex content-center">
                            <div className="flex content-center">
                                <img src={estadistica} width="20" height="20" alt="estadisticas"/>
                            </div>

                            <div className="pl-6">
                            <span className="">Estadísticas</span>
                            </div>
                        </div>
                        
                    </NavLink>

                    <NavLink className="p-1 text-white block hover:bg-tercerColor hover:text-gray-900 font-source font-bold text-lg mt-8" activeClassName="text-tercerColor"  to="/recetas">
                        
                        <div className="flex content-center">
                            <div className="flex content-center">
                                <img src={receta} width="20" height="20" alt="receta"/>
                            </div>

                            <div className="pl-6">
                            <span className="">Recetas</span>
                            </div>
                        </div>
                        
                    </NavLink>

                    <NavLink className="p-1 text-white block hover:bg-tercerColor hover:text-gray-900 font-source font-bold text-lg mt-8" activeClassName="text-tercerColor"  to="/perfil">

                        <div className="flex content-center">
                            <div className="flex content-center">
                                <img src={usuario} width="20" height="20" alt="usuario"/>
                            </div>

                            <div className="pl-6">
                                <span className="">Perfil</span>
                            </div>
                        </div>
                        
                    </NavLink>

                    <NavLink className="p-1 text-white block hover:bg-tercerColor hover:text-gray-900 font-source font-bold text-lg mt-8" activeClassName="text-tercerColor"  to="/citas">
                        
                        <div className="flex content-center">
                            <div className="flex content-center">
                                <img src={calendario} width="20" height="20" alt="calendario"/>
                            </div>

                            <div className="pl-6">
                                <span className="">Citas</span>
                            </div>
                        </div>
                        
                    </NavLink>
                    
                    <NavLink className="p-1 text-white block hover:bg-tercerColor hover:text-gray-900 font-source font-bold text-lg mt-8" activeClassName="text-tercerColor"  to="/expediente">
                        
                        <div className="flex content-center">
                            <div className="flex content-center">
                                <img src={expediente} width="20" height="20" alt="expediente"/>
                            </div>

                            <div className="pl-6">
                                <span className="">Expediente</span>
                            </div>
                        </div>

                    </NavLink>

                    <NavLink className="p-1 text-white block hover:bg-tercerColor hover:text-gray-900 font-source font-bold text-lg mt-8" activeClassName="text-tercerColor"  to="/historial">
                        
                        <div className="flex content-center">
                            <div className="flex content-center">
                                <img src={historial} width="20" height="20" alt="historial"/>
                            </div>

                            <div className="pl-6">
                                <span className="">Historial</span>
                            </div>
                        </div>
                        
                    </NavLink>
                </nav>
            </div>
        </aside>

        
     );
}
 
//Se quito en exact to ="true"
export default Sidebar;