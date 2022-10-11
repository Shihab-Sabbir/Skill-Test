import { Accordion } from 'flowbite-react'
import React from 'react'

function Blog() {
    return (
        <div className='p-5'>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        Why use React Router?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-white text-justify">
                            React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
                            <br />
                            By preventing a page refresh, and using Router or Link. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is Context API and How it works?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-white text-justify">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent.
                        </p>
                        <p className="mb-2 text-white text-justify">
                            React.createContext() is the first this to create . It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is React useRef and How to Use It?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-white text-justify">
                            useRef is a hook introduced with other hooks in React version 16.8 and is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component.
                        </p>
                        <p className="mb-2 text-white text-justify">
                            Essentially, useRef is a hook function that gets assigned to a variable, inputRef, and then attached to an attribute called ref inside the HTML element you want to reference.
                            Common cases this hook is used to manipulate DOM.In plain JavaScript you had to use getElementById or querySelector to select a DOM node, in React useRef serves the DOM manipulation features.
                        </p>
                        <p className="mb-2 text-white font-bold">Few uses of useRef Hook</p>
                        <ul className="list-disc pl-5 text-white">
                            <li>
                                Managing focus, text selection, or media playback.

                            </li>
                            <li>
                                Integrating with third-party DOM libraries.

                            </li>
                            <li>
                                Triggering imperative animations.
                            </li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    )
}

export default Blog