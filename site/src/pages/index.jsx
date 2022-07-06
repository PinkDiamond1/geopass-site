import * as React from 'react';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
      <div className="flex items-center h-64 bg-gray-500 justify-center">
        <div className="text-4xl">
          Hero block
        </div>
      </div>
      <div className="flex no-wrap h-16 bg-indigo-500 items-center">
        <div className="grow m-4 text-white justify-left">
          <div className="inline text-4xl">GeoPass</div>
          <div className="text-xl text-gray-300 inline mx-4">
            Preserving location privacy for individuals and helping Smart Cities thrive
          </div>
        </div>
        <div className="flex-none justify-right">
          <div className="p-1 m-2 bg-red-600">
            Project Updates!
          </div>
        </div>
      </div>

      <div className="flex no-wrap">
        <div className="flex-none p-4 text-xl font-bold">Problem Description</div>
        <div className="grow">
          <p>
            Location information drives much of the context for the applications we use on our mobile devices. However, for the features of these apps to work we have to provide our GPS location. When we share this information we are trading our privacy for convenience. This trade-off is not always equitable or worth the cost. Sometimes we have to provide full GPS tracking for applications to function at all, in this case the information about our daily life is revealed in full detail.
          </p>
          <p>
            We believe there is an opportunity to create a general purpose open source library to allow individuals to prove their presence at a location. It will use Zero Knowledge techniques to protect the actual location. And it will use a combination of collaborative algorithms run on/by several parties to prove you were in a particular area without sharing your exact coordinates in your location history.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">

        <div className="p-4 w-auto md:w-64 lg:w-80">
          <div className="p-1 font-bold bg-gray-300 underline decoration-2 underline-offset-4">Components &amp; Materials</div>
          <div className="m-2 text-gray-800">
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </div>
        </div>

        <div className="p-4 w-auto md:w-64 lg:w-80">
          <div className="p-1 font-bold bg-gray-300 underline decoration-2 underline-offset-4">Documentation</div>
          <div className="m-2 text-gray-800">
            Documentation can be found here:
          </div>
        </div>

        <div className="p-4 w-auto md:w-64 lg:w-80">
          <div className="p-1 font-bold bg-gray-300 underline decoration-2 underline-offset-4">Schematics, Code, &amp; etc...</div>
          <div className="m-2 text-gray-800">
          <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul> 
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-400 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-md mx-auto">
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
