const birthday = require('../models/birthday').birthday;
const meetup = require('../models/meetup').meetup;
const office = require('../models/office').office;
const aniversary = require('../models/aniversary').aniversary;
const wedding = require('../models/weddingevent').wedding;
const User = require('../models/users').User;

const createstories1 = async (req,res,next) => {
    const { story1,
            story2
           } = req.body;
const aniversary = await aniversary.findOne({_id:req.params.eventId});
    try {
            const event = new aniversary({
            name:aniversary.name,
            surname:aniversary.surname,
            partnername : aniversary.partnername,
            partnersurname:aniversary.partnersurname,
            title:aniversary.title,
            date:aniversary.date,
            startTimehr : aniversary.startTimehr,
            startTimemn : aniversary.startTimemn,
            endTimehr : aniversary.endTimehr,
            endTimemn : aniversary.endTimemn,
            createdBy: aniversary.createdBy,
            address : aniversary.address,
            story1 : story1,
            story2: story2
        });
       await aniversary.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createsub1 = async (req,res,next) => {
    const { events
           } = req.body;
const aniversary = await aniversary.findOne({_id:req.params.eventId});
    try {
            const event = new aniversary({
            name:aniversary.name,
            surname:aniversary.surname,
            partnername : aniversary.partnername,
            partnersurname:aniversary.partnersurname,
            title:aniversary.title,
            date:aniversary.date,
            startTimehr : aniversary.startTimehr,
            startTimemn : aniversary.startTimemn,
            endTimehr : aniversary.endTimehr,
            endTimemn : aniversary.endTimemn,
            createdBy: aniversary.createdBy,
            address : aniversary.address,
            story1 : aniversary.story1,
            story2: aniversary.story2,
            events : events
        });
       await aniversary.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createimages1 = async (req,res,next) => {
    const { images
           } = req.body;
const aniversary = await aniversary.findOne({_id:req.params.eventId});
    try {
            const event = new aniversary({
            name:aniversary.name,
            surname:aniversary.surname,
            partnername : aniversary.partnername,
            partnersurname:aniversary.partnersurname,
            title:aniversary.title,
            date:aniversary.date,
            startTimehr : aniversary.startTimehr,
            startTimemn : aniversary.startTimemn,
            endTimehr : aniversary.endTimehr,
            endTimemn : aniversary.endTimemn,
            createdBy: aniversary.createdBy,
            address : aniversary.address,
            story1 : aniversary.story1,
            story2: aniversary.story2,
            events : aniversary.events,
            images : images
        });
       await aniversary.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createinformation1 = async (req,res,next) => {
    const { information
            
           } = req.body;
const aniversary = await aniversary.findOne({_id:req.params.eventId});
    try {
            const event = new aniversary({
            name:aniversary.name,
            surname:aniversary.surname,
            partnername : aniversary.partnername,
            partnersurname:aniversary.partnersurname,
            title:aniversary.title,
            date:aniversary.date,
            startTimehr : aniversary.startTimehr,
            startTimemn : aniversary.startTimemn,
            endTimehr : aniversary.endTimehr,
            endTimemn : aniversary.endTimemn,
            createdBy: aniversary.createdBy,
            address : aniversary.address,
            story1 : aniversary.story1,
            story2: aniversary.story2,
            information : information
        });
            await aniversary.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createsub2 = async (req, res,next) => {
    console.log(req.body);
    const { events
           } = req.body;
           const bday = await birthday.findOne({_id:req.params.eventId});

    try {
        const event = new birthday({
            name: bday.name,
            date:bday.date,
            startTimehr : bday.startTimehr,
            startTimemn : bday.startTimemn,
            endTimehr : bday.endTimehr,
            endTimemn : bday.endTimemn,
            createdBy: bday.createdBy,
            address : bday.address,
            story : bday.story,
            events : events
        });
        console.log(event);
             await birthday.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createstories2 = async (req, res,next) => {
    console.log(req.body);
    const { story
           } = req.body;
           const bday = await birthday.findOne({_id:req.params.eventId});

    try {
        const event = new birthday({
            name: bday.name,
            date:bday.date,
            startTimehr : bday.startTimehr,
            startTimemn : bday.startTimemn,
            endTimehr : bday.endTimehr,
            endTimemn : bday.endTimemn,
            createdBy: bday.createdBy,
            address : bday.address,
            story : story
        });
        console.log(event);
             await birthday.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createimages2 = async (req, res,next) => {
    console.log(req.body);
    const { images
           } = req.body;
           const bday = await birthday.findOne({_id:req.params.eventId});

    try {
        const event = new birthday({
            name: bday.name,
            date:bday.date,
            startTimehr : bday.startTimehr,
            startTimemn : bday.startTimemn,
            endTimehr : bday.endTimehr,
            endTimemn : bday.endTimemn,
            createdBy: bday.createdBy,
            address : bday.address,
            story : bday.story,
            information : bday.information,
            images : images
        });
   console.log(event);
             await birthday.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createinformation2 = async (req, res,next) => {
    console.log(req.body);
    const { information
           } = req.body;
           const bday = await birthday.findOne({_id:req.params.eventId});

    try {
        const event = new birthday({
            name: bday.name,
            date:bday.date,
            startTimehr : bday.startTimehr,
            startTimemn : bday.startTimemn,
            endTimehr : bday.endTimehr,
            endTimemn : bday.endTimemn,
            createdBy: bday.createdBy,
            address : bday.address,
            story : bday.story,
            information : information
        });
   console.log(event);
             await birthday.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};
const createstories3 = async (req,res,next) => {
    const { story1,
            story2
           } = req.body;
const wedding = await wedding.findOne({_id:req.params.eventId});
    try {
            const event = new wedding({
            name:wedding.name,
            surname:wedding.surname,
            partnername : wedding.partnername,
            partnersurname:wedding.partnersurname,
            title:wedding.title,
            date:wedding.date,
            startTimehr : wedding.startTimehr,
            startTimemn : wedding.startTimemn,
            endTimehr : wedding.endTimehr,
            endTimemn : wedding.endTimemn,
            createdBy: wedding.createdBy,
            address : wedding.address,
            story1 : story1,
            story2: story2
        });
      console.log(event);
             await wedding.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createsub3 = async (req,res,next) => {
    const { events
            
           } = req.body;
const wed = await wedding.findOne({_id:req.params.eventId});
    try {
            const event = new wedding({
            name:wed.name,
            surname:wed.surname,
            partnername : wed.partnername,
            partnersurname:wed.partnersurname,
            title:wed.title,
            date:wed.date,
            startTimehr : wed.startTimehr,
            startTimemn : wed.startTimemn,
            endTimehr : wed.endTimehr,
            endTimemn : wed.endTimemn,
            createdBy: wed.createdBy,
            address : wed.address,
            story1 : wed.story1,
            story2: wed.story2,
            events : events
        });
        console.log(event);
             await wedding.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createinformation3 = async (req,res,next) => {
    const { information
            
           } = req.body;
const wed = await wedding.findOne({_id:req.params.eventId});
    try {
            const event = new wedding({
            name:wed.name,
            surname:wed.surname,
            partnername : wed.partnername,
            partnersurname:wed.partnersurname,
            title:wed.title,
            date:wed.date,
            startTimehr : wed.startTimehr,
            startTimemn : wed.startTimemn,
            endTimehr : wed.endTimehr,
            endTimemn : wed.endTimemn,
            createdBy: wed.createdBy,
            address : wed.address,
            story1 : wed.story1,
            story2: wed.story2,
            information : information
        });
        console.log(event);
             await wedding.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};
const createimages3 = async (req,res,next) => {
    const { images
            
           } = req.body;
const wed = await wedding.findOne({_id:req.params.eventId});
    try {
            const event = new wedding({
            name:wed.name,
            surname:wed.surname,
            partnername : wed.partnername,
            partnersurname:wed.partnersurname,
            title:wed.title,
            date:wed.date,
            startTimehr : wed.startTimehr,
            startTimemn : wed.startTimemn,
            endTimehr : wed.endTimehr,
            endTimemn : wed.endTimemn,
            createdBy: wed.createdBy,
            address : wed.address,
            story1 : wed.story1,
            story2: wed.story2,
            information : wed.information,
            images : wed.images
        });
        console.log(event);
             await wedding.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createsub4 = async (req, res,next) => {
    const { events
           } = req.body;
           console.log(req.body);
    const off = await office.findOne({_id:req.params.eventId});
    try {
        const event = new office({
            title: off.title,
            date:off.date,
            startTimehr : off.startTimehr,
            startTimemn : off.startTimemn,
            endTimehr : off.endTimehr,
            endTimemn : off.endTimemn,
            createdBy: off.createdBy,
            address : off.address,
            story  :off.story,
            events : events
        });
      console.log(event);
             await office.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createstories4 = async (req, res,next) => {
    const { story
           } = req.body;
           console.log(req.body);
    const off = await office.findOne({_id:req.params.eventId});
    try {
        const event = new office({
            title: off.title,
            date:off.date,
            startTimehr : off.startTimehr,
            startTimemn : off.startTimemn,
            endTimehr : off.endTimehr,
            endTimemn : off.endTimemn,
            createdBy: off.createdBy,
            address : off.address,
            story  :story
        });
      console.log(event);
             await office.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createinformation4 = async (req, res,next) => {
    const { information
           } = req.body;
           console.log(req.body);
    const off = await office.findOne({_id:req.params.eventId});
    try {
        const event = new office({
            title: off.title,
            date:off.date,
            startTimehr : off.startTimehr,
            startTimemn : off.startTimemn,
            endTimehr : off.endTimehr,
            endTimemn : off.endTimemn,
            createdBy: off.createdBy,
            address : off.address,
            story  :off.story,
            information : information
        });
        console.log(event);
             await office.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createimages4 = async (req, res,next) => {
    const { images
           } = req.body;
           console.log(req.body);
    const off = await office.findOne({_id:req.params.eventId});
    try {
        const event = new office({
            title: off.title,
            date:off.date,
            startTimehr : off.startTimehr,
            startTimemn : off.startTimemn,
            endTimehr : off.endTimehr,
            endTimemn : off.endTimemn,
            createdBy: off.createdBy,
            address : off.address,
            story  :off.story,
            information : off.information,
            images : images
        });
        console.log(event);
             await office.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createsub5 = async (req,res,next) => {
    const {events
         } = req.body;
         console.log(req.body);
    const meet = await meetup.findOne({_id:req.params.eventId});     
    try {
        const event = new meetup({
            name : meet.name,
            topic : meet.topic,
            date : meet.date,
            startTimehr : meet.startTimehr,
            startTimemn : meet.startTimemn,
            endTimehr : meet.endTimehr,
            endTimemn : meet.endTimemn,
            createdBy : meet.createdBy,
            address  : meet.address,
            story : meet.story,
            events : events
        });
        console.log(event);
             await meetup.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};

const createstories5 = async (req,res,next) => {
    const {story
         } = req.body;
         console.log(req.body);
    const meet = await meetup.findOne({_id:req.params.eventId});     
    try {
        const event = new meetup({
            name : meet.name,
            topic : meet.topic,
            date : meet.date,
            startTimehr : meet.startTimehr,
            startTimemn : meet.startTimemn,
            endTimehr : meet.endTimehr,
            endTimemn : meet.endTimemn,
            createdBy : meet.createdBy,
            address  : meet.address,
            story : story
        });
        console.log(event);
             await meetup.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};
const createinformation5 = async (req,res,next) => {
    const {information
         } = req.body;
         console.log(req.body);
    const meet = await meetup.findOne({_id:req.params.eventId});     
    try {
        const event = new meetup({
            name : meet.name,
            topic : meet.topic,
            date : meet.date,
            startTimehr : meet.startTimehr,
            startTimemn : meet.startTimemn,
            endTimehr : meet.endTimehr,
            endTimemn : meet.endTimemn,
            createdBy : meet.createdBy,
            address  : meet.address,
            story : meet.story,
            information : information
        });
        console.log(event);
             await meetup.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};
const createimages5 = async (req,res,next) => {
    const {images
         } = req.body;
         console.log(req.body);
    const meet = await meetup.findOne({_id:req.params.eventId});     
    try {
        const event = new meetup({
            name : meet.name,
            topic : meet.topic,
            date : meet.date,
            startTimehr : meet.startTimehr,
            startTimemn : meet.startTimemn,
            endTimehr : meet.endTimehr,
            endTimemn : meet.endTimemn,
            createdBy : meet.createdBy,
            address  : meet.address,
            story : meet.story,
            information : meet.information,
            images : images
        });
        console.log(event);
             await meetup.updateOne({_id:req.params.ID},event);
       console.log("Updated");
       res.status(200).json(event);
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something went wrong...Please try again later.'
        })
    }
};
module.exports= {
    createstories1,
    createinformation1,
    createimages1,
    createsub1,
    createstories2,
    createinformation2,
    createimages2,
    createsub2,
    createstories3,
    createinformation3,
    createimages3,
    createsub3,
    createstories4,
    createinformation4,
    createimages4,
    createsub4,
    createstories5,
    createinformation5,
    createimages5,
    createsub5
};