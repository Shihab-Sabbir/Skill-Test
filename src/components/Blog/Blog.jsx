import { Accordion } from 'flowbite-react'
import React from 'react'

function Blog() {
    return (
        <div className='p-5'>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is Flowbite?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-white">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is Context API and How it works?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-white">
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent.
                        </p>
                        <p className="mb-2 text-white">
                            React.createContext() is the first this to create . It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is React useRef and How to Use It?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-white">
                            useRef is a hook introduced with other hooks in React version 16.8 and is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component.
                        </p>
                        <p className="mb-2 text-white">
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