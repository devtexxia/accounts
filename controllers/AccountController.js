class AccountController {

	constructor(service) {
		this.service = service;
	}
	
	deleteAll(req, res, next) {
		res.status(404).json({code:404, method:"DELETE", route:"/accounts", status:"not found"}).end();
	}
	
	deleteOne(req, res, next) {
		res.status(404).json({code:404, method:"DELETE", route:"/accounts/<id>", status:"not found"}).end();
	}
	
	getAll(req, res, next) {
		res.status(200).json({method:"GET", status:200}).end();
	}
	
	getOne(req, res, next) {
		res.status(404).json({code:404, method:"GET", route:"/accounts/<id>", status:"not found"}).end();
	}
	
	headAll(req, res, next) {
		res.status(404).json({code:404, method:"HEAD", route:"/accounts", status:"not found"}).end();
	}
	
	headOne(req, res, next) {
		res.status(404).json({code:404, method:"HEAD", route:"/accounts/<id>", status:"not found"}).end();
	}
	
	optionsAll(req, res, next) {
		res.status(404).json({code:404, method:"OPTIONS", route:"/accounts", status:"not found"}).end();
	}
	
	optionsOne(req, res, next) {
		res.status(404).json({code:404, method:"OPTIONS", route:"/accounts/<id>", status:"not found"}).end();
	}
	
	patchAll(req, res, next) {
		res.status(404).json({code:404, method:"PATCH", route:"/accounts", status:"not found"}).end();
	}
	
	patchOne(req, res, next) {
		res.status(404).json({code:404, method:"PATCH", route:"/accounts/<id>", status:"not found"}).end();
	}
	
	postAll(req, res, next) {
		try {
			if(req == undefined || req == null)
				throw new Error('req undefined or null');
			if(res == undefined || res == null)
				throw new Error('res undefined or null');
			this.#parseRequest(req);
			res.status(200).json({method:"POST", status:200}).end();
		} catch (error) {
			res.status(400).json({code:400, method:"POST", route:"/accounts/:accountId", status:"bad request"}).end();
		}
	}
	
	postOne(req, res, next) {
		res.status(404).json({code:404, method:"POST", route:"/accounts/<id>", status:"not found"}).end();
	}
	
	putAll(req, res, next) {
		res.status(404).json({code:404, method:"PUT", route:"/accounts", status:"not found"}).end();
	}
	
	putOne(req, res, next) {
		res.status(404).json({code:404, method:"PUT", route:"/accounts/<id>", status:"not found"}).end();
	}
	
	#parseRequest(req) {
		let requestBody = req.body;
		if(requestBody == undefined || requestBody == null)
			throw new Error('requestBody undefined or null');
		this.#parseRequestBody(requestBody);
	}
	
	#parseRequestBody(requestBody) {
		let entries = requestBody.entry;
		if(entries == undefined || entries == null)
			throw new Error('entries undefined or null');
		this.#parseEntries(entries);
	}
	
	#parseEntries(entries) {
		entries.forEach((entry) => {
			if(entry == undefined || entry == null)
				throw new Error('entry undefined or null');
			this.#parseEntry(entry);
		});
	}
	
	#parseEntry(entry) {
		let changes = entry.changes;
		if(changes == undefined || changes == null)
			throw new Error('changes undefined or null');
		this.#parseChanges(changes);
	}
	
	#parseChanges(changes) {
		changes.forEach((change) => {
			if(change == undefined || change == null)
				throw new Error('change undefined or null');
			this.#parseChange(change);
		});
	}
	
	#parseChange(change) {
		let value = change.value;
		if(value == undefined || value == null)
			throw new Error('value undefined or null');
		this.#parseValue(value);
	}
	
	#parseValue(value) {
		let messages = value.messages;
		if(messages == undefined || messages == null)
			throw new Error('messages undefined or null');
		this.#parseMessages(messages);
	}
	
	#parseMessages(messages) {
		messages.forEach((messageObj) => {
			if(messageObj == undefined || messageObj == null)
				throw new Error('messageObj undefined or null');
			this.#parseMessageObj(messageObj);
		})
	}
	
	#parseMessageObj(messageObj) {
		let type = messageObj.type;
		if (type === WhatsappController.AUDIO) {
			/*
			let audio = messageObj.audio;
			let mimeType = audio.mime_type;
			*/
			this.#parseAudio(messageObj);
		} else if (type === WhatsappController.CONTEXT) {
			//let context = messageObj.context;
			this.#parseContext(messageObj);
		} else if (type === WhatsappController.DOCUMENT) {
			/*
			let document = WhatsappController.messageObj.document;
			let mimeType = document.mime_type;
			*/
			this.#parseDocument(messageObj);
		} else if (type === WhatsappController.IMAGE) {
			/*
			let image = messageObj.image;
			let mimeType = image.mime_type;
			*/
			this.#parseImage(messageObj);
		} else if (type === WhatsappController.REFERRAL) {
			let referral = messageObj.referral;
		} else if (type === WhatsappController.STICKER) {
			let sticker = messageObj.sticker;
			let mimeType = sticker.mime_type;
		} else if (type === WhatsappController.TEXT) {
			let text = messageObj.text;
		} else if (type === WhatsappController.VIDEO) {
			let video = messageObj.video;
			let mimeType = video.mime_type;
		} else {
			console.log("» Type: " + type);
		}
	}
	
	#parseAudio(messageObj) {
		
	}
	
	#parseContext(messageObj) {
		
	}
	
	#parseDocument(messageObj) {
		
	}
	
	#parseImage(messageObj) {
		
	}
}

module.exports = AccountController