var request = require('request');
var sleep = require('system-sleep');
var fs = require("fs");
var mkdirp = require('mkdirp');
const JOIN_URL = 'https://join.gov.tw';
const JOIN_POLICE_URL = JOIN_URL + '/policies/search?size=2000&page=';
const JOIN_COMMENT_URL = JOIN_URL + '/joinComments/board/policy/';
const JOIN_CONDITION = '?size=2000&page=';
const ARCHIVE_FOLDER = 'archive/';
const LIST_FOLDER = ARCHIVE_FOLDER+'list/';
const COMMENT_FOLDER = ARCHIVE_FOLDER+'comment/';
const JOIN_LIST_NAME = 'LIST_PAGE';
const JOIN_EXTENSION = '.json';

var listPage = 1;

var headers = {
    'User-Agent': 'Super Agent/0.0.1',
    'Content-Type': 'application/x-www-form-urlencoded'
}

init();
function init(){
	/*
	if (!fs.existsSync(LIST_FOLDER)){
		fs.mkdirSync(LIST_FOLDER);
	}
	if (!fs.existsSync(COMMENT_FOLDER)){
		fs.mkdirSync(COMMENT_FOLDER);
	}
	*/
	mkdirp(LIST_FOLDER, function (err) {
		if (err) console.error(err)
		else console.log('pow!')
	});
	mkdirp(LIST_FOLDER, function (err) {
		if (err) console.error(err)
		else console.log('pow!')
	});
	getList(listPage);
}
function getList(page){
	var opts = {
		url: JOIN_POLICE_URL+page,
		method: 'GET',
		headers: headers,
	}
	request(opts, function (error, response, results) {
		if (!error && response.statusCode == 200) {
			var res = JSON.parse(results);
			//console.log(results);
			var totalPages = res.totalPages;
			var currentPage = res.currentPage;
			//console.log('list currentPage='+currentPage);
			fs.writeFile(LIST_FOLDER+JOIN_LIST_NAME+listPage+JOIN_EXTENSION, results);
			
			var length = res.result.length;
			//console.log('length='+length);
			for (var i = 0; i < length; i++) {
				var uid = res.result[i].policyUid;
				getComment(uid, 1);
				sleep(2000);
			}
			if(totalPages>1 && currentPage < totalPages){
				listPage++;
				getList(listPage);
			}
		}else{
			console.log('get list error='+error+' '+response);
		}
	})
}

function getComment(uid, page){
	//console.log(JOIN_COMMENT_URL+uid+JOIN_CONDITION+page);
	var opts = {
		url: JOIN_COMMENT_URL+uid+JOIN_CONDITION+page,
		method: 'GET',
		headers: headers,
	}
	request(opts, function (error, response, results) {
		if (!error && response.statusCode == 200) {
			var res = JSON.parse(results);
			//console.log(results);
			var totalPages = res.totalPages;
			var currentPage = res.currentPage;
			//console.log('comment currentPage='+currentPage);
			fs.writeFile(COMMENT_FOLDER+uid+"_"+page+JOIN_EXTENSION, results);
			if(totalPages>1 && currentPage < totalPages){
				page++;
				getComment(uid, page);
				sleep(2000);
			}
		}else{
			console.log('get comment error='+error+' '+response);
		}
	})
}