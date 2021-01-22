import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

// markup
const NotFoundPage = () => (
  <Layout>
    <title>Not found</title>
    Nope...
    <Link to="/">Go home...</Link>
  </Layout>
);

export default NotFoundPage;
