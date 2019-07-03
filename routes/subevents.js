const express = require('express');
const router = express.Router();
const multer = require('multer');
const subeventController = require('../controllers/subevents');

const storage = multer.diskStorage({
	destination: function(req,file,cb) {
       cb(null,"./uploads/");
	},
	filename: function(req,file,cb) {
		cb(null,new Date().toISOString()+file.originalname);
	}
});
const fileFilter = (req,file,cb) => {
	if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
		cb(null,true);
	}else {
		cb(null,false);
	}
};
const upload = multer({storage:storage,fileFilter:fileFilter});

router.put("/aniversary/:eventId",subeventController.createsub1);
router.put("/aniversary/stories/:eventId",subeventController.createstories1);
router.put("/aniversary/information/:eventId",subeventController.createinformation1);
router.put("/aniversary/images/:eventId",upload.array('images',5),subeventController.createimages1);

router.put("/birthday/:eventId",subeventController.createsub2);
router.put("/birthday/stories/:eventId",subeventController.createstories2);
router.put("/birthday/information/:eventId",subeventController.createinformation2);
router.put("/birthday/images/:eventId",upload.array('images',5),subeventController.createimages2);

router.put("/wedding/:eventId",subeventController.createsub3);
router.put("/wedding/stories/:eventId",subeventController.createstories3);
router.put("/wedding/information/:eventId",subeventController.createinformation3);
router.put("/wedding/images/:eventId",upload.array('images',5),subeventController.createimages3);

router.put("/office/:eventId",subeventController.createsub4);
router.put("/office/stories/:eventId",subeventController.createstories4);
router.put("/office/information/:eventId",subeventController.createinformation4);
router.put("/office/images/:eventId",upload.array('images',5),subeventController.createimages4);

router.put("/meetup/:eventId",subeventController.createsub5);
router.put("/meetup/stories/:eventId",subeventController.createstories5);
router.put("/meetup/information/:eventId",subeventController.createinformation5);
router.put("/meetup/images/:eventId",upload.array('images',5),subeventController.createimages5);

module.exports = router;