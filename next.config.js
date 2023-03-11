module.exports = {
  async redirects() {
    return [
      {
        source: '/talks',
        destination: '/podcast',
        permanent: true,
      },
      {
        source: '/podcasts',
        destination: '/podcast',
        permanent: true,
      },
      {
        source: '/nounstalgia',
        destination: '/history',
        permanent: true,
      },
      {
        source: '/project',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/proposals',
        destination: '/funding/proposals',
        permanent: true,
      },
      {
        source: '/trait',
        destination: '/traits',
        permanent: true,
      },
      {
        source: '/asset',
        destination: '/assets',
        permanent: true,
      },
      {
        source: '/group',
        destination: '/groups',
        permanent: true,
      },
      {
        source: '/subdao',
        destination: '/subdaos',
        permanent: true,
      },
    ];
  },
};
