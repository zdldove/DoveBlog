/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
	// CommonJS
	// var SyntaxHighlighter;
	// typeof(import) != 'undefined' ? SyntaxHighlighter = import('shCore').SyntaxHighlighter : null;

	import SyntaxHighlighter from './shCore.js';
	function Brush()
	{
		var keywords =	'if fi then elif else for do done until while break continue case return in eq ne ge le public private static const define defined '+
						'implements new die exit include include_once require require_once';
		var Definition=	'function class Class CLASS interface PHP_EOL echo __FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__';
		var Class 	  =	'this self parent';
		var commands =  'alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chroot' +
						'cksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df ' +
						'diff diff3 dig dir dircolors dirname dirs du egrep eject enable env ethtool eval ' +
						'exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format ' +
						'free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig ' +
						'import install join kill less let ln local locate logname logout look lpc lpr lprint ' +
						'lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools ' +
						'mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap ' +
						'printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice ' +
						'remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown ' +
						'sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time ' +
						'times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias ' +
						'uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir ' +
						'vi watch wc whereis which who whoami Wget xargs yes'
						;

		this.regexList = [
			{ regex: /^#!.*$/gm,												css: 'preprocessor bold' },
			{ regex: /\/[\w-\/]+/gm,												css: 'plain' },
			// { regex: /(?<=function.*?)\w+(?=.*?)(?={|\()/gm,					css: 'object' },
			// { regex: /(?<=interface.*?)\w+(?=.*?)(?={|\()/gm,					css: 'object' },
			// { regex: /(?<=class.*?)\w+(?=.*?)(?={|\()/gm,						css: 'object' },
			// { regex: /(?<!function[^{]+)\w+(?=[^{]+)(?={|\()/gm,				css: 'Definition' },
			// { regex: /(?<=class&nbsp;)[a-zA-Z0-9]+(?=&)/gm,					css: 'object' },
			// { regex: /\w+(?={|\()/gm,											css: 'Definition' },
			// { regex: /(?<=<(\w)+[^>]*>class<\/\w+>)\w+/gm,				css: 'Definition' },
			{ regex: /(\/\/|#).*$/gm,												css: 'memo' },
			{ regex: /-&gt;|=|!=/gm,											css: 'keyword' },
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,		css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,			css: 'string' },		// single quoted strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),			css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(Definition), 'gm'),			css: 'Definition' },
			{ regex: new RegExp(this.getKeywords(commands), 'gm'),			css: 'functions' },		// commands
			// { regex: new RegExp(this.getKeywords(Class), 'gm'),				css: 'Class' },		// commands
		];
	}

	Brush.prototype	= new SyntaxHighlighter.SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['bash', 'shell'];

	SyntaxHighlighter.SyntaxHighlighter.brushes.Bash = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;

export default {install(Vue,options){
		Vue.prototype.SyntaxHighlighter = SyntaxHighlighter
	}
}