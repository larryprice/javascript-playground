String.prototype.repeatify = String.prototype.repeatify || function (n) {
	var s = "";
	for (var i = 0; i < n; ++i) {
		s += this;
	}
	return s;
}

console.log("hello".repeatify(3));