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
                      Is there a Figma file available?
                  </Accordion.Title>
                  <Accordion.Content>
                      <p className="mb-2 text-white">
                          Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                      </p>
                  </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                  <Accordion.Title>
                      What are the differences between Flowbite and Tailwind UI?
                  </Accordion.Title>
                  <Accordion.Content>
                      <p className="mb-2 text-white">
                          Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                      </p>
                      <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                          <li>
                              <a
                                  href="https://flowbite.com/pro/"
                                  className="text-blue-600 hover:underline dark:text-blue-500"
                              >
                                  Flowbite Pro
                              </a>
                          </li>
                          <li>
                              <a
                                  href="https://tailwindui.com/"
                                  rel="nofollow"
                                  className="text-blue-600 hover:underline dark:text-blue-500"
                              >
                                  Tailwind UI
                              </a>
                          </li>
                      </ul>
                  </Accordion.Content>
              </Accordion.Panel>
          </Accordion>
    </div>
  )
}

export default Blog