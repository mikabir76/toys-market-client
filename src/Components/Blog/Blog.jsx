import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { dynamicTitle } from '../../GenneralFunction/GenneralFunction';
const Blog = () => {
    dynamicTitle('Blog - Tukutoys')
    return (
        <div className='bg-[#E8F7FF]'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center p-12'>
                <div className='space-y-4'>
                    <h1 className='text-5xl font-bold'>FAQ</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis expedita, eaque mollitia voluptate fuga veritatis qui consequuntur architecto. Deleniti voluptatum alias expedita consequuntur incidunt non perferendis mollitia sunt quia?</p>
                    <button className='btn-style'>Learn more</button>
                </div>
                <div>
                    <img className='w-3/4 card' src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5215.jpg?size=626&ext=jpg&ga=GA1.1.1654759242.1680368383&semt=sph" alt="" />
                </div>
            </div>
            <div className='px-12 pb-12'>


                <h2 className='text-3xl font-semibold'>1. What is an access token and Refresh token? How do they work and where should <br />  we store them on the client side?</h2>
                <p className='text-xl text-justify'>An access token and a refresh token are commonly used in authentication and authorization protocols to grant access to protected resources. Here's an explanation of each term:

                    Access Token: An access token is a credential that is issued by an authentication server to a client application after the client successfully authenticates with the server. It serves as a proof of authentication and is used to access protected resources on behalf of the authenticated user or client. The access token typically has an expiration time to ensure security and is included in each request made to the server to access protected resources. The server validates the access token to determine if the client has the necessary permissions to access the requested resource.

                    Refresh Token: A refresh token is a long-lived credential that is also issued by the authentication server alongside the access token. Its purpose is to obtain a new access token when the current one expires without requiring the user to re-authenticate. The client securely stores the refresh token and presents it to the authentication server when the access token expires. In response, the server validates the refresh token and issues a new access token, extending the user's session without requiring them to enter their credentials again.

                    The use of access tokens and refresh tokens enhances security by minimizing the exposure of the user's credentials, reducing the impact of token theft or unauthorized access. It also provides a mechanism for managing access and revoking tokens if needed.</p>
                <h2 className='text-3xl font-semibold'>2. Compare SQL and NoSQL databases?</h2>
                <p className='text-justify text-xl'>SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database management systems with distinct characteristics. Here's a comparison between the two: <br />

                    <span className='font-bold'> SQL Databases:</span>
                    <br />
                    Structure: SQL databases are based on a structured schema that defines the tables, columns, and relationships between them. They follow the ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity.
                    Data Model: SQL databases use a relational data model, where data is organized into tables with predefined schemas. They enforce strict data consistency and support complex queries through SQL.
                    Scalability: SQL databases are vertically scalable, meaning they are designed to work well on a single server. Scaling them horizontally across multiple servers can be challenging.
                    Flexibility: SQL databases offer flexibility in querying and data manipulation using SQL. They support joins and transactions, enabling complex data operations.
                    Schema Changes: SQL databases have a rigid schema, and any changes to the schema require altering the table structure, which can be time-consuming for large databases.
                    Examples: MySQL, PostgreSQL, Oracle, Microsoft SQL Server. <br />
                    <span className='font-bold'> NoSQL Databases:</span>
                    <br />

                    Structure: NoSQL databases are schema-less or have a flexible schema. They store data in a variety of formats like key-value pairs, documents, column-family, or graph models.
                    Data Model: NoSQL databases support various data models, allowing more flexibility. They are often categorized as key-value stores, document databases, columnar databases, or graph databases.
                    Scalability: NoSQL databases are designed to scale horizontally, allowing them to handle large amounts of data across multiple servers. They are built for distributed systems and can scale with ease.
                    Flexibility: NoSQL databases provide more flexibility in terms of handling unstructured or semi-structured data. They allow for rapid development and can adapt to evolving data requirements.
                    Schema Changes: NoSQL databases can handle schema changes without requiring downtime or altering the entire database structure. Each document or record can have its own structure.
                    Examples: MongoDB, Cassandra, Redis, Amazon DynamoDB, Apache CouchDB.
                    The choice between SQL and NoSQL databases depends on specific project requirements, data structure, scalability needs, and the complexity of queries. SQL databases are often preferred for structured data and complex joins, while NoSQL databases excel in handling large volumes of unstructured or rapidly changing data and provide high scalability.</p>
                <h2 className='text-3xl font-semibold'>3. What is exprss js? and Nest JS?</h2>
                <p className='text-xl text-justify'><span className='font-bold'>Express JS</span> <br />
                    Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

                    Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks. To learn more about Express and what it can do, visit the official website.
                    <br />
                    <span className='font-bold'>Nest JS</span> <br />
                    Nest.js is a server-side Node.js framework that’s great for building highly testable and maintainable backend applications. You can create countless types of applications with Node.js; you’re only limited by your applications’ features.
                </p>
                <h2 className='text-3xl font-semibold'>4. What is MondoDB aggregat and how does it work?</h2>

                <p className="text-xl text-justify">
                    Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

                    One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on.

                    While there are other methods of obtaining aggregate data in MongoDB, the aggregation framework is the recommended approach for most work.

                    There are what are called single purpose methods like estimatedDocumentCount(),  count(), and distinct() which are appended to a find() query making them quick to use but limited in scope.

                    The map-reduce framework on MongoDB is a predecessor of the aggregation framework and much more complex to use. MongoDB have deprecated.
                </p>


            </div>
        </div>
    );
};

export default Blog;