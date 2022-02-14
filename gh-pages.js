var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/gvarph/archnemesis_recipes.git', // Update to point to your repository  
        user: {
            name: 'Gvarph', // update to use your name
            email: 'gvarph006@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
