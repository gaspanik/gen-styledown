# Styleguide options

### Head

	meta(name="viewport" content="width=device-width, initial-scale=1")
	script(src="styledown.js")
	link(rel="stylesheet" href="styledown.css")
	<!-- link(rel="stylesheet" href="your-stylesheet-here.css") -->
	link(rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css")
	script(src="https://code.jquery.com/jquery.js")
	script(src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js")

### Body

	.container
		.row
			.col-xs-12.col-sm-10.col-sm-offset-1
				h1 Styledown w/ BrowserSync
				p.lead Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
		.row
			.col-xs-12.col-sm-10.col-sm-offset-1
				.sg-container(sg-content)
