import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()



// local vars
const url = "https://github.com/login/oauth/access_token"
const getGithubUser = async (code) => {
	const accessToken = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify({
			client_id: process.env.GH_CLIENT,
			client_secret: process.env.GH_SECRET,
			code: code,
		})
	})
	
	const {access_token: token} = await accessToken.json()
	console.log('le at', token)
	const userEndpoint = "https://api.github.com/user"
	const user = await fetch(userEndpoint, {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})

	return user.json()
}

app.get('/api/callback', async (req,res) => {
	const code = req.query.code
	console.log('code', code)
	const user = await getGithubUser(code)
	res.send(user)
})
app.listen(7001, () => {
	console.log('Server is listening on port 7001')
})
