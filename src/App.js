import React, {Suspense, lazy} from 'react';
import FullLoading from "./components/FullLoading"
const Conversations = lazy(() => import('./features/conversations/Conversations'))

/** Here I used Suspense and fallback component which is a loading overlay
 *
 * @returns {*}
 * @constructor
 */
const App = () => {
  return (
      <>
          <Suspense fallback={<FullLoading/>}>
              <Conversations/>
          </Suspense>
      </>
      );
}

export default App;
