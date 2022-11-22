import {Home} from '../home/Home.js';
import{Historia} from '../Historia/Historia.js';

import{Music} from '../Music/Music.js';
import {Menu} from '../Menu/Menu.js';
import {Integrantes} from '../Integrantes/Integrantes.js';
import {Footer} from '../Footer/Footer.js'
import { Routes, Route } from "react-router-dom";

export function Rutas() {

    return (
        <div classNameName="App">
          <Menu/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="historia" element={<Historia />} />
            <Route path="integrantes" element={<Integrantes />} />
            <Route path="music" element={<Music />} />
            <Route path="footer" element={<Footer />} />

          </Routes>
        </div>
      );

}