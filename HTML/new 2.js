const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://timetable-lookup.p.rapidapi.com/TimeTable/YYC/LAX/20191217/",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "64a933ea19msh896bf49da5df23ep17b25bjsn65e728b34a25",
		"X-RapidAPI-Host": "timetable-lookup.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});