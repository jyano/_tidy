multer = require('multer')

uplod =  multer({dest: '../tmpUploads/'})
 

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
		return {user: id,
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
				
					 pic.save(function saved(z) {if (z) {$l('z'); n(z)} 
					 else {$l('pic saved');
					 p.redirect('/wap/uploads')}})
				 
				 })
									
									 
				 
				 //<- $f.rF(i.path,  function(z, fileData){$f.wF(newPath(i, pic), fileData,  savedToFile)})
		})
	 	
	
			
							
 })

	 
	

	 