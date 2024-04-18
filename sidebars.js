/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  learnSidebar: [
    {
      type: 'doc',
      id: 'learn/intro',
    },
    {
      type: 'html',
      value: '<hr/>',
    },
    {
      type: 'category',
      label: 'Advanced Introduction',
      collapsed: false,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'learn/advanced-introduction' }],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'learn/tokenomics' }],
    },
    {
      type: 'category',
      label: 'Academic Resources',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'learn/academic-resources' }],
    },
  ],
  participateSidebar: [
    {
      type: 'doc',
      id: 'participate/iron-age-testnet',
    },
    {
      type: 'category',
      label: 'Use Quai',
      collapsed: false,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'participate/use-quai' }],
    },
    {
      type: 'html',
      value: '<hr/>',
    },
    {
      type: 'category',
      label: 'Node',
      collapsed: false,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'participate/node' }],
    },
    {
      type: 'category',
      label: 'Stratum Proxy',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'participate/stratum-proxy' }],
    },
    {
      type: 'category',
      label: 'Miner',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'participate/mining' }],
    },
    {
      type: 'html',
      value: '<hr />',
    },
    {
      type: 'doc',
      id: 'participate/iron-age-testnet-tos',
    },
  ],
  developSidebar: [
    {
      type: 'doc',
      id: 'develop/development-intro',
    },
    {
      type: 'doc',
      id: 'develop/networks',
    },
    {
      type: 'html',
      value: '<hr />',
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      collapsed: false,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'develop/smart-contracts' }],
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'develop/tutorials' }],
    },
    {
      type: 'html',
      value: '<hr />',
    },
    {
      type: 'category',
      label: 'APIs',
      collapsed: false,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'develop/apis' }],
    },
    {
      type: 'category',
      label: 'Quai Postman Collection',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'develop/go-quai-postman' }],
    },
    {
      type: 'html',
      value: '<hr />',
    },
    {
      type: 'doc',
      id: 'develop/develop-faq',
    },
  ],
  wikiSidebar: [
    {
      type: 'category',
      label: 'Docs Wiki',
      items: [{ type: 'autogenerated', dirName: 'wiki' }],
    },
  ],
};

module.exports = sidebars;
