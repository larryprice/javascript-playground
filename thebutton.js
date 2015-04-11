var fs = require('fs')

var run = function () {
  if (process.argv.length !== 3) {
    console.log("Usage:", process.argv[0], process.argv[1], "path/to/file");
    return -1;
  }

  parseData(process.argv[2], function (users) {
    users.forEach(function (user) {
      console.log(user.name + ":", user.flair);
    })
  });
};

var parseData = function (filename, callback) {
  fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.split('\n');
    var count = parseInt(data.shift());
    if (count !== data.length) {
      return console.log("Given length did not match.");
    }

    var rollingTotal = 60;
    var users = sortUsers(parseUserData(data));
    users.forEach(function (user, i) {
      var flair = rollingTotal - user.since;
      user.flair = Math.floor(flair);
      rollingTotal += 60 - flair
    });
    callback(users);
  });
};

var parseUserData = function (data) {
  return data.map(function (item) {
    var userData = item.split(' ');
    return {
      name: userData[0].slice(0, -1),
      since: parseFloat(userData[1]),
      flair: undefined
    }
  });
};

var sortUsers = function (users) {
  return users.sort(function (a, b) {
    return a.since - b.since;
  });
}

run();