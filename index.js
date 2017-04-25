const fetch = require('node-fetch')

module.exports = async () => {
	// Replace URL in `request` with your REPO:
	const request = await fetch('https://api.github.com/repos/twbs/bootstrap')
	const data = await request.json()
	const repoLink = data['html_url']
	const repoName = data['name']
	const userName = data['owner']['login']
	const userLink = data['owner']['html_url']
	const stars = data['stargazers_count']

	let toReturn = {
		"user": userName,
		"repo_name": repoName,
		"user_link": userLink,
		"repo_link": repoLink,
		"stars": stars
	}
	
	return toReturn
}