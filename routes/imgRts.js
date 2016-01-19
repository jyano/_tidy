 
_.e([mugRts,cutoutRts,fileImgRts], function(fn){fn()})

function mugRts(){
	$a.get('/myMug', function (q, p) {// $l('q.b: ' + q.b); $l('q.un: ' + q.un)
		$myUn = function (q) {
			return {un: q.session.un}
		}
		User.findOne($myUn(q), function (z, u) {
			//$l('in findOne callback'); $l('da: ' + da)
			p.send(u.mug)
		})
	})
	$a.get('/mugByUsername/:un', function (q, p) {
		//$l('q.params.un: ' + q.params.un)
		User.findOne({un: q.params.un}, function (z, u) {
			p.send(u.mug)
		})
	})
	$a.post('/changeMug', function (q, p) {
		// could be a put?
		var ur = q.user
		ur.mug = q.body.dU
		ur.save(function (z, da) {
			p.send(da)
		})
	})
}

function cutoutRts(){
	
	$a.post('/cutout', function (q, p) {// CREATE NEW CUTOUT

	$l('new coutout!')
		Cutout.create({
			un: q.session.un,
			dU: q.body.dU
			
			//, /dats: q.body.dats, data: q.body.d
			// ,physicsData: q.body.dats
		}, function (x, da) {
			p.send(da)
		})
	})
	
	
	$a.get('/cutouts', function (q, p) {//FIND ALL// good: $findAllP('cutout', p)
		Cutout.find(function (x, da) {
			p.send(da)
		})
	})
	
	
	$a.get('/cutout', function (q, p) {
//FIND MY
		Cutout.find({un: q.session.un}, function (x, da) {
			p.send(da)
		})
	})
	
// DELETE
	$a.delete('/cutout', function (q, p) {
		Cutout.remove(q.body, function (x, da) {
			p.send(da)
		})
	})
// DATA
}


function fileImgRts(){
	multer = require('multer')
	uplod = multer({dest: '../tmpUploads/'})
//when a user uploads a pic..
// by default, it first goes to /public/uploads..
// but then i automatically copy it to /pic/uploads..
// example:
//    origPath: public/uploads/58bfc.JPG
//    newPath: public/pics/55e32.JPG
//notice file names are different
//the first name is random at time of orig file save
//new name is based on mongoId (also came from random when pic saved to db)
//i save by mongo id so it can be easily fetched!
	function _id(pic) {
		return pic._id.toString()
	}
	
	function $ImgFile(id, i) {
		return {
			user: id,
			ext: $p.extname(i.path) || '.png',
			name: i.filename,
			size: i.size//, modified: i.lastModifiedDate
		}
	}
	
	$f.rF = $f.readFile
	$f.wF = $f.writeFile
	$p = path
	$p.rs = $p.resolve
	function copyFileTo(origPath, newPath, fn) {
		$f.rF(origPath, function (z, fileData) {
			$f.wF(newPath, fileData, fn)
		})
	}
	
	function newPath(imgFile, pic) {
		var newPath = $p.rs('../imgFiles', _id(pic) + pic.ext)
		$l('origPath: ' + imgFile.path);
		$l('newPath: ' + newPath)
		// for some reason extensions are saved with a starting '.'
		return newPath
	}
	
	$a.post('/imgFile',  //$w.user,
			uplod.single('fieldname'),
			function (q, p, n) {
				$l('post new pic')
				$l(q.body)
				$l(q.file)
				// q.file is the `avatar` file 
				// q.body will hold the text fields, if there were any 
				//bd = q.body; //$l('q.file: '); $l(q.file)
				var i, imgFile
				imgFile = i = q.file //q.files.png || q.files.i
				// var File = $md.pic
				var imgFileOb = $ImgFile(q.session.un, imgFile)
				$l(imgFileOb)
				ImgFile.create(imgFileOb, function created(z, pic) {
					
					//if (z) {$l('ERR:' + z)}
					copyFileTo(imgFile.path, newPath(imgFile, pic), function () {
						pic.save(function saved(z) {
							if (z) {
								$l('z');
								n(z)
							}
							else {
								$l('pic saved');
								p.redirect('/wap/uploads')
							}
						})
					})
					//<- $f.rF(i.path,  function(z, fileData){$f.wF(newPath(i, pic), fileData,  savedToFile)})
				})
			})
	$a.get('/myFileImgs', //$w.user,
			function (q, p) {
				$l('myFileImgs')
				ImgFile.find(//{user: q.session.un},
						function (z, pics) {
							p.json(pics)
						})
			})
}