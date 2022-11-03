import {Home} from '../home/Home.js';
import{Historia} from '../Historia/Historia.js';

import{Music} from '../Music/Music.js';
import {Menu} from '../Menu/Menu.js';

import { Routes, Route } from "react-router-dom";

export function Rutas() {

    return (
        <div className="App">
          <Menu/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="historia" element={<Historia />} />
            
            <Route path="music" element={<Music />} />

          </Routes>
        </div>
      );

}