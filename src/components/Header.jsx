import { useState } from 'react'
import Stage from './Stage';

function Header() {
    const [isactive, SetIsActive] = useState(false);
  return (
    <header>
      <Stage title="Organization details" number={1} isactive={true} SetIsActive={SetIsActive} />
      <Stage title="Solution profile" number={2} isactive={false} SetIsActive={SetIsActive} />
      <Stage title="Review details" number={3} isactive={false} SetIsActive={SetIsActive} />
      <Stage title="ROI results" number={4} isactive={false} SetIsActive={SetIsActive} />
    </header>
  );
}

export default Header