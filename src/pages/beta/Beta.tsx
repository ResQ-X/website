import { BetaSignupView } from "./components/BetaSignupView";
import { useFacebookPixel } from '../..//hooks/useFacebookPixel';


function BetaSignup() {
  useFacebookPixel('Beta');
  return (
    <main>
      <BetaSignupView />
    </main>
  );
}

export default BetaSignup;
