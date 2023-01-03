import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';

const Blogs = () => {
  const {theme} = useContext(AuthContext)
    return (
        <div className={`max-w-[90%] mx-auto  ${theme||'text-primary'}`}>
            <div className="collapse my-3">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title  peer-checked:bg-secondary peer-checked:text-secondary-content">
           1. What are the different ways to manage a state in a React application?
            </div>
            <div className="collapse-content bg-primary  peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                <p>
                There are four main types of state you need to properly manage in a React apps:
                <ul>
                    <li>URL state</li>
                    <li>Server state</li>
                    <li>Global state</li>
                    <li>Local state</li>
                </ul>
                URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.
                <br />
                We call useSWR and specify the endpoint from which to request data, which is passed to our fetcher function and useSWR gives us both data and error state.
                <br />
                To manage Global, however, we opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.
                <br />
                Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

                </p>
            </div>
            </div> 
            {/* items- */}
            <div className="collapse">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title   peer-checked:bg-secondary peer-checked:text-secondary-content">
            How does prototypical inheritance work?
            </div>
            <div className="collapse-content bg-primary  peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                <p>The prototype chain is used for multiple inheritances at different hierarchy levels.
We can make a prototypes point to other prototypes using the following method.</p>
            </div>
            </div> 
            {/* items- */}
            <div className="collapse">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title  peer-checked:bg-secondary peer-checked:text-secondary-content">
            What is a unit test? Why should we write unit tests?
            </div>
            <div className="collapse-content bg-primary  peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                <p>
                    <ul>
                        <li>
                        Unit Testing is a type of software testing where individual units or components of a software are tested. 
                        </li>
                        <li>
                        The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers
                        </li>
                    </ul>
                </p>
            </div>
            </div> 
            {/* items- */}
            <div className="collapse">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title  peer-checked:bg-secondary peer-checked:text-secondary-content">
            React vs. Angular vs. Vue?
            </div>
            <div className="collapse-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
      
        <th>React</th>
        <th>Angular</th>
        <th>Vue</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>React, developed by Facebook, was <br /> initially released in 2013</td>
            <td>Facebook uses React extensively in <br />their products (Facebook, Instagram, and WhatsApp)</td>
            <td> Similar to Vue, the React developers also<br /> announce their newest version</td>
        </tr>
     
      <tr>
       
        <td>Angular, developed by Google, was<br /> first released in 2010,</td>
        <td>It is a TypeScript-based JavaScript framework</td>
        <td> A substantial shift occurred in 2016 on<br /> the release of Angular 2</td>
      </tr>
 
      <tr>
      
        <td>Vue was developed by ex-Google employee<br /> Evan You in 2014</td>
        <td>Contributors for Vue are supported by Patreon.</td>
        <td>Vue, also known as Vue.js, is the <br />youngest member of the group. </td>
      </tr>

   
    </tbody>
  </table>
</div>
            </div>
            </div> 
            {/* items- */}
        </div>
    );
};

export default Blogs;