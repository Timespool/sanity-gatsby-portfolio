export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61941468b80f820b1560c10c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-sq67ujrf',
                  apiId: '1ca7ffbb-a721-402e-b2e5-4072637bc048'
                },
                {
                  buildHookId: '61941468ca3a72123d0092a2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fdte17py',
                  apiId: 'aee6611b-3328-4d03-9161-cb0855fd7a4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Timespool/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fdte17py.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
