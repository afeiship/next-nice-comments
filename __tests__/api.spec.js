require('../src/index');

describe('api.basic test', () => {
  test('nx.niceComments', function () {
    const comments = ['name: next-nice-comments', 'description:Just a lite', 'licence: MIT'];

    console.log(nx.niceComments(comments, 'js'));
    console.log(nx.niceComments(comments, 'css'));
    console.log(nx.niceComments(comments, 'html'));
    console.log(nx.niceComments(comments, 'raw'));
  });
});
