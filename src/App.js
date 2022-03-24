// components: 
import { Content } from 'carbon-components-react';
import MainHeader from './components/Header';
import Tower from './components/Tower/Tower';
import BreadCrumb from './components/BreadCrumb';

// styles:
import './app.scss';
import TowerCard from './components/TowerCard/TowerCard';

function App() {
  return (
    <div>
      <MainHeader />
      <Content>
        <TowerCard>
          <Tower />
        </TowerCard>
        <TowerCard>
          <Tower />
        </TowerCard>
        <TowerCard>
          <Tower />
        </TowerCard>
        <TowerCard>
          <Tower />
        </TowerCard>
      </Content>
    </div>
  );
}

export default App;
