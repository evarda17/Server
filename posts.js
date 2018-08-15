var genres = [
	{id: 1, name: 'Comedy'},
	{id: 2, name: 'Drama'},
	{id: 3, name: 'Melodrama'}

];
exports.list = function(req,res) {
	res.render('posts', {title: 'Genres', posts: posts});
};