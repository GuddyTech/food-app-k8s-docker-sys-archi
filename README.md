# food-app-k8s-docker-sys-archi 
This is the food app.  
 
## GitHub Actions With Brach Protection
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see "GitHub's products."

1. The Actions file was set to check if there is BRANCH PROTECTION in the branch. If there is, it passes and shows the set of protections and if it doesn't, it fails
2. It seems not to work well with Private Repositories, because it requires an upgrade to GitHub Pro Account!
3. Never set your secrets in hardcoded forms, instead, save them as secrets in the repository
4. To also see from the browser:     https://api.github.com/repos/guddytech/food-app-k8s-docker-sys-archi/branches
5. The branch-protection-check.yml is used to check if there is BRANCH PROTECTION in the branch where the file is
6. The main.yml is still the same thing, but the branch-protection-check.yml is more modern. I changed the push to be "mai"
  so that it doesn't run 
