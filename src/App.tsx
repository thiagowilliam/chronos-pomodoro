import './styles/global.css';
import './styles/theme.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';
export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button type='button'>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}
