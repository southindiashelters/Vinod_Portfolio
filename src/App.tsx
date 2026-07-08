/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CinematicIntro } from './components/scenes/CinematicIntro';
import { Scene2 } from './components/scenes/Scene2';
import { Scene3 } from './components/scenes/Scene3';
import { Scene4 } from './components/scenes/Scene4';
import { Scene5 } from './components/scenes/Scene5';
import { Scene6 } from './components/scenes/Scene6';
import { Scene7 } from './components/scenes/Scene7';
import { Scene8 } from './components/scenes/Scene8';
import { Scene9 } from './components/scenes/Scene9';
import { Scene11 } from './components/scenes/Scene11';
import { Scene12 } from './components/scenes/Scene12';
import { FinalScene } from './components/scenes/FinalScene';

export default function App() {
  return (
    <main className="bg-black text-white selection:bg-blue-500/30">
      <CinematicIntro />
      <Scene2 />
      <Scene3 />
      <Scene4 />
      <Scene5 />
      <Scene6 />
      <Scene7 />
      <Scene8 />
      <Scene9 />
      <Scene11 />
      <Scene12 />
      <FinalScene />
    </main>
  );
}
