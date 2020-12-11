function removeHtmlTag(elemhtml, snippet_count) {
	if (-1 != elemhtml['indexOf']('<')) {
		for (var _0x746ax4 = elemhtml['split']('<'), _0x746ax5 = 0; _0x746ax5 < _0x746ax4['length']; _0x746ax5++) {
			-1 != _0x746ax4[_0x746ax5]['indexOf']('>') && (_0x746ax4[_0x746ax5] = _0x746ax4[_0x746ax5]['substring'](_0x746ax4[_0x746ax5]['indexOf']('>') + 1, _0x746ax4[_0x746ax5]['length']))
		};
		elemhtml = _0x746ax4['join']('');
	};
	for (snippet_count = snippet_count < elemhtml['length'] - 1 ? snippet_count : elemhtml['length'] - 2;
		' ' != elemhtml['charAt'](snippet_count - 1) && -1 != elemhtml['indexOf'](' ', snippet_count);) {
		snippet_count++
	};
	return elemhtml = elemhtml['substring'](0, snippet_count - 1), elemhtml + '…';
}

function createSnippet(postid) {
	var postelem = document['getElementById'](postid);
	postelem['innerHTML'] = '<div class="snippets">' + removeHtmlTag(postelem['innerHTML'], 120) + '</div>';
}

function theme_thumbnail_resize(thUrl, title) {
	var width = 280;
	var height = 180;
	image_tag = '<img width="' + width + '" height="' + height + '" src="' + thUrl['replace']('/s72-c/', '/w' + width + '-h' + height + '-c/') + '" alt="' + title['replace'](/"/g, '') + '" title="' + title['replace'](/"/g, '') + '"/>';
	if (title != '') {
		return image_tag
	} else {
		return ''
	};
}
/* window['onload'] = function() {
	var _0x746ax3 = document['getElementById']('virightcredit');
	if (_0x746ax3 == null) {
		window['location']['href'] = 'http://www..com'
	};
	_0x746ax3['setAttribute']('href', 'http://www..com');
	_0x746ax3['setAttribute']('rel', 'nofollow');
	_0x746ax3['innerHTML'] = 'Created by <a href=\'http://www..com\' rel=\'nofollow\' target=\'_blank\'>Design</a>';
}; */