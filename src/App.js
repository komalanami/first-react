import { CORE_CONCEPTS } from './data';
import  Header  from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/Header/TabButton';
import { useState} from 'react';
import { EXAMPLES } from './data';

function App() {
  const [selectedTopic , setselectedTopic] = useState();

  function handleselect(selectedButton) {
    // selectedButton => 'components' ,'jsx' , 'props' , 'state'
    setselectedTopic(selectedButton);
  }

  let tabContent = <p>Please Select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic.title]}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>
              <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleselect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleselect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleselect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleselect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
