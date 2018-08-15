var genres = [
	{id: 1, name: 'Comedy'},
	{id: 2, name: 'Drama'},
	{id: 3, name: 'Melodrama'}

];
exports.list = function(req,res) {
	res.render('genres', {title: 'Genres', genres: genres});
};

exports.load = function( req, res, next) {
	var id = req.params.id;
	req.genre = genres[id];
	if(req.genre) {
		next();
	} else {
		var err = new Error('Cannot find genre' + id);
		err.status = 404;
		next(err);
	}
};

export.view = function(req, res) {
	res.render('genres/view', {
		title: 'viewing genre' + req.user.id,
		genre: req.genre
	});
};

exports.edit = function(req, res) {
	res.render('genres/edit', {
		title: 'Editing genre' + req.genre.id,
		genre: req.genre
	});
};

exports.update = function(req, res) {
	var genre = req.body.genre;
	req.genre.id = genre.id;
	req.genre.name = genre.name;
	req.redirect('back');
};