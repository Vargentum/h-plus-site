import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';


const Index = ({ data: {homeJson: {content, purposesTitle, purposes, plansTitle, plans}} }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Box>
      <Title as="h3" size="large">
        {purposesTitle}
      </Title>
    </Box>
    <Gallery items={purposes} />
    <Box>
      <Title as="h3" size="large">
        {plansTitle}
      </Title>
    </Box>
    <Gallery items={plans} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      purposesTitle
      purposes {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      plansTitle
      plans {
        title
        copy
      }
    }
  }
`;
