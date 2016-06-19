'use strict';

require('babel-polyfill');

const GitRepo = require('git-repository');
const task = require('./task');

const remote = {
  name: 'github',
  url: 'https://github.com/{user}/{repo}.git',
  branch: 'gh-pages',
};

/**
 * Deploy the contents of the `app/dist` folder to GitHub Pages.
 */
module.exports = task('deploy', () => new Promise((resolve, reject) => {
  // Initialize a new Git repository inside the `/build` folder
  // if it doesn't exist yet
  let p = GitRepo.open('app/dist', { init: true });
  p = p.then(repo => {
    p = p.then(() => repo.setRemote(remote.name, remote.url));
    p = p.then(() => repo.hasRef(remote.url, remote.branch).then(exists => {
      if (exists) {
        p = p.then(() => repo.fetch(remote.name));
        p = p.then(() => repo.reset(`${remote.name}/${remote.branch}`, { hard: true }));
        p = p.then(() => repo.clean({ force: true }));
      }
    }));

    // Build the project in RELEASE mode which
    // generates optimized and minimized bundles
    process.argv.push('release');

    // Push the contents of the dist folder to the remote server via Git
    p = p.then(() => repo.add('--all .'));
    p = p.then(() => repo.commit(`Update ${new Date().toISOString()}`));
    p = p.then(() => repo.push(remote.name, `master:${remote.branch}`));

    resolve(p);
  });

  p.catch(reject);
}));
