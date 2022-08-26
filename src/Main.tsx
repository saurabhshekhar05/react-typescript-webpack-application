import { Routes, Route } from 'react-router-dom';
import { Execution } from './Execution';
import { Home } from './Home';
import { MultiSelectDropdown } from './MultiSelectDropdown';
import { Scenarios } from './Scenarios';
import { ScenarioVariants } from './ScenarioVariants';

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scenarios" element={<Scenarios />} />
      <Route path="/scenariovariants" element={<ScenarioVariants />} />
      <Route path="/multi-select-dropdown" element={<MultiSelectDropdown />} />
      <Route path="/execution" element={<Execution />} />
    </Routes>
  );
};
