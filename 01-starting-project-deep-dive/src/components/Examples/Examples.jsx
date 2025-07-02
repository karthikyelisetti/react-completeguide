
import { EXAMPLES } from "../../data.js"; // Importing an object containing example data from a separate data file.
import Section from "../Section.jsx";
import TabButton from "../TabButton/TabButton.jsx"; // Importing the TabButton component from the components directory.
import { useState } from "react"; // Importing useState hook from React to manage state in functional components.
import Tabs from "../TabButton/Tabs.jsx";

function Examples() {

    // Using useState to manage the state of the selected tab. The initial state is set to "Component".
    const [selectedContent, setSelectedContent] = useState(); // Initial state is a string prompting the user to select a topic.

    function handleSelect(selectedTab) {
        // This function will handle the selection of a tab button.
        setSelectedContent(selectedTab); // Update the state with the selected tab.
        // console.log(selectedContent);
    }

    return (
        <>
            <Section id="examples" title="Examples">
                <Tabs
                    // ButtonContainer="menu"
                    buttons={
                        <>
                            <TabButton
                            isSelected={selectedContent === "components"}
                            onSelect={() => {
                                handleSelect("components");
                            }}
                            >
                            Component
                            </TabButton>
                            <TabButton
                            isSelected={selectedContent === "jsx"}
                            onSelect={() => {
                                handleSelect("jsx");
                            }}
                            >
                            JSX
                            </TabButton>
                            <TabButton
                            isSelected={selectedContent === "props"}
                            onSelect={() => {
                                handleSelect("props");
                            }}
                            >
                            Props
                            </TabButton>
                            <TabButton
                            isSelected={selectedContent === "state"}
                            onSelect={() => {
                                handleSelect("state");
                            }}
                            >
                            State
                            </TabButton>
                        </>
                }/>
                {!selectedContent ? (
                    <p>Please select a topic.</p>
                ) : (
                    <div id="tab-content">
                    <h3>{EXAMPLES[selectedContent].title}</h3>
                    <p>{EXAMPLES[selectedContent].description}</p>
                    <code>{EXAMPLES[selectedContent].code}</code>
                    </div>
                )}
            </Section>
        </>
    )
}

export default Examples; // Exporting the Examples component to be used in other parts of the application.