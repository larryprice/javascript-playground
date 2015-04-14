var fs = require('fs');

var run = function () {
	if (process.argv.length !== 3) {
		console.log("Usage:", process.argv[0], process.argv[1], "path/to/file");
		return -1;
	}

	fs.readFile(process.argv[2], 'utf8', function (err, data) {
		if (err) {
			return console.log(err);
		}

		var lines = data.split('\n');

		for (var i = 0; i < lines.length; ++i) {
			for (var j = 0; j < lines[i].length; ++j) {
				if (lines[i][j] !== ".") {
					if (i === 0 || lines[i - 1][j] === ".") {
						if (j === 0 || lines[i][j - 1] === ".") {
							// find rectangle
							var cols = 1,
								rows = 1;
							// go right until end of string or "."
							for (var jj = j + 1; jj < lines[i].length; ++jj, ++rows) {
								if (lines[i][jj] !== lines[i][j]) {
									break;
								}
							}
							// go down until end of string or "."
							for (var ii = i + 1; ii < lines.length; ++ii, ++cols) {
								if (lines[ii][j] !== lines[i][j]) {
									break;
								}
							}
							console.log(rows + "x" + cols + " tile of character '" + lines[i][j] + "' located at (" + j + "," +
								i + ")");
						}
					}
				}
			}
		}
	});
};

run();