exports.render = function(req, res) {
  if (req.session.lastVisit) {
    console.log(req.lastVisit);
  }

  req.session.lastVisit = new Date();

  res.render('index', {
    title: 'Hello Fortnite People'
  })
};
