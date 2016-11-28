module.exports = {
	pathToKey: function(path, segmentCount) {
		return (path[0] === '/' ? path.substr(1) : path).split('/').splice(0, segmentCount).join('/') || 'root';
	},

	dataToQS: (d) => {
		return Object.keys(d).map((key) => {
			return encodeURIComponent(key) + '=' + encodeURIComponent(d[key]);
		}).join('&');
	},
};
