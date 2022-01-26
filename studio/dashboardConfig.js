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
                  buildHookId: '61f1bc2c3b56fb43c2d75fae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dmsxyrt7',
                  apiId: 'd22c7dd9-180e-458a-a867-8ff7002b6d83'
                },
                {
                  buildHookId: '61f1bc2c03726a3cb7b3a1c3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3ee3b7jd',
                  apiId: '92665eb4-3de1-4c35-86f7-fc34e6025d59'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/christina-grannas/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3ee3b7jd.netlify.app',
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
