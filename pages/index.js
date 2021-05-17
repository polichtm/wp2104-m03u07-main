import config from "../config";
import Head from "next/head";

const webpack = require('webpack');

Home.getInitialProps = async function () {
  const { servername, username, password, database, table } = config;

  console.log(`Querying database ${database}`);
  const inventory = await db.one('SELECT * FROM inventory')
  return { PostgreSQLData: inventory };
};

export default function Home({ PostgreSQLData }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Next.js with Azure PostgreSQL inventory data</title>
        <meta name="title" content="Next.js with Azure PostgreSQL inventory data" />
        <meta
          name="description"
          content="Next.js with Azure PostgreSQL inventory data"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Next.js with Azure PostgreSQL inventory data" />
        <meta
          property="og:description"
          content="Next.js with Azure PostgreSQL inventory data"
        />
      </Head>
      <div className="w-full text-center bg-blue-800 flex flex-wrap items-center">
        <div className="text-3xl w-1/2 text-white mx-2 md:mx-auto py-10">
          Next.js - PostreSQL inventory data
        </div>
      </div>
      <div className="bg-gray-200 py-10">
        {PostgreSQLData.map(({id, name, quantity, date}) => (
          <div
            className="flex bg-white shadow-lg rounded-lg mx-2 md:mx-auto mb-10 max-w-2xl"
            key={id}
          >
            <div className="flex items-start px-4 py-6">
              <div className="">
                <div className="inline items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900 -mt-1">
                    {id}
                  </h2>
                  <small className="text-sm text-gray-700 object-right">
                    InventoryItemId: {id}
                  </small>
                  <small className="ml-3 text-gray-700 text-sm">
                    Name: {name}
                  </small>
                  <small className="ml-3 text-gray-700 text-sm">
                    Quantity: {quantity}
                  </small>
                  <small className="ml-3 text-gray-700 text-sm">
                    Date: {date}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}