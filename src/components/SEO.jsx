import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title === 'Home' ? 'New Precision Engineering' : `${title} | New Precision Engineering`}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default SEO;
