/**
 * MigrateController
 *
 * @description :: Server-side logic for managing migrates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var author = Math.floor(Math.random() * 2) + 1;

var callback = function(err, item) {
	if (err) {
		sails.log(err);
	} else {
		sails.log(item);
	}
};

module.exports = {
    
	'create': function(req, res) {
	    var emails = [
	    	'',
			'ravuthz@gmail.com',
			'admin@gmail.com',
			'manager@gm.com',
			'teacher@gm.com',
			'visitor@gm.com'
		];

		for (var i = 1; i <= 5; i++) {
			
			User.create({auth: i}).exec(callback);
			
			Auth.create({
				email: emails[i],
				password: '123123!@#',
				user: i
			}).exec(callback);
	
			Subject.create({
				name: 'test_' + i,
				note: 'test_' + i,
				author: author
			}).exec(callback);

			Schedule.create({
				name: 'test_' + i,
				note: 'test_' + i,
				author: author,
				hours: Math.floor(Math.random() * 10)
			}).exec(callback);

			Post.create({
				title: 'post_' + i,
				summary: 'post_' + i,
				agentda: 'post_' + i,
				author: author,
				exspected_result: 'post_' + i,
				subject: i
			}).exec(callback);

			Rate.create({
				star: Math.floor(Math.random() * 5),
				text: 'text ' + i,
				post: i,
				author: author
			}).exec(callback);

			PostRate.create({
				post: Math.floor(Math.random() * 5),
				rate: Math.floor(Math.random() * 5)
			}).exec(callback);

			SchedulePost.create({
				schedule: i,
				post: i
			}).exec(callback);

			Homework.create({
				title: 'test 1',
				content: 'just review your old lesson',
				post: i,
				author: author
			}).exec(callback);

		}

		Comment.create({
			text: 'I want to comment on post 1',
			post: 1,
			author: 1
		}).exec(callback);

		Comment.create({
			text: 'I just reply comment on post 1 to mr 1',
			post: 1,
			author: 2
		}).exec(callback);

		Comment.create({
			text: 'I just reply back on post 1 to mr 2',
			post: 1,
			author: 1
		}).exec(callback);

		sails.log('All data created successfully.');
		res.json({ result: 'All data created successfully.' });
	},
	
	'delete': function (req, res) {
	    User.destroy().exec(callback);
		Auth.destroy().exec(callback);
		Subject.destroy().exec(callback);
		Schedule.destroy().exec(callback);
		Post.destroy().exec(callback);
		Rate.destroy().exec(callback);
		Comment.destroy().exec(callback);
		Homework.destroy().exec(callback);
		PostRate.destroy().exec(callback);
		SchedulePost.destroy().exec(callback);
		
		sails.log('Delete all data successfully.');
		res.json({ result: 'Delete all data successfully.'});
	}
};

