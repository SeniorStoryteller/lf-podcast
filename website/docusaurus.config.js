// Docs at https://v2.docusaurus.io/docs/configuration


// Replace 'project-blueprint' with {project name}
const projectName = 'The Linux Foundation Podcast Project'
// Replace 'project-blueprint' with {project name}
const projectSlug = 'linux-foundation-podcast-project'
// Replace 'FINOS' with {name of copyright owner}
const copyrightOwner = 'The Linux Foundation'

module.exports = {
  title: `${projectName}`,
  tagline: `${projectName}`, 
  url: 'https://finos.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon-finos.ico',
  projectName: `${projectName}`,
  organizationName: `${copyrightOwner}`,
  customFields: {
    repoUrl: `https://github.com/finos/${projectSlug}`,
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],
  themeConfig: {
    navbar: {
      title: `${projectName}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
      },
      items: [
        {to: 'docs/podcasts-intro', label: 'Podcasts', position: 'right'},
        {to: 'docs/podcasts/podcast-index', label: 'Latest Podcasts', position: 'right'},
        {to: 'docs/templates/podcast-template', label: 'Podcast Template', position: 'right'},
        {
          href: 'https://github.com/SeniorStoryteller/lf-podcast',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/home',
            },
            {
              label: 'Roadmap',
              to: 'docs/roadmap',
            },
            {
              label: 'Team',
              to: 'docs/team',
            },
            {
              label: 'About FINOS',
              to: 'docs/about-finos',
            }
          ]
        },
        {
          title: 'FINOS',
          items: [
            {
              label: 'FINOS Website',
              to: 'https://regulationinnovation.org/air-events/',
            },
            {
              label: 'Community Handbook',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/80642059/Community+Handbook',
            },
            {
              label: 'Community Governance',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530783/Community+Governance',
            }
          ]
        },
        {
          title: 'About FINOS',
          items: [
            {
              label: 'FINOS Projects on GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'Engage the FINOS Community',
              to: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            }
          ]
        },
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl:
            'https://github.com/finos/open-developer-platform/edit/master/website/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};
