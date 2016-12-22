exports.replace = options => {
	return decodeURIComponent(encodeURIComponent(options.from).replace(encodeURIComponent(options.replace), encodeURIComponent(options.with)));
}
