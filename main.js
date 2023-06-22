
class User {
	constructor(src, name) {
		this.src = src
		this.name = name
	}
}

function mapUsers(users) {
	users.map((user, index, array) => {
		const main = document.getElementById('main')
		main.appendChild(createVideoArticle(user.src, user.name))
	})
}

function createVideoArticle(src, name) {
	const article = document.createElement('article')
	article.appendChild(createVideo(src))
	article.appendChild(createHeading(name))

	return article
}

function createVideo(src) {
	const video = document.createElement('video')
	video.setAttribute('autoplay', 'true')
	video.setAttribute('controls', 'true')
	video.setAttribute('loop', 'true')

	video.appendChild(createSource(src))
	
	const novideo =
		document.createTextNode('Your browser does not support the video tag.')
	video.appendChild(novideo)

	return video
}

function createSource(src) {
	const source = document.createElement('source')
	source.setAttribute('src', src)
	
	return source
}

function createHeading(name) {
	const heading = document.createElement('h2')
	const text = document.createTextNode(name)
	
	heading.appendChild(text)
	return heading
}

mapUsers([
	{ src: 'video.webm', name: 'Breno Souza' },
	{ src: 'video.webm', name: 'Arthur Figueiredo' },
	{ src: 'video.webm', name: 'Breno Souza' },
	{ src: 'video.webm', name: 'Breno Souza' },
	{ src: 'video.webm', name: 'Breno Souza' },
	{ src: 'video.webm', name: 'Breno Souza' }
])
