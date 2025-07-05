import TabButton from "./Header/TabButton";
import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from "./Section";
import Tabs from "./Tabs";


export default function Examples() {
    const [selectedTopic, setselectedTopic] = useState();

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
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === 'components'}
                            onClick={() => handleselect('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'jsx'}
                            onClick={() => handleselect('jsx')}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'props'}
                            onClick={() => handleselect('props')}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'state'}
                            onClick={() => handleselect('state')}
                        >
                            State
                        </TabButton>
                    </>}

            >
                {tabContent}
            </Tabs>
        </Section>
    );
}